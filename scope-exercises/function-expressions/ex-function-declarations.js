function printRecords(recordIds) {
	function studentInRecords(student) {
		return recordIds.includes(student.id);
	}
	function byStudentName(a, b) {
		return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
	}
	function printStudent(student) {
		console.log(`${student.name} (${student.id}): ${student.paid ? "Paid" : "Not Paid"}`);
	}

	studentRecords
		.filter(studentInRecords)
		.sort(byStudentName)
		.forEach(printStudent);
}

function paidStudentsToEnroll() {
	function studentPaid(student) {
		return student.paid;
	}
	function getStudentId(student) {
		return student.id;
	}
	function isNotEnrolled(student) {
		return !currentEnrollment.includes(student.id);
	}

	const paidStudentNotEnrolledIds = studentRecords
		.filter(studentPaid)
		.filter(isNotEnrolled)
		.map(getStudentId);

	return [...currentEnrollment, ...paidStudentNotEnrolledIds];
}

function remindUnpaid(recordIds) {
	function getStudentId(student) {
		return student.id;
	}
	function studentInRecords(student) {
		return recordIds.includes(student.id);
	}
	function isUnpaid(student) {
		return !student.paid;
	}

	const studentIdsToRemind = studentRecords
		.filter(studentInRecords)
		.filter(isUnpaid)
		.map(getStudentId);

	printRecords(studentIdsToRemind);
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);

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
