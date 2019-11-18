exports.up = function(knex) {
    return knex.schema.createTable('operator_profile', tbl => {
        tbl.increments()
        tbl.string('company_name')
          .notNullable()
        tbl.integer('number_of_trucks')
          .unsigned()
        })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('operator_profile')
  };