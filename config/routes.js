//Update the name of the controller below and rename the file.
const index = require("../controllers/index.js")
const dashboard = require("../controllers/dashboard.js")
const register = require("../controllers/register.js")
const login = require("../controllers/login.js")
module.exports = function(app){

  app.get('/', index.index);
  app.post('/register', register.register);
  app.post('/login', login.login);
  app.get('/dashboard', dashboard.dashboard);


  //app.post('/', template.index)
}
