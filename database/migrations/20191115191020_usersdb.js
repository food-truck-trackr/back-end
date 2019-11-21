
exports.up = function(knex) {
  return knex.schema.createTable('users', users => {
    users.increments();
    users.string('username')
        .notNullable()
        .unique()
        users.string('password')
        .notNullable()
        users.string('name')
        users.string('email')
        users.string('role')
        .notNullable()
        
 })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};