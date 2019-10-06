module.exports = function multiply(first, second) {
  let firstBigInt = BigInt(first);
  let secondBigInt = BigInt(second);
  let number = firstBigInt * secondBigInt;
  return number.toString().replace('n','');
};


