
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('operators').del()
    .then(function () {
      // Inserts seed entries
      return knex('operators').insert([
        {operator_name:'justins awesome tacos',user_id:1}
   
      ]);
    });
};
