const knex = require("../db/knex.js");
const fetch = require('node-fetch');

module.exports = {
  dashboard: function(req, res) {
    res.json({
      name:'Michael',
      petname:'Sparky',
      petage:4,
      datelost:'4/18/18',
    });
  },

  // knexexample: function(req, res) {
  //   knex('tablename')
  //     .then((results) => {
  //       res.render('viewname', {ejsvariable:results});
  //     })
  // },
}
