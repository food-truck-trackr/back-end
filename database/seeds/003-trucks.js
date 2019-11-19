exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {truck_name: 'Chipotle in a truck' , location: 'Austin, TX'},
        {truck_name: 'FiveGuys But in  truck' , location: 'Carrollton, TX'},
        {truck_name: 'NordHaus Pickled Fish truck' , location: 'Rockford, IL'},
        {truck_name: 'Crazy Fuzio Food' , location: 'St. Paul, MN'},
        {truck_name: 'Bills BBQ Truck' , location: 'Sicklerville, NJ'},
        {truck_name: 'Food on wheels in a truck' , location: 'Bee Cave, TX'}
      ]);
    });
};