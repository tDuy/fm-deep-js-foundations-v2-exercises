// TODO: write the validation functions
function isValidName(name) {
    if (typeof name != "string") return false;
    if (name.trim().length < 3) return false;
    return true;
  }
  
  function hoursAttended(attended, length) {
    const isStringOrNumber = (value) => typeof value == "string" || typeof value == "number";
    if (!isStringOrNumber(attended) || !isStringOrNumber(length)) return false;
  
    const isEmptyString = (value) => typeof value === "string" && value.trim() == "";
    if (isEmptyString(attended) || isEmptyString(length)) return false;
  
    const attendedNumber = Number(attended);
    const lengthNumber = Number(length);
    const valid = (num) => Number.isInteger(num) && num >= 0;
    if (!valid(attendedNumber) || !valid(lengthNumber)) return false;
  
    return attendedNumber <= lengthNumber;
  }
  
  // tests:
  console.log(isValidName("Frank") === true);
  console.log(hoursAttended(6,10) === true);
  console.log(hoursAttended(6,"10") === true);
  console.log(hoursAttended("6",10) === true);
  console.log(hoursAttended("6","10") === true);
  
  console.log(isValidName(false) === false);
  console.log(isValidName(null) === false);
  console.log(isValidName(undefined) === false);
  console.log(isValidName("") === false);
  console.log(isValidName("  \t\n") === false);
  console.log(isValidName("X") === false);
  
  console.log(hoursAttended("",6) === false);
  console.log(hoursAttended(6,"") === false);
  console.log(hoursAttended("","") === false);
  
  console.log(hoursAttended("foo",6) === false);
  console.log(hoursAttended(6,"foo") === false);
  console.log(hoursAttended("foo","bar") === false);
  console.log(hoursAttended(null,null) === false);
  console.log(hoursAttended(null,undefined) === false);
  console.log(hoursAttended(undefined,null) === false);
  console.log(hoursAttended(undefined,undefined) === false);
  console.log(hoursAttended(false,false) === false);
  console.log(hoursAttended(false,true) === false);
  console.log(hoursAttended(true,false) === false);
  console.log(hoursAttended(true,true) === false);
  console.log(hoursAttended(10,6) === false);
  console.log(hoursAttended(10,"6") === false);
  console.log(hoursAttended("10",6) === false);
  console.log(hoursAttended("10","6") === false);
  console.log(hoursAttended(6,10.1) === false);
  console.log(hoursAttended(6.1,10) === false);
  console.log(hoursAttended(6,"10.1") === false);
  console.log(hoursAttended("6.1",10) === false);
  console.log(hoursAttended("6.1","10.1") === false);
  