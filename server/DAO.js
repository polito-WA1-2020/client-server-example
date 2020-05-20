'use strict';

// DAO module for accessing courses and exams
// Data Access Object

const sqlite = require('sqlite3');
const db = new sqlite.Database('movies.sqlite', (err) => {
  if (err) throw err;
});

exports.listMovies = function () {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM movie';
    db.all(sql, [], (err, rows) => {
      if (err) {
        reject(err);
        return;
      }
      const movies = rows.map((e) => ({ id: e.id, title: e.title, score: e.score }));
      resolve(movies);
    });
  });
};

exports.createMovie = function (movie) {
  return new Promise((resolve, reject) => {
    const sql = 'INSERT INTO movie(title, score) VALUES(?, ?)';
    db.run(sql, [movie.title, movie.score], function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this.lastID);
    });
  });
};
