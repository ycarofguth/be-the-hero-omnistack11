
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ongs').del()
    .then(function () {
      // Inserts seed entries
      return knex('ongs').insert([
        {
          id: '5e75f5b7', 
          name: 'ong_1',
          email: 'contato@ong_1.com',
          whatsapp: '41911111111',
          city: 'Blumenal',
          uf: 'SC',
        },
        {
          id: '2d2d5309', 
          name: 'ong_2',
          email: 'contato@ong_2.com',
          whatsapp: '42922222222',
          city: 'São Paulo',
          uf: 'SP',
        },
        {
          id: '76900a49', 
          name: 'ong_3',
          email: 'contato@ong_3.com',
          whatsapp: '43933333333',
          city: 'Rio de Janeiro',
          uf: 'RJ',
        },
      ]);
    });
};
