var db = require('../db');

function User(name, email, password) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.id = db.users.length > 0 ? db.users[db.users.length - 1].id + 1 : 1; 
}

module.exports = User;