var db = require('../db');

function StudentRecord(grade, remark, student_id) {
  this.grade = grade;
  this.remark = remark;
  this.student_id = student_id;
  this.id = db.studentRecords.length > 0 ? db.studentRecords[db.studentRecords.length - 1].id + 1 : 1;
}

StudentRecord.prototype.newRecord = function() {
  return new StudentRecord;
}

module.exports = StudentRecord;