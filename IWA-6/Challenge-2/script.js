const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

// Added condition !== null to hourOfDay
if (hourOfDay !== null && minuteOfDay !== null && hourOfDay == '00' && minuteOfDay == '00') {
    // Removed ' ' from the 100 to make it a number
	const taxAsDecimal = parseInt(tax) / 100; 
    //Correct calculation for taking tax off salary
    const startingAfterTax = salary * (1 - taxAsDecimal);
    // Correct variable starting -> startingAfterTax
    const balance = startingAfterTax - transport - food - rent;
    // Added console.log into if-statement, Added Currency and .toFixed (3) -> (2) for 2 dcimal points
    console.log('R '+balance.toFixed(2));
}
	

