const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config);
connection.connect();


const getAll = (callback) => {
  const query = 'SELECT * FROM homes ORDER BY RAND() LIMIT 5';
  connection.query(query, (err, result) => {
    if (err) {
      callback(err);
    } else {
      callback(null, result);
    }
  });
};

const addHouse = (arr, callback) => {
  const query = 'INSERT INTO homes (img, house_type, location, description, cost_per_night, rating, votes) VALUES ?';
  connection.query(query, [arr], (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null, null);
    }
  });
};

module.exports = {
  getAll,
  addHouse,
};