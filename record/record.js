var db = require('../db');

function StudentRecord(grade, remark, student_id) {
  this.grade = grade;
  this.remark = remark;
  this.student_id = student_id;
  this.id = db.studentRecords.length > 0 ? db.studentRecords[db.studentRecords.length - 1].id + 1 : 1;
}

StudentRecord.prototype = {
  constructor: StudentRecord,
  newRecord: function() {
    return new StudentRecord;
  },
  getById: function(id) {
    for(var i = 0; i < db.studentRecords.length; i++) {
      if (db.studentRecords[i].id === id) {
        return db.studentRecords[i];
      }
    }
  },
  getByStudentId: function(student_id) {
    var records = []
    for (var i = 0; i < db.studentRecords.length; i++) {
      if (db.studentRecords[i].student_id === student_id) {
        records.push(db.studentRecords[i]);
      }
    }
    return records;
  },
  editRecord: function(id, grade, remark) {
    var recordToUpdate = StudentRecord.prototype.getById(id);
    recordToUpdate.grade = grade;
    recordToUpdate.remark = remark;
    return 'Student Record Updated';
  },
  removeById: function(id) {
    var recordtoDeleteFrom = StudentRecord.prototype.getById(id);
    db.studentRecords.splice(db.studentRecords.indexOf(recordtoDeleteFrom), 1);
    return 'Student Record Deleted';
  },
  removeAll: function() {
    db.studentRecords.length = 0;
    return 'All Student Records Deleted';
  }
}

module.exports = StudentRecord;