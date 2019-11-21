
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('operators').del()
    .then(function () {
      // Inserts seed entries
      return knex('operators').insert([
        {operator_name: 'Admin food ', user_id: 1},
        {operator_name: 'Admin food2', user_id: 2},
        {operator_name: 'Yoyo Inc', user_id: 7}
      ]);
    });
};
