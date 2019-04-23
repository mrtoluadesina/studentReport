var db = require('../db');
var User = require('./users');

function Admin(name, email, password){
  User.call(this, name, email, password);
  this.isSuperAdmin = true;
}

extend(Admin, User);

Admin.prototype = {
  constructor: Admin
}