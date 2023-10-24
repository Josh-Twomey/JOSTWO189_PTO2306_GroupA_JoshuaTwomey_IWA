// scripts.js

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const data = {
  response: {
    requestType: "FETCH_ATHLETE_DATA",
    requestBy: "ALL_MATCHING_ATHLETES",
    forDisplay: "BEST_RACES",

    data: {
      NM372: {
        firstName: "Nwabisa",
        surname: "Masiko",
        id: "NM372",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [9, 7, 8, 6],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [6, 7, 8, 7],
          },
        ],
      },

      SV782: {
        firstName: "Schalk",
        surname: "Venter",
        id: "SV782",
        races: [
          {
            date: '2022-11-18T20:00:00.000Z',
            time: [10, 8, 3, 12],
          },
          {
            date: '2022-11-25T20:00:00.000Z',
            time: [6, 8, 9, 11],
          },
          {
            date: '2022-12-02T20:00:00.000Z',
            time: [10, 11, 4, 8],
          },
          {
            date: '2022-12-09T20:00:00.000Z',
            time: [9, 8, 9, 11],
          },
        ],
      },
    },
  },
};

// Only edit below this comment


const createHtml = (athlete) => {
  let firstName = athlete.firstName;
  let surname = athlete.surname;
  let id = athlete.id;
  let races = athlete.races.length;

  const fragment = document.createDocumentFragment();

  let title = document.createElement("h2");
  title.innerHTML = id;
  fragment.appendChild(title);

  const list = document.createElement("dl");

  let latestDate = 0;
  
  for (let i = 0;i < athlete.races.length; i++){
      
    if (new Date(athlete.races[i].date) >= new Date(athlete.races[latestDate].date)){
      latestDate = i
    } else {
      latestDate = 0
    }
    
  }
  
  const day = new Date(athlete.races[latestDate].date).getDate();
  const month = MONTHS[new Date(athlete.races[latestDate].date).getMonth()];
  const year = new Date(athlete.races[latestDate].date).getFullYear();
  
  let total = 0
  for (let j=0; j < athlete.races[latestDate].time.length ; j++){
    total = total + athlete.races[latestDate].time[j];
  }
  
  let hours = 0;
  let k = 0;
  
  while (k < total)
  if (total >= 60){
     hours = hours + 1;
     total = total - 60;
     k+=60
  } else{
     hours = 0;
     k+=60;
  }
 
  const minutes = total;

  return (list.innerHTML = /* html */ `
    <dt>Athlete: ${firstName} ${surname}</dt>

    <dt>Total Races: ${races}</dt>

    <dt>Event Date (Latest): ${day} ${month} ${year}</dt>

    <dt>Total Time (Latest): ${String(hours).padStart(2, 0)}:${String(minutes).padStart(2, 0)}</dt>
  `);

  fragment.appendChild(list);
}

document.querySelector('[data-athlete="NM372"]').innerHTML = (createHtml(data.response.data["NM372"]));
document.querySelector('[data-athlete="SV782"]').innerHTML = (createHtml(data.response.data["SV782"]));

