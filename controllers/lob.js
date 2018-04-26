const knex = require("../db/knex.js");
const fetch = require('node-fetch');
const Lob = require('lob')('test_e730dcf98911e40b6c98f22fed84cf2a29e');

module.exports = {
  lob: function (req, res) {
    Lob.areas.create({
      description: 'Test Area',
      front: '<h1>BLAHHHHHHHHHH</h1>',
      back: 'https://lob.com/areaback.pdf',
      routes: [req.params.zip],
      target_type: 'residential'
    }, function (err, response) {
      if(err) {
        console.log("ERRRROR", err)
        res.send(err)
      }
      else {
        console.log("RESPONNNNNSE", response)
        res.json(response)
      }
    })
  }
}
