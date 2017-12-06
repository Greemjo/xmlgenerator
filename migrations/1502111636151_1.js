exports.up = (pgm) => {
  return pgm.createTable('xml', {
    id: 'id',
    first: 'text',
    second: 'text',
    third: 'text'
  });
};

exports.down = (pgm) => {
  return pgm.dropTable('xml');
};
