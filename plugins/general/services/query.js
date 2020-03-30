module.exports = {
  random_cards: 'SELECT * FROM cards ORDER BY RANDOM() LIMIT 2;',
  random_project: 'SELECT * FROM projects ORDER BY RANDOM() LIMIT 1;'
}
