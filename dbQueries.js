/*jshint esversion: 6 */

require('./dbHelper.js')();

module.exports = function() {

  createTableIfNecessary = function() {
    const DB_PATH = './quotes.db';
    if (require('fs').existsSync(DB_PATH)) console.log(`File ${DB_PATH} exists. Moving on`);
    else {
      console.log(`${DB_PATH} not found, creating...`);
      openDb();
      getDb().run('CREATE TABLE IF NOT EXISTS quotes(quote text)', (err) => {
        if (err) return console.log(err.message);
        console.log('Quotes table created');
      });
      closeDb();
    }
  };

  insertQuote = function(quote) {
    openDb();
    getDb().run('INSERT INTO quotes(quote) VALUES(?)', quote, (err) => {
      if (err) return console.log(err.message);
      console.log(`Quote saved: ${quote}`);
    });
    closeDb();
  };
};
