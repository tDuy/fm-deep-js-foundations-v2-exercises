var deepJS = {
    currentEnrollment: [],
    studentRecords: [],
  
    getStudentFromId,
    printRecords,
    paidStudentsToEnroll,
    notYetPaid,
    needToEnroll,
    remindUnpaid,
  
    addStudent,
    enrollStudent,
    printCurrentEnrollment,
    enrollPaidStudents,
    remindUnpaidStudents,
  };
  
  deepJS.addStudent(311, "Frank", /*paid=*/ true);
  deepJS.addStudent(410, "Suzy", /*paid=*/ true);
  deepJS.addStudent(709, "Brian", /*paid=*/ false);
  deepJS.addStudent(105, "Henry", /*paid=*/ false);
  deepJS.addStudent(502, "Mary", /*paid=*/ true);
  deepJS.addStudent(664, "Bob", /*paid=*/ false);
  deepJS.addStudent(250, "Peter", /*paid=*/ true);
  deepJS.addStudent(375, "Sarah", /*paid=*/ true);
  deepJS.addStudent(867, "Greg", /*paid=*/ false);
  
  deepJS.enrollStudent(410);
  deepJS.enrollStudent(105);
  deepJS.enrollStudent(664);
  deepJS.enrollStudent(375);
  
  deepJS.printCurrentEnrollment();
  console.log("----");
  deepJS.enrollPaidStudents();
  console.log("----");
  deepJS.remindUnpaidStudents();
  
  /*
      Bob (664): Not Paid
      Henry (105): Not Paid
      Sarah (375): Paid
      Suzy (410): Paid
      ----
      Bob (664): Not Paid
      Frank (313): Paid
      Henry (105): Not Paid
      Mary (502): Paid
      Peter (250): Paid
      Sarah (375): Paid
      Suzy (410): Paid
      ----
      Bob (664): Not Paid
      Henry (105): Not Paid
  */
  
  // ********************************
  
  // ********************************
  
  function addStudent(id, name, paid) {
    this.studentRecords.push({ id, name, paid });
  }
  
  function enrollStudent(id) {
    if (!this.currentEnrollment.includes(id)) {
      this.currentEnrollment.push(id);
    }
  }
  
  function printCurrentEnrollment() {
    this.printRecords(this.currentEnrollment);
  }
  
  function enrollPaidStudents() {
    this.currentEnrollment = this.paidStudentsToEnroll();
    this.printCurrentEnrollment();
  }
  
  function remindUnpaidStudents() {
    this.remindUnpaid(this.currentEnrollment);
  }
  
  function getStudentFromId(studentId) {
    return this.studentRecords.find(matchId);
  
    // *************************
  
    function matchId(record) {
      return record.id == studentId;
    }
  }
  
  function printRecords(recordIds) {
    var records = recordIds.map(this.getStudentFromId);
  
    records.sort(sortByNameAsc);
  
    records.forEach(printRecord);
  }
  
  function sortByNameAsc(record1, record2) {
    if (record1.name < record2.name) return -1;
    else if (record1.name > record2.name) return 1;
    else return 0;
  }
  
  function printRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? "Paid" : "Not Paid"}`
    );
  }
  
  function paidStudentsToEnroll() {
    var recordsToEnroll = this.studentRecords.filter(
      this.needToEnroll.bind(this)
    );
  
    var idsToEnroll = recordsToEnroll.map(getStudentId);
  
    return [...this.currentEnrollment, ...idsToEnroll];
  }
  
  function needToEnroll(record) {
    return record.paid && !this.currentEnrollment.includes(record.id);
  }
  
  function getStudentId(record) {
    return record.id;
  }
  
  function remindUnpaid(recordIds) {
    var unpaidIds = recordIds.filter(this.notYetPaid.bind(this));
  
    this.printRecords(unpaidIds);
  }
  
  function notYetPaid(studentId) {
    var record = this.getStudentFromId(studentId);
    return !record.paid;
  }
  