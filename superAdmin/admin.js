var db = require('../db');
var User = require('../user/users');

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
      if (db.users[i].type === type) {
        usersFound.push(db.users[i]);
      }
    }
    return usersFound;
  }
}