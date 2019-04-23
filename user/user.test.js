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
  var jon = new User ('Jon Snow', 'jonsnow@housestark.got', 'iknownothing', 'teacher');
  var arya = new User('Arya Stark', 'aryastark@housestark.got', 'agirlhasnoface');
  expect(jon.createRecord('4.3', 'Very brilliant chap', '0032')).toBe('Student Record Successfully added');
  expect(arya.createRecord('3.0', 'Decent Attempt', '0012')).toBe('You do not have permission to do this');
});

test('Reading a record by Id', function() {
  var ceisei = new User('Cersei Lannister', 'ceisei@houselannister.got', 'neckkk', 'admin');
  expect(ceisei.readById(1)).toEqual(expect.objectContaining({grade : '4.3'}));
})