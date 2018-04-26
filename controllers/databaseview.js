const knex = require("../db/knex.js");
const fetch = require('node-fetch');


module.exports = {
  users: function(req, res) {
    knex('users')
      .then((results) => {
        console.log("ALL USERS", results)
        res.json(results)
      })
  },

}
