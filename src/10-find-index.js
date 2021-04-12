/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // const i = array[+(array.length / 2)];

  // if (i === value) {
  //   return a + i;
  // }
  // if (value > i) {
  //   const right = array.slice(+(array.length / 2));
  //   return findIndex(right, value, a + i);
  // }
  // if (value < i) {
  //   const left = array.slice(0, +(array.length / 2));
  //   return findIndex(left, value);
  // }
  let i = 0;
  for (; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return null;
}

module.exports = findIndex;
