// script.js
// added brackets around params and added return 
function add  (a,b)  { return a + b }
// changed the minus to multiplication
function multiply (a,b) { return a * b }

function internal() {
	// Added the .internal as it references the object 
	const added = this.add(this.internal.a,this.internal.b)
	// added multiplication variable
	const multiplication = this.multiply(added,this.internal.c)
	// console log multiplication
	console.log(multiplication)
}

//Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate();
example2.calculate();
