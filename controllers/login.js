const knex = require("../db/knex.js");
const fetch = require('node-fetch');

module.exports = {
  login: function(req, res) {
    knex('users')
      .where({
        username: req.body.username,
      })
      .then((user) => {
        console.log("USER DATA", user[0])
        if (user[0].username === req.body.username && user[0].password === req.body.password) {
          req.session.current_user = [{username:req.body.username}];
          res.redirect(`http://localhost:3000/profile/${req.body.username}`)
        }
        else {
          res.redirect(`http://localhost:3000/login`)
        }

      })
  },
}
