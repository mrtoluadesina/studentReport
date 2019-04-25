var db = require('../db');
var User = require('../user/users');
var extend = require('../extend');

function Admin(name, email, password){
  User.call(this, name, email, password);
  this.isSuperAdmin = true;
}

extend(Admin, User);

Admin.prototype = {
  constructor: Admin,
  readUserByType: function(type) {
    var usersFound = [];
    for (var i = 0; i < db.users.length; i++) {
      if (db.users[i].userType === type) {
        usersFound.push(db.users[i]);
      }
    }
    return usersFound;
  },
  getUserById: function(id) {
    for (var i = 0; i < db.users.length; i++) {
      if (db.users[i].id === id) {
        return db.users[i];
      }
    }
  }
}

module.exports = Admin