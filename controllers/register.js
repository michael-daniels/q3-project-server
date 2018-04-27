const knex = require("../db/knex.js");
const fetch = require('node-fetch');

module.exports = {
  register: function(req, res) {
    knex('users')
      .then((users) => {
        console.log("ALL USERS", users)
        let usernameTaken = false
        for (let i = 0; i < users.length; i++) {
          if (users[i].username === req.body.username) {
            usernameTaken = true
          }
        }
        if (usernameTaken === true) {
          res.redirect('http://localhost:3000/register?usernametaken=true')
        }
        else {
          knex('users')
            .insert({
              username:req.body.username,
              petname: req.body.petname,
              lostorfound: req.body.lostorfound,
              avatarurl: req.body.avatarurl,
              petbreed: req.body.petbreed,
              petgender: req.body.petgender,
              datelostorfound: req.body.datelostorfound,
              crossroadslost: req.body.crossroadslost,
              password: req.body.password,
            })
            .then(() => {
              res.redirect('http://localhost:3000/login')
            })
        }
      })

  },
}
