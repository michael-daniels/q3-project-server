const knex = require("../db/knex.js");
const fetch = require('node-fetch');

module.exports = {
  index: function(req, res) {
    res.send('Home')
  },
}
