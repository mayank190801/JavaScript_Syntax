//Arrays some and every
const array = [1, 2, 3, 4, 5];

//some => if atleast one element passes the test
console.log(
  array.some((element) => {
    return element > 3;
  })
);

//every => if all elements passes the test
console.log(
  array.every((element) => {
    return element > 0;
  })
);

//array reduce method
//hardest array method to understand!!!

const prices = [1, 2, 3, 4, 5, 6, 7, 1231, 123, 12, 131];

//if you try to use some logic here, you would be apple to solve it for sure
//reducing all the elements to one value!!! which is known as accumulator here
const total = prices.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(total);
