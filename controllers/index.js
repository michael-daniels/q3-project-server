const knex = require("../db/knex.js");
const fetch = require('node-fetch');
const Lob = require('lob')('test_e730dcf98911e40b6c98f22fed84cf2a29e');

module.exports = {
  index: function(req, res) {
    res.send('Home')
  },
  lob: function (req, res) {
    Lob.routes.retrieve('85043', function (err, res) {
      res.json()
      console.log(res)
    })
      .then((data) => {
        res.json(data)
      })
  }
}
