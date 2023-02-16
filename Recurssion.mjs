// Recurtion:

function getRecursive(a) {
  console.log(a);
  if (a > 0) {
    getRecursive(--a);
  }
}
getRecursive(5);
