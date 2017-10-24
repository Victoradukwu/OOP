
const chai = require('chai');

const assert = chai.assert;

const Staff = require('../src/main.js').Staff;
const Patience = require('../src/main.js').Patience;
const Doctor = require('../src/main.js').Doctor;


const dannie = new Staff('Dannie', 'Duke', 100, 'Permanent');
const dave = new Patience('Davie', 'Duke', 100, 'Computer Science');
const rosie = new Doctor('Rosie', 'Duke', 100, 'Permanent');

describe('The Doctor class', () => {
  describe('.addSpecialties', () => {
    it('should be able to add a specialties', () => {
      rosie.addSpecialties('Gyneacology');
      assert.equal(rosie.specialties[0], ['Gyneacology']);
    });
  });

  describe('Person.fullName', () => {
    it('should be able to call method of the superclass', () => {
      assert.equal(rosie.fullName(), 'My name is: Rosie Duke');
    });
  });

  describe('Staff.description', () => { // A doctor should be able to call a method of staff
    it('should be able to call method of the parent class staff', () => {
      assert.equal(rosie.description(), 'I am a Permanent staff');
    });
  });
});// End of tests on the Doctor class

// testing the class Staff
describe('The Staff class', () => {
  describe('.description', () => { // testing the .describe method of class Staff
    it('should be able to get a staff description', () => {
      assert.equal(dannie.description(), 'I am a Permanent staff');
    });
  });
  describe('Member.fullName', () => { // A staff is able to call a method of the superclass
    it('should be able to call method of the superclass', () => {
      assert.equal(dannie.fullName(), 'My name is: Dannie Duke');
    });
  });
  describe('.yearsOfService', () => {
    it('should be able to return years of service of staff', () => {
      dannie._employmentDate = new Date('01/15/2000');
      assert.equal(dannie.yearsOfService(), 17);
    });
  });

  describe('.yearsOfService', () => {
    it('should be able to return actual years of service of staff', () => {
      dannie._employmentDate = new Date('10/15/2000');
      assert.equal(dannie.yearsOfService(), 17);
    });
  });

  describe('.confirmStaff', () => {
    it('should be able to convert temporary to permanent staff', () => {
      dannie.appointmentType = 'temporary';
      dannie.confirmStaff();
      assert.equal(dannie.appointmentType, 'Permanent');
    });
  });
}); // End of tests on Staff Class

// Testing the Patience Class
describe('The Patience class', () => {
  describe('.diagnose', () => { // testing the diagnose method of the Patience class
    it('should be able to diagnose Patience for an illness', () => {
      dave.diagnose('maleria');
      assert.equal(dave.illnesses[0], 'maleria');
    });
  });

  describe('.treat', () => { // testing the treat method of the patience class
    it('should be able to treat a patience for an illness', () => {
      dave.diagnose('toothache');
      dave.diagnose('fever');
      dave.diagnose('headache');
      assert.equal(dave.treat('toothache').toString, ['fever', 'headache'].toString);
    });
  });

  describe('.treat', () => { // testing the treat method for a illnes a patience does not have
    it('should not treat a patience for illness he does not have', () => {
      dave.diagnose('toothache');
      dave.diagnose('fever');
      dave.diagnose('headache');
      assert.equal(dave.treat('fracture'), 'Patience does not have fracture');
    });
  });


  describe('Member.fullName', () => { // A Patience instance should be able to call a method of the superclass
    it('should be able to call method of the superclass', () => {
      assert.equal(dave.fullName(), 'My name is: Davie Duke');
    });
  });
});

