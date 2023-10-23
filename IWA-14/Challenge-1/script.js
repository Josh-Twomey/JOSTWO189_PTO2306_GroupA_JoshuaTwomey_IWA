const firstName = "John";
const age = 35;
const hobby = "Coding";
// Added parameter to the brackets
const logTwice = (parameter) => {
  console.log(parameter);
  console.log(parameter);
};
// Changed hobby to display as hobby is a variable above
function display() {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

display();
