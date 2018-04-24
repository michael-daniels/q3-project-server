const knex = require("../db/knex.js");
const fetch = require('node-fetch');

module.exports = {
  dashboard: function(req, res) {
    knex('users')
      .where({
        username:req.username
      })
      .then((results) => {
        console.log("DATABASE", results)
        res.json(results[0])
      })
    // res.json({
    //   name:'Michael',
    //   petname:'Sparky',
    //   petgender:'Female',
    //   petage:4,
    //   datelost:'4/18/18',
    //   crossroadslost: 'Central Ave and 7th Ave',
    // });
  },

  // knexexample: function(req, res) {
  //   knex('tablename')
  //     .then((results) => {
  //       res.render('viewname', {ejsvariable:results});
  //     })
  // },
}
