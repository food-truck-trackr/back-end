
exports.up = function(knex) {
    return knex.schema.createTable('diners', tbl => {
        tbl.increments()
        tbl.string('diner_name')
          .notNullable()
        tbl.string('location')
          .notNullable()      
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('diners')
  };