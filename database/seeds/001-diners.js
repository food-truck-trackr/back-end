
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('diners').del()
    .then(function () {
      // Inserts seed entries
      return knex('diners').insert([
        {diner_name: 'jerry smith' , location: 'Austin, TX'},
        {diner_name: 'rick sanchez' , location: 'Carrollton, TX'},
        {diner_name: 'jeff Jimson' , location: 'Rockford, IL'},
        {diner_name: 'Justin Nichols' , location: 'St. Paul, MN'},
        {diner_name: 'Yohana Torress' , location: 'Sicklerville, NJ'},
        {diner_name: 'tim bobinsons' , location: 'Bee Cave, TX'}
      ]);
    });
};