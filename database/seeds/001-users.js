
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username:'iheartfood',password:'password', name:'justin', email:'justin@gmail.com', role:'operator'},
        {username:'admin',password:'password', name:'anna', email:'anna@gmail.com', role:'operator'},
        {username:'admin2',password:'password', name:'adam', email:'adam@gmail.com', role:'operator'},
        {username:'admin3',password:'password', name:'bill', email:'bill@gmail.com', role:'operator'},
        {username:'admin4',password:'password', name:'charlie', email:'charlie@gmail.com', role:'diner'},
        {username:'admin5',password:'password', name:'jill', email:'jill@gmail.com', role:'diner'},
        {username:'admin6',password:'password', name:'justin', email:'justin2@gmail.com', role:'diner'},
        {username:'admin7',password:'password', name:'yohana', email:'yohana@gmail.com', role:'diner'},

      ]);
    });
};

