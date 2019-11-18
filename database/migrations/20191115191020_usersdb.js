
exports.up = function(knex) {
  return knex.schema.createTable('users', user => {
    user.increments();
    user.string('username')
        .notNullable()
        .unique()
        user.string('password')
        .notNullable()
        user.string('name')
        user.string('email')
        user.string('role')
        user.boolean('selected')
     .notNullable()
     .defaultTo(false)
 })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};