function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b == 0) {
    return "b shouldn't be 0";
  } else {
    return a / b;
  }
}

module.exports = { add, sub, mul, div };
