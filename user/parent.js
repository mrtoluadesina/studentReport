var db = require('../db');
var User = require('../user/users');
var extend = require('../extend');

function Parent(name, email, password) {
  User.call(this, name, email, password);
  this.isParent = true;
}

extend(Parent, User);

Parent.prototype = {
  constructor: Parent, 
  seeChildRecord: function(student_id) {
    return User.prototype.readByStudentId(student_id);
  }
}

module.exports = Parent