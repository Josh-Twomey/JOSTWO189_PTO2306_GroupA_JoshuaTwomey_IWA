// script.js
// changed variable names
// Added Queryselector and filtered to correct class in order to change correct innerHTML text
const root1 = document.querySelector('[data-key="order1"]');
const biscuits1 = document
.querySelector('[data-key="order1"]')
.querySelector('[class="biscuits"]')
.querySelector('[class="count"]');
const donuts1 = document
  .querySelector('[data-key="order1"]')
  .querySelector('[class="donuts"]')
  .querySelector('[class="count"]');
const pancakes1 = document
  .querySelector('[data-key="order1"]')
  .querySelector('[class="pancakes"]')
  .querySelector('[class="count"]');
const delivered1 = document
  .querySelector('[data-key="order1"]')
  .querySelector('[class="status"]')
  .querySelector('dd');

  const root2 = document.querySelector('[data-key="order2"]');
  const biscuits2 = document
    .querySelector('[data-key="order2"]')
    .querySelector('[class="biscuits"]')
    .querySelector('[class="count"]');
  const donuts2 = document
    .querySelector('[data-key="order2"]')
    .querySelector('[class="donuts"]')
    .querySelector('[class="count"]');
  const pancakes2 = document
    .querySelector('[data-key="order2"]')
    .querySelector('[class="pancakes"]')
    .querySelector('[class="count"]');
  const delivered2= document
    .querySelector('[data-key="order2"]')
    .querySelector('[class="status"]')
    .querySelector("dd");

const root3 = document.querySelector('[data-key="order3"]');
const biscuits3 = document
  .querySelector('[data-key="order3"]')
  .querySelector('[class="biscuits"]')
  .querySelector('[class="count"]');
const donuts3 = document
  .querySelector('[data-key="order3"]')
  .querySelector('[class="donuts"]')
  .querySelector('[class="count"]');
const pancakes3 = document
  .querySelector('[data-key="order3"]')
  .querySelector('[class="pancakes"]')
  .querySelector('[class="count"]');
const delivered3 = document
  .querySelector('[data-key="order3"]')
  .querySelector('[class="status"]')
  .querySelector("dd");


//.innerHTML to change Text
//.getAttributes to get value from Data-'key' called in brackets
biscuits1.innerHTML = root1.getAttribute("data-biscuits");          
donuts1.innerHTML = root1.getAttribute("data-donuts");  
pancakes1.innerHTML = root1.getAttribute("data-pancakes");  
delivered1.innerHTML =root1.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";  

biscuits2.innerHTML = root2.getAttribute("data-biscuits");
donuts2.innerHTML = root2.getAttribute("data-donuts");
pancakes2.innerHTML = root2.getAttribute("data-pancakes");
delivered2.innerHTML = root2.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";  

biscuits3.innerHTML = root3.getAttribute("data-biscuits");
donuts3.innerHTML = root3.getAttribute("data-donuts");
pancakes3.innerHTML = root3.getAttribute("data-pancakes");
delivered3.innerHTML =root3.getAttribute("data-delivered") === "true" ? "Delivered" : "Pending";  