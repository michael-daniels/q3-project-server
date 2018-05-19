const knex = require("../db/knex.js");
const fetch = require('node-fetch');

module.exports = {
  login: function(req, res) {
    knex('users')
      .where({
        username: req.body.username,
      })
      .then((user) => {
        let randomKey = 'lskjf0945'
        console.log("USER DATA", user[0])
        if (user[0].username === req.body.username && user[0].password === req.body.password) {
          req.session.current_user = [{username:req.body.username}];
          res.redirect(`https://straybase.herokuapp.com/profile/${req.body.username}?${randomKey}`)
        }
        else {
          res.redirect(`https://straybase.herokuapp.com/login`)
        }

      })
  },
}
