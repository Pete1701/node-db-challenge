exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'solve prime number theory', notes: '', completed: false, project_id: 1},
        {id: 2, description: 'crack cyber security', notes: '', completed: false, project_id: 1},
        {id: 3, description: 'blackmail world leaders', notes: '', completed: false, project_id: 1},        
        {id: 4, description: 'collect all the sheep in Scotland', notes: '', completed: false, project_id: 2},
        {id: 5, description: 'find Japanese investors', notes: '', completed: false, project_id: 2},
        {id: 6, description: '????', notes: '', completed: false, project_id: 2},
        {id: 7, description: 'profit', notes: '', completed: false, project_id: 2},
        {id: 8, description: 'turn your enemy into a flea', notes: '', completed: false, project_id: 3},
        {id: 9, description: 'put the flea in a box', notes: '', completed: false, project_id: 3},
        {id: 10, description: 'mail the box to yourself and when it arrives...', notes: '', completed: false, project_id: 3},
        {id: 11, description: 'smash it with a hammer (evil laugh)', notes: '', completed: false, project_id: 3}
      ]);
    });
};
