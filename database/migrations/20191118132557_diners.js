
exports.up = function(knex) {
    return knex.schema.createTable('diners', tbl => {
        tbl.increments()
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
    return knex.schema.dropTableIfExists('diners')
  };