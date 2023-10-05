const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line
// Added = after leo
const leo = {
    // Switched = to : added , to all lines
    // Removed leoSurname as his surname is declared in leoName
	name : leoName,
	balance : leoBalance,
    // Added '' to the value and put var name into correct camelCase
	accessId : '47afb389-8014-4d0b-aff3-e40203d2107f',
	age : 24,
    // Added : after address and replaced = with :
	address : {
		number : leoNumber,
		street : leoStreet,
        //Var name into camelCase
		postalCode : leoPostal,
	}
}

const sarah = {
    // Added H to end of sara to get the correct variable
	name : sarahName + sarahSurname,
	age : 62,
	accessId : '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance : sarahBalance,
	address : {
		number : sarahNumber,
		street : sarahStreet,
		postalCode : sarahPostal,
	}
// Closed the brackets
}
// Removed brackets and added .
console.log(leo, leo.address.postalCode)
console.log(sarah, sarah.address.postalCode)