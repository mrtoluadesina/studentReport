var db = require('../db');

function User(name, email, password, userType) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.userType = userType || 'admin';
  this.id = db.users.length > 0 ? db.users[db.users.length - 1].id + 1 : 1; 
  db.users.push(this);
}

module.exports = User;