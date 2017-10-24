/**
 *A javascript code to demostrate object oriented programming. The scenario
here is that of a medical centre
*/

/**
 * The base class is 'Person'
 * @constructor
 * @param {string} fName--a person's first name
 * @param {string} Name--a person's last name
 * @param {number} idNumber--a person's identification
 */
class Person {
  constructor(fName, lName, idNumber) { 
    this.fName = fName;
    this.lName = lName;
    this.idNumber = idNumber;
  }

  fullName() { return (`My name is: ${this.fName} ${this.lName}`);}
}

/**
 * The class Patience inherits from class person
 * @constructor
 * @property {string[]} illnesses--illnesses he is diagnosed with
 * @method diagnose--diagnose a patience
 * @method treat--treat a patience
 */
class Patience extends Person {
  constructor(fName, lName, idNumber, department) {
    super(fName, lName, idNumber);
    this.department = department;
    this.illnesses = [];
  }


  diagnose(illness) {
    this.illnesses.push(illness);
  }

  treat(illness) {
    if (this.illnesses.indexOf(illness) === -1) {
      return `Patience does not have ${illness}`;
    }
    return this.illnesses.filter(ilns => ilns !== illness);
  }
}

/**
 * class Staff inherits from class Person
 * @constructor
 * @method {string} description--returns  a description of
 * the staff
 * @method {number} yearsOfService--returns staff years of
 * service
 */
class Staff extends Person {
  constructor(fName, lName, idNumber, appointmentType, employmentDate = new Date()) {
    super(fName, lName, idNumber);
    this.appointmentType = appointmentType; // is the staff on permanent or temporary appointment
    this._employmentDate = employmentDate; // employmentDate is a private property and optional
  }

  description() {
    return (`I am a ${this.appointmentType} staff`);
  }

  // determine the numbers of years of service of the staff
  yearsOfService() {
    const years = new Date().getFullYear() - this.employmentDate.getFullYear();
    if (new Date().getMonth() >= this._employmentDate.getMonth() && new Date().getDate() >= this._employmentDate.getDate()) {
      return years;
    }
    return years - 1;
  }

  // getter and setter on the employment date property

  get employmentDate() {
    return this._employmentDate;
  }

  set employmentDate(date) {
    this._employmentDate = date;
  }

  confirmStaff() { // converting a temporary staff to permanent staff
    if (this.appointmentType.toLowerCase() === 'permanent') { // check that the staff is not yet a permanent staff
      alert('Staff is already a permanent staff');
    } else { this.appointmentType = 'Permanent'; } // If not yet a permanent staff, convert to permanent status
  }
}

// The Doctor class inherits from the staff class
class Doctor extends Staff {
  constructor(fName, lName, idNumber, appointmentType) {
    super(fName, lName, idNumber, appointmentType);
    this.specialties = [];
  }

  addSpecialties(specialty) {
    this.specialties.push(specialty);
    return this.coursesTaught;
  }
}
// exports the classes as a module
module.exports = {
  Person,
  Patience,
  Staff,
  Doctor
};
