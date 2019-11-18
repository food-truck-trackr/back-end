
exports.up = function(knex) {
    return knex.schema.createTable('trucks', truck => {
      truck.increments();
      truck.string('username')
          .notNullable()
          .unique()
          truck.string('password')
          .notNullable()
          user.string('truck-name')
          .notNullable()
          truck.string('email')
          truck.string('phone-number')
          truck.string('location')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('trucks')
  };