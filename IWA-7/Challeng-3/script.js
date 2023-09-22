const leoName = "Leo";
const leoSurname = "Musvaire     ";
const leoBalance = "-9394.0";

const sarahName = "Sarah    ";
const sarahSurname = "Kleinhans";
const sarahBalance = "-4582.2";

const divider = "----------------------------------";

// Only change below this line

/* Working out owed value: Math.abs converts the - value to a +, parseFloat- convert string to number,
   toFixed(2) gives 2 decimal points*/
const owed =  (Math.abs( parseFloat(leoBalance) + parseFloat(sarahBalance)).toFixed(2)  ) ;
// Added another variable to add the thousand space, [] to call the characters in owed string
const owedFormat = ("R "+owed[0]+owed[1]+' '+owed[2]+owed[3]+owed[4]+owed[5]+owed[6]+owed[7])
/* Fixed all leo's variables, added spaces and brackets where needed, .trim() removes blank space in a
   string, -variable changes - to + and .toFixed(2) leaves 2 decimal points */
const leo = leoName+' '+leoSurname.trim()+'   ('+"Owed" + " R " + (-leoBalance).toFixed(2)+')';
// Same process for sarah
const sarah = sarahName.trim()+' '+sarahSurname+'   ('+"Owed" + " R " + (-sarahBalance).toFixed(2)+')';
const total = "Total amount owed: ";
// \n goes to next line, \t is tab (adds space from margin), added owedFormat variable
const result =
  "\n \t" +
  leo +
  "\n \t" +
  sarah +
  "\n \n \t" +
  divider +
  "\n \t  " +
  total +
  owedFormat +
  "\n \t" +
  divider;

console.log(result);
