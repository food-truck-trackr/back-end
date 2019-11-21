
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
    tbl.increments();
    tbl.string('username')
        .notNullable()
        .unique()
        tbl.string('password')
        .notNullable()
        tbl.string('name')
        tbl.string('email')
        tbl.string('role')
        .notNullable()
        
 })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
};