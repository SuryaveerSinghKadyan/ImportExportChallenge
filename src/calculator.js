function add(n1, n2) {
  return n1 + n2;
}

function multiply(n1, n2) {
  return n1 * n2;
}

function subtract(n1, n2) {
  return n1 - n2;
}

function divide(n1, n2) {
  return n1 / n2;
}

//there can only be 1 single default export in a single file.
export default add;

//to export multiple things from the same file use the exact variable or function names within {} curly brackets separated by ,
export { multiply, subtract, divide };
