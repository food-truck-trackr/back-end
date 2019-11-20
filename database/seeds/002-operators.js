
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('operators').del()
    .then(function () {
      // Inserts seed entries
      return knex('operators').insert([
        {operator_name: 'good eats'},
        {operator_name: 'bobs burger trucks'},
        {operator_name: 'mobile food solutions'},
        {operator_name: 'grub n go'},
        {operator_name: 'food fast llc'},
        {operator_name: 'i own trucks'}
      ]);
    });
};