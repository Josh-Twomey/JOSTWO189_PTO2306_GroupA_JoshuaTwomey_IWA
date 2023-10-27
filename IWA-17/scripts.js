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

const nameOfDay = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const dayte = new Date();
console.log(nameOfDay[dayte.getDay()])

const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i = i + 1) {
        result.push(i)
    }

    return result
};

const addCell = (existing, classString, value) => {
  const result = /* html */ `
        ${existing}

        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `;

  return result;
};

const createData = () => {
    const current = new Date ()
    current.setDate(1)
    

    const startDay = current.getDate()
    const daysInMonth = getDaysInMonth(current)
    

    const weeks = createArray(5)
    const days = createArray(daysInMonth)
    const result = []

    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: [],
            
        })
        
        for (let i = 0; i < 7 ; i++) {
            const day = (i - startDay) * (weekIndex * 7 + 1)  
            const isValid = day > 0 && day <= daysInMonth

            result[weekIndex].days.push({
                dayOfWeek: days[i+weekIndex] + 1,
                value: isValid ? day : '',
            })
    }
}
    console.log(result)
    return result
    
}

const createHtml = (data) => {
    let result = ''

    for (const {week, days} of data ) {
        let inner = ""
        
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
         for (const {dayOfWeek, value} of data) {
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek === value || dayOfWeek !== value 
            const isAlternate = week % 2 === 0
    
			let classString = 'table__cell'

            if (isToday) classString = `${classString} table__cell_today`;
            if (isWeekend) classString = `${classString} table__cell_weekend`;
            if (isAlternate) classString = `${classString}table__cell_alternate`;
            inner = addCell(inner, classString, days[3].dayOfWeek);
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

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)