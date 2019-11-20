exports.up = function(knex) {
    return knex.schema.createTable('operators', tbl => {
        tbl.increments()
        tbl.string('operator_name')
          .notNullable()
        tbl.integer('owner_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('users')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
        // tbl.string('username')
        //   .notNullable()
        //   .unique()
        // tbl.string('password')
        //   .notNullable()
        // tbl.string('email')
        // tbl.string('name')
        // tbl.string('role')
        //   .notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('operators')
  };