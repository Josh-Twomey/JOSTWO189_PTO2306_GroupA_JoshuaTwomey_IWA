// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 


const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i = i + 1) {
        //Added i inside the brackets as this function just builds an array
        result.push(i)
    }

    return result
};

const addCell = (existing, classString, value) => {
  const result = /* html */
  //added existing param
   `
        ${existing}

        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `;

  return result;
};

const createData = () => {
    // current -> gets todays date
    const current = new Date ()
    // Set date to first of the month
    current.setDate(1)
    
    // get the day the month starts on (returns 0-6)(0 being Sun)
    const startDay = current.getDay()
    // get amount of days in the month
    const daysInMonth = getDaysInMonth(current)

    //Create arrays using createArray function of specified length
    const weeks = createArray(5)
    const days = createArray(7)
    const result = []
    // loops 5 times
    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: [],
            
        })
        // added dayIndex of days array (loops 7 times within week array)
        for (const dayIndex of days) {
            //added + between brackets and to the + 1 at the end
            // eg: Nov      (0 - 3 = -3)      +    (0   *7 = 0)  +1 = -2
            const day = (dayIndex - startDay) + (weekIndex * 7 ) + 1  
            // dayIndex[0] weekIndex[0](First Sunday) = -2 therefore isValid is False
            const isValid = day > 0 && day <= daysInMonth

            result[weekIndex].days.push({
                // Pushed to array inside weeks 
                // dayOfWeek : between 1 and 7 because of the + 1 
                dayOfWeek: dayIndex + 1,
                // isValid false therefore '' is pushed
                value: isValid ? day : '',
            })
    }
}

    return result
   
}

const createHtml = (data) => {
    let result = ''
    // week , day of 'data' array
    for (const {week, days} of data ) {
        let inner = ""
        
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
        // for array inside week 'data' array
         for (const {dayOfWeek, value} of days) {
            // Check the following condition for CSS
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek === 1 || dayOfWeek === 7 
            // % is mod, so left over therefore even weeks = True
            const isAlternate = week % 2 === 0
    
			let classString = 'table__cell'
            // Concatenate string to get correct CSS applied based on conditions
            if (isToday) classString = `${classString} table__cell_today`;
            if (isWeekend) classString = `${classString} table__cell_weekend`;
            if (isAlternate) classString = `${classString} table__cell_alternate`;
            // Add cell (inner(relates to existing?), use classString to assign class, Value from Days array)
            inner = addCell(inner, classString, value);
        }
        
        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }
    
    return result
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const monthData = createData()
document.querySelector('[data-content]').innerHTML = createHtml(monthData)