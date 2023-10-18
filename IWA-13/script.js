let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    // Added 2 == signs to compare
    const isString = typeof calculated === 'numerical-string'
    // Converts calculated if isString is false 
    const calculatedAsNumber = isString ? calculated : calculated = Number(calculated)
    // Add 1 to the correct variable
    calculated += 1
}
 

const calcUser = () => {
  logCalc()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser = () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()