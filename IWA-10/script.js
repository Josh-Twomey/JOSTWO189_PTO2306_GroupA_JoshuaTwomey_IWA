const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment


if (futureId in holidays) {
    console.log(holidays[futureId].name);
} else {
    console.log(`ID ${futureId} not created yet`);
}

const copied = {
  id: christmas,
  name: "X-mas Day",
  date: new Date(`25 December ${currentYear} 13:25`),
};
let correctDate_hours = 0;
let correctDate_minutes = 0;
let correctDate = new Date (copied.date.setHours(correctDate_hours,correctDate_minutes))
let isEarlier = copied.date < holidays[6].date;
console.log("New date is earlier:", isEarlier);
if (isEarlier === true) {
console.log("ID change:", holidays[christmas].id != copied.id ? copied.id : false);
console.log("Name change:",holidays[christmas].name != copied.name ? copied.name : false);
console.log("Date change:",holidays[christmas].date != copied.date ? copied.date : false);
}

const firstHolidayTimestamp = Math.min(
  new Date (holidays[0].date).getTime(),
  holidays[1].date.getTime(),
  holidays[2].date.getTime(),
  holidays[3].date.getTime(),
  holidays[4].date.getTime(),
  holidays[5].date.getTime(),
  holidays[6].date.getTime(),
  holidays[7].date.getTime(),
  holidays[8].date.getTime()
);



const lastHolidayTimestamp = Math.max(
  new Date (holidays[0].date).getTime(),
  holidays[1].date.getTime(),
  holidays[2].date.getTime(),
  holidays[3].date.getTime(),
  holidays[4].date.getTime(),
  holidays[5].date.getTime(),
  holidays[6].date.getTime(),
  holidays[7].date.getTime(),
  holidays[8].date.getTime()
);


const firstDay = new Date (firstHolidayTimestamp).getDate();
const firstMonth = (new Date (firstHolidayTimestamp).getMonth())+1;
const lastDay = new Date (lastHolidayTimestamp).getDate();
const lastMonth = (new Date (lastHolidayTimestamp).getMonth())+1;

console.log(`${String(firstDay).padStart(2,0)}/${String(firstMonth).padStart(2,0)}/${currentYear}`);
console.log(`${lastDay}/${lastMonth}/${currentYear}`);

const randomHoliday = holidays[Math.round(Math.random() * 8)];
const randomDay = randomHoliday.date.getDate();
const randomMonth = randomHoliday.date.getMonth() + 1;
console.log(`${String(randomDay).padStart(2, 0)}/${String(randomMonth).padStart(2,0)}/${currentYear}`);