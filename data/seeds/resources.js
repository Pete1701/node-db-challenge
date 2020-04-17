exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Mathematics', description: ''},
        {id: 2, name: 'Hacking', description: ''},
        {id: 3, name: 'Money', description: ''}
      ]);
    });
};
