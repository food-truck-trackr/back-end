
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('operators').del()
    .then(function () {
      // Inserts seed entries
      return knex('operators').insert([
        {operator_name: "Admin food ", user_id: 1},
        {operator_name: "Admin food2 ", user_id: 3},
        {operator_name: 'Admin Food 3', user_id: 4}
      ]);
    });
};
