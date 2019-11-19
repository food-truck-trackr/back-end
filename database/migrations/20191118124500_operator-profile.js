exports.up = function(knex) {
    return knex.schema.createTable('operators', tbl => {
        tbl.increments()
        tbl.string('operator_name')
          .notNullable()
        })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('operators')
  };