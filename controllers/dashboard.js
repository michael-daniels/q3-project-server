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
  permissions: function(req, res) {
    if (req.session.current_user[0].username === req.params.currentUser) {
      res.json({permissions:'all'})
    }
    else {
      res.json({permissions:'none'})
    }
  },
  commentsget: function(req, res) {
    knex('comments')
      .where({
        user_id:req.params.user_id
      })
      .then((results) => {
        console.log("DATABASE", results)
        res.json(results)
      })
  },
  commentspost: function(req, res) {
    knex('comments')
      .insert({
        user_id: req.params.user_id,
        username: req.body.username,
        content: req.body.content,
      })
      .then(() => {
        res.sendStatus('200')
      })
  },
  commentdelete: function(req, res) {
    knex('comments')
      .where('id', req.params.id)
      .del()
      .then(() => {
        res.sendStatus('200')
      })
  },

}
