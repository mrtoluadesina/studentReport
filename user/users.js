var db = require('../db');
var studentRecord = require('../record/record');

function User(name, email, password, userType) {
  this.name = name;
  this.email = email;
  this.password = password;
  this.userType = userType || 'student';
  this.id = db.users.length > 0 ? db.users[db.users.length - 1].id + 1 : 1; 
  db.users.push(this);
}

User.prototype = {
  constructor: User,
  createRecord: function(grade, remark, student_id) {
    if (this.userType !== 'student') {
      var addRecord = studentRecord.prototype.newRecord()
      addRecord.grade = grade;
      addRecord.remark = remark;
      addRecord.student_id = student_id;
      db.studentRecords.push(addRecord);
      return 'Student Record Successfully added';
    } return 'You do not have permission to do this';
  },
  readById: function(id) {
    if (this.userType !== 'student') {
      return studentRecord.prototype.getById(id);
    } return 'You do not have permission to do this';
  },
  readByStudentId: function(student_id) {
    if (this.userType !== 'student') {
      return studentRecord.prototype.getByStudentId(student_id);
    } return 'You do not have permission to do this';
  },
  updateStudentRecord: function(id, grade, remark) {
    if (this.userType !== 'student' && this.userType !== 'parent') {
      return studentRecord.prototype.editRecord(id, grade, remark);
    } return 'You do not have permission to do this';
  },
  deletedAStudentRecord: function(id) {
    if (this.userType === 'admin') {
      return studentRecord.prototype.removeById(id);
    } return 'You do not have permission to do this';
  },
  deleteAllStudentRecords: function() {
    if (this.userType === 'admin') {
      return studentRecord.prototype.removeAll();
    } return 'You do not have permission to do this';
  }
}

module.exports = User;