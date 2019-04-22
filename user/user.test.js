var db = require('./../db');
var User = require('./users');

test('Checking for instance of User', function() {
  var length = db.users.length;
  expect(length).toBe(0);
  var jon = new User('Job Snow', 'jonsnow@housestark.got', 'iknownothing');
  expect(jon instanceof User).toBeTruthy();
  expect(length + 1).toBe(1);
})