
exports.up = function(knex) {
    return knex.schema.createTable('operator_trucks', tbl => {
        tbl.increments()
        tbl.integer('operators_id')
          .references('id')
          .inTable('operators')
          .notNullable()
        tbl.integer('truck_id')
          .references('id')
          .inTable('food_trucks')
          .notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('operator_trucks')
  };