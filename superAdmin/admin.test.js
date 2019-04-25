var db = require('../db');
var User = require('../user/users');
var Admin = require('./admin');

test('Read users by type', function() {
  var tolu = new Admin('super', 'super@studentreport.it', 'killthis');
  new User('Bella', 'bella@school.teach', 'teachEnglish', 'teacher');
  new User('Rose', 'rose@school.teach', 'teachPhysics', 'teacher');
  expect(tolu.readUserByType('teacher')).toEqual(expect.arrayContaining([expect.objectContaining({userType: 'teacher'})]));
});

test('get User by Id', function() {
  var bolu = new Admin('super', 'super@studentreport.it', 'killthis');
  new User('Bella', 'bella@school.teach', 'teachEnglish', 'teacher');
  new User('Rose', 'rose@school.teach', 'teachPhysics', 'teacher');
  expect(bolu.getUserById(2)).toEqual(expect.objectContaining({id : 2}));
});