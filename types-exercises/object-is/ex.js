// TODO: define polyfill for `Object.is(..)`
if (!Object.is || true) {
    Object.is = function ObjectIs(x, y) {
      if (Number.isNaN(x) || Number.isNaN(y)) {
        return Number.isNaN(x) && Number.isNaN(y);
      }
      if (x === 0 || y === 0) return x === y && 1 / x === 1 / y;
      return x === y;
    }
  }
  
  
  // tests:
  console.log(Object.is(42,42) === true);
  console.log(Object.is("foo","foo") === true);
  console.log(Object.is(false,false) === true);
  console.log(Object.is(null,null) === true);
  console.log(Object.is(undefined,undefined) === true);
  console.log(Object.is(NaN,NaN) === true);
  console.log(Object.is(-0,-0) === true);
  console.log(Object.is(0,0) === true);
  console.log(Object.is(0,10) === false);
  console.log(Object.is(-0,10) === false);
  
  console.log(Object.is(-0,0) === false);
  console.log(Object.is(0,-0) === false);
  console.log(Object.is(0,NaN) === false);
  console.log(Object.is(NaN,0) === false);
  console.log(Object.is(42,"42") === false);
  console.log(Object.is("42",42) === false);
  console.log(Object.is("foo","bar") === false);
  console.log(Object.is(false,true) === false);
  console.log(Object.is(null,undefined) === false);
  console.log(Object.is(undefined,null) === false);
  