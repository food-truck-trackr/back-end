exports.up = function(knex) {
    return knex.schema.createTable('operators', tbl => {
        tbl.increments()
        tbl.string('operator_name')
          .notNullable()
          tbl.integer('user_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('operators')
  };