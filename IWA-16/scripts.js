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
 let firstName = athlete.firstName
 let surname = athlete.surname;
 let id = athlete.id;
 let races = athlete

  const fragment = document.createDocumentFragment();

  let title = document.createElement('h2');
  title.innerHTML = id;
  fragment.appendChild(title);

  const list = document.createElement('dl');

  const day = new Date(athlete.races[0].date).getDate();
  const month = new Date(athlete.races[0].date).getMonth();
  const year = new Date(athlete.races[0].date).getFullYear();

  const total =
    athlete.races[0].time[0] +
    athlete.races[0].time[1] +
    athlete.races[0].time[2] +
    athlete.races[0].time[3];

  const hours = total / 60;
  const minutes = total / hours / 60;

  return list.innerHTML = /* html */ `
    Athlete
    ${firstName, surname}

    Total Races
    ${races}

    Event Date (Latest)
    ${day, month, year}

    Total Time (Latest)
    ${String(hours).padStart(2, 0), minutes}
  `;

  fragment.appendChild(list);
}

let one = document.querySelector('[data-athlete="NM372"]').innerHTML = (createHtml(data.response.data["NM372"]));
let two = document.querySelector('[data-athlete="SV782"]').innerHTML = (createHtml(data.response.data["SV782"]));

console.log(createHtml(data.response.data["NM372"]));