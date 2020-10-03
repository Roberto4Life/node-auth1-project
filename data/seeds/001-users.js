
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'luis', password: 'password'},
        {id: 2, username: 'user', password: 'password'},
        {id: 3, username: 'name', password: 'password'}
      ]);
    });
};
