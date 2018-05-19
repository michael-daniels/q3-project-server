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
          res.redirect('https://straybase.herokuapp.com/register?usernametaken=true')
        }
        else {

          // if (!req.files) {
          //   return res.status(400).send('No files were uploaded.');
          // }
          // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
          let sampleFile = req.files.sampleFile;
          let imgRoute = `./public/images/${Date.now() + '-' + sampleFile.name}`
          let imgLink = imgRoute.replace('./public', 'https://straybase-server.herokuapp.com')
          // Use the mv() method to place the file somewhere on your server
          sampleFile.mv(imgRoute, function(err) {
            if (err) {
              console.log('UPLOAD ERRORRRRRR', req.files.sampleFile.name)
              return res.status(500).send(err);
            }
          });

          knex('users')
            .insert({
              username:req.body.username,
              petname: req.body.petname,
              lostorfound: req.body.lostorfound,
              avatarurl: imgLink,
              petbreed: req.body.petbreed,
              petgender: req.body.petgender,
              datelostorfound: req.body.datelostorfound,
              crossroadslost: req.body.crossroadslost,
              city: req.body.city,
              state: req.body.state,
              zip: req.body.zip,
              password: req.body.password,
            })
            .then(() => {
              res.redirect('https://straybase.herokuapp.com/login')
            })
        }
      })

  },

  upload_img: function(req, res) {

  },
}
