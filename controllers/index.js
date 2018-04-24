const knex = require("../db/knex.js");
const fetch = require('node-fetch');

module.exports = {
  index: function(req, res) {
    res.send('HOMEPAGE');
  },

  // knexexample: function(req, res) {
  //   knex('tablename')
  //     .then((results) => {
  //       res.render('viewname', {ejsvariable:results});
  //     })
  // },
}
