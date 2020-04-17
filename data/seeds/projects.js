exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {      
      return knex('projects').insert([
        {id: 1, name: 'World Domination', description: '', completed: false},
        {id: 2, name: 'Get Rich Quick', description: '', completed: false},
        {id: 3, name: 'Revenge', description: '', completed: false},
        {id: 4, name: 'More Instagram Followers', description: '', completed: false},
        {id: 5, name: 'Find the Holy Grail', description: '', completed: false},
        {id: 6, name: 'Steal Coworker\'s Identity', description: '', completed: false}
      ]);
    });
};
