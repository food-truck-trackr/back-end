
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'iheartfood',password:'password', name:'justin', email:'justin@gmail.com', role:'operator'},
      ]);
    });
};
// user.increments();
// user.string('username')
//     .notNullable()
//     .unique()
//     user.string('password')
//     .notNullable()
//     user.string('name')
//     user.string('email')
//     user.string('role')
//     .notNullable()
    
// })
// };