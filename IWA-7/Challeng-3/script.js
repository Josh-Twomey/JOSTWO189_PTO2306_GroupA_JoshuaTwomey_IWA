const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

const owed = ("R" + ( Math.abs( parseInt(leoBalance) + parseInt(sarahBalance) ).toFixed(2) ) );
const leo = leoName+' '+leoSurname.trim()+'   ('+"Owed" + " R  " + (-leoBalance).toFixed(2)+')';
const sarah = sarahName.trim()+' '+sarahSurname+'   ('+"Owed" + " R  " + (-sarahBalance).toFixed(2)+')';
const total = "Total amount owed: ";
const result =
  "\n \t" +
  leo +
  "\n \t" +
  sarah +
  "\n \n \t" +
  divider +
  "\n \t" +
  total +
  owed +
  "\n \t" +
  divider;

console.log(result);
