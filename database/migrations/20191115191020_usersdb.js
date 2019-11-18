
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
     user.string('location')
     user.boolean('selected')
     .defaultTo(false)
 })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};