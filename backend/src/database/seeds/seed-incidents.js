
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('incidents').del()
    .then(function () {
      // Inserts seed entries
      return knex('incidents').insert([
        {
          id: 1, 
          title: 'Caso_1',
          description: 'Coisas que aconteceram no caso 1',
          value: 135.65,
          ong_id: '5e75f5b7',
        },
        {
          id: 2, 
          title: 'Caso_2',
          description: 'Coisas que aconteceram no caso 2',
          value: 1235.65,
          ong_id: '5e75f5b7',
        },
        {
          id: 3, 
          title: 'Caso_3',
          description: 'Coisas que aconteceram no caso 3',
          value: 324.65,
          ong_id: '2d2d5309',
        },
        {
          id: 4, 
          title: 'Caso_4',
          description: 'Coisas que aconteceram no caso 4',
          value: 564.55,
          ong_id: '2d2d5309',
        },
        {
          id: 5, 
          title: 'Caso_5',
          description: 'Coisas que aconteceram no caso 5',
          value: 74.52,
          ong_id: '76900a49',
        },
        {
          id: 6, 
          title: 'Caso_6',
          description: 'Coisas que aconteceram no caso 6',
          value: 3524.65,
          ong_id: '76900a49',
        },
      ]);
    });
};
