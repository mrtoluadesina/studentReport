var db = require('../db');
var User = require('./users');
var Record = require('../record/record');

test('Checking for instance of User', function() {
  var length = db.users.length;
  expect(length).toBe(0);
  var jon = new User('Jon Snow', 'jonsnow@housestark.got', 'iknownothing');
  expect(jon instanceof User).toBeTruthy();
  expect(length + 1).toBe(1);
});

test('Creating a student Record', function() {
  var jon = new User('Jon Snow', 'jonsnow@housestark.got', 'iknownothing', 'teacher');
  var arya = new User('Arya Stark', 'aryastark@housestark.got', 'agirlhasnoface');
  expect(jon.createRecord('4.3', 'Very brilliant chap', '0032')).toBe('Student Record Successfully added');
  expect(arya.createRecord('3.0', 'Decent Attempt', '0012')).toBe('You do not have permission to do this');
});

test('Reading a record by Id', function() {
  var cersei = new User('Cersei Lannister', 'ceisei@houselannister.got', 'neckkk', 'admin');
  expect(cersei.readById(1)).toEqual(expect.objectContaining({grade : '4.3'}));
})

test('Reading a student record by student Id', function() {
  var cersei = new User('Cersei Lannister', 'ceisei@houselannister.got', 'neckkk', 'admin');
  expect(cersei.readByStudentId('0032')).toEqual(expect.arrayContaining([expect.objectContaining({student_id : '0032'})]));
})

test('Editing a Student Record', function() {
  var jon = new User('Jon Snow', 'jonsnow@housestark.got', 'iknownothing', 'teacher');
  var petyr = new User('Petyr Baelish', 'petyr@housebaelish.got', 'iamlittlefinger', 'parent');
  expect(jon.updateStudentRecord(1, '4.5', 'This young chap keeps breaking his own records')).toMatch('Student Record');
  expect(petyr.updateStudentRecord(1, '4.34', 'Nothing lasts, so keep working hard')).toBe('You do not have permission to do this');
});

test('Deleting a student Record', function() {
  var jon = new User('Jon Snow', 'jonsnow@housestark.got', 'iknownothing', 'teacher');
  var cersei = new User('Cersei Lannister', 'ceisei@houselannister.got', 'neckkk', 'admin');
  expect(cersei.createRecord('4.25', 'His head is really on his neckkk', '0117')).toBe('Student Record Successfully added');
  console.log(db.studentRecords);
  expect(cersei.deletedAStudentRecord(2)).toBe('Student Record Deleted');
  expect(jon.deletedAStudentRecord(1)).toMatch('You do not have ');
  console.log(db.studentRecords);
});

test('Deleting all Users', function() {
  var jon = new User('Jon Snow', 'jonsnow@housestark.got', 'iknownothing', 'teacher');
  var cersei = new User('Cersei Lannister', 'ceisei@houselannister.got', 'neckkk', 'admin');
  var length = db.studentRecords.length;
  expect(jon.deleteAllStudentRecords()).toMatch('You do not have ');
  expect(cersei.deleteAllStudentRecords()).toBe('All Student Records Deleted');
  expect(length - 1).toBe(0);
});