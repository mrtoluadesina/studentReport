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

StudentRecord.prototype.getById = function(id) {
  for(var i = 0; i < db.studentRecords.length; i++) {
    if (db.studentRecords[i].id === id) {
      return db.studentRecords[i];
    }
  }
}

StudentRecord.prototype.getByStudentId = function(student_id) {
  var records = []
  for (var i = 0; i < db.studentRecords.length; i++) {
    if (db.studentRecords[i].student_id === student_id) {
      records.push(db.studentRecords[i]);
    }
  }
  return records;
}

module.exports = StudentRecord;