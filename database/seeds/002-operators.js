
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('operators').del()
    .then(function () {
      // Inserts seed entries
      return knex('operators').insert([
        {operator_name:'justins awesome tacos', owner_id:1}
   
      ]);
    });
};
