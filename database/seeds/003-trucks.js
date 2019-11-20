exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {truck_name: 'Chipotle in a truck' , location_lat: 14256854 , location_lon: 1245638, food_type:'tex-mex', operators_id:1 },
       
      ]);
    });
};
