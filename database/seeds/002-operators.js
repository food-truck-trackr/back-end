
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diners').del()
    .then(function () {
      // Inserts seed entries
      return knex('diners').insert([
        {company_name: 'good eats'},
        {company_name: 'bobs burger trucks'},
        {company_name: 'mobile food solutions'},
        {company_name: 'grub n go'},
        {company_name: 'food fast llc'},
        {company_name: 'i own trucks'}
      ]);
    });
};