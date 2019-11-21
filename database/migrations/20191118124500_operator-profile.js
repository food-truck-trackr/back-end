exports.up = function(knex) {
    return knex.schema.createTable('operators', operators => {
      operators.increments()
      operators.string('operator_name')
          .notNullable()
      operators.integer('user_id')
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