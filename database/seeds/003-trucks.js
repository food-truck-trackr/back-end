
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trucks').del()
    .then(function () {
      // Inserts seed entries
      return knex('trucks').insert([
        {truck_name: 'Chipotle in a truck' , location_lat: 14256854 , location_lon: 1245638, food_type:'tex-mex', operators_id:1, departing_time: '10:30'},
        {truck_name: 'Chipotle in a truck2' , location_lat: 142568542 , location_lon: 12456382, food_type:'tex-mex', operators_id:1, departing_time: '10:30'},
        {truck_name: 'Yohanas Cookie Truck' , location_lat: 142568542 , location_lon: 12456382, food_type:'Baked Goods', operators_id:3, departing_time: '10:30'},
        {truck_name: 'Yohanas Cookie Truck2' , location_lat: 142568542 , location_lon: 12456382, food_type:'Baked Goods', operators_id:3, departing_time: '10:30'},
        {truck_name: 'Yohanas Cookie Truck3' , location_lat: 142568542 , location_lon: 12456382, food_type:'Baked Goods', operators_id:3, departing_time: '10:30'},
      ]);
    });
};
