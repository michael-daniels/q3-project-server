const knex = require("../db/knex.js");
const fetch = require('node-fetch');

module.exports = {
  user: function(req, res) {
    knex('users')
      .where({
        username:req.params.username
      })
      .then((results) => {
        console.log("DATABASE", results)
        res.json(results[0])
      })
  },

}
