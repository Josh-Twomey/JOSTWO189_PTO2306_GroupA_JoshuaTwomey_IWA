const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNIN = "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

const country = "RSA";
let customers = 1;
let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;
let shipping = null;
let currency = "$";

if (country === 'RSA') { 
     shipping = 400 
     currency = 'R' 
}else if (country === 'NAM') {
     shipping = 600 
}else {shipping = 800};


if (country === "RSA" || (country === "NAM" && customers === 1)) {
  if (country === "RSA" && shoes + batteries + pens + shirts >= 1000) {
    shipping = 0;
    console.log("Free Shipping to South Africa Granted!");
  } else if (country === "NAM" && shoes + batteries + pens + shirts >= 60) {
    shipping = 0;
    console.log("Free Shipping to Namibia Granted!");
  }
} else if (country === "RSA" || (country === "NAM" && customers !== 1)) {
  if (country === "RSA" && shoes + batteries + pens + shirts >= 1000) {
    console.log(FREE_WARNING);
  } else if (country === "NAM" && shoes + batteries + pens + shirts >= 60) {
    console.log(FREE_WARNING);
  }
};


country === 'NK' ? console.log(BANNED_WARNIN) : console.log('price', currency, shoes + batteries + pens + shirts + shipping);

