
exports.up = function(knex) {
    return knex.schema.createTable('profile_trucks', tbl => {
        tbl.increments()
        tbl.integer('operator_profile_id')
          .references('id')
          .inTable('operator_profile')
          .notNullable()
        tbl.integer('truck_id')
          .references('id')
          .inTable('food_trucks')
          .notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('profile_trucks')
  };