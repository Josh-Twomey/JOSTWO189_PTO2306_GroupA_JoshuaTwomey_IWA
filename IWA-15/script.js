// scripts.js

const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};

// Only edit below
// Assign variables to arrays
const first  = data.lists[0][1] || {};
const second =  data.lists[1][1] || {};
const third =  data.lists[2][1] || {};
const result = [];


const extractBiggest = () => {
  // Check biggest value
  if (first[first.length - 1] > (second[second.length - 1] || third[third.length -1])) 
  // If first return the number and remove it from Array 
    {return first[first.length - 1] && first.pop();} 
  else 
        if (second[second.length - 1] > (first[first.length - 1] || third[third.length - 1])) 
            {return second[second.length - 1] && second.pop();}
        else
            {return third[third.length - 1] && third.pop();}
};

// Only edit above

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());
result.push(extractBiggest());

console.log(result);
