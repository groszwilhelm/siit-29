/**
 * AJAX
 * 
 * Async JavaScript and XML
 */

// Javascript is executed line by line in a synchronous manner - single threaded

/**
 * First, Second, Third, Fourth
 * First, Third, Second, Third
 * First, Fourth, Second, Third,
 */

console.log('First console.log');

document.addEventListener('click', () => {
  console.log('Fifth element');
});

setTimeout(() => {
  console.log('Third console.log');
}, 1000);

setTimeout(() => {
  console.log('Second console.log');
}, 0);

// setInterval(() => {
//   console.log('Hello from interval');
// }, 100)

console.log('Fourth console.log');

// fetch();

/**
 * Retrieving data from the server
 */

// URL

// schema://subdomanin.domain.higher level domain/params
// https://www.google.com/users

/**
 * Read data from a server: GET (HTTP method / verb)
 * Send data to a server: POST (HTTP method / verb)
 * Delete data from a server: DELETE (HTTP method / verb)
 * Update data on a server: PUT (We need to send the whole data object to the server)
 * { id: 12, username: 'test', email: 'test@test.com', birthDate: '1990-10-10' }
 * Partial update of data on a server: PATCH (We need only a subset of the data that has changed)
 * { birthDate: '1990-10-10' }
 */

/**
 * REST Naming convention for API's (Application Programming Interface)
 * 
 * CRUD (Create, Read, Update, Delete)
 * GET /users (Read)
 * GET /users/:id (Read)
 * PATCH /users/:id (Update)
 * PUT /users/:id (Update)
 * POST /users (Create)
 * DELETE /users/:id (Delete)
 */

/**
 * JSON
 * 
 * JavaScript Object Notation
 * 
 * JavaScript Object as a String
 * 
 */

/**
 * HTTP Status codes
 * 
 * 1xx - Informative status codes
 * 2xx - Success
 * 3xx - Redirect
 * 4xx - Client side errors (404 - Not found) - 403 (Unauthorized) - 401 (Unauthenticated)
 * 5xx - Server side errors
 */

const searchInput = document.querySelector('[data-city]');
const searchButton = document.querySelector('[data-search]');
const outputSection = document.querySelector('[data-output]');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();

  const userInput = searchInput.value;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(userInput)}?unitGroup=metric&key=VRZLUY6J2RJJYZ2FGDFNVSYHE&contentType=json`;
  
  searchInput.value = '';
  outputSection.innerHTML = '';

  // Fetch returns Promise
  // .then will be called when a promise is fulfilled - this happens when everything is okay
  // .catch will be called when a promise is rejected - this happens when we have an error
  // .finally will be called after the promise is fulfilled or rejected.
  fetch(url, {
    // headers: {
    //   'Content-Type': 'application/json', // 'text/plain' - 'octet-stream',
    //   'Authorization': 'token'
    // }
  })
    // Deserialize - converting JSON to a JavaScript object.
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      if (response.status >= 400 && response.status < 500) {
        throw new Error('Search term is invalid, try another city');
      } 
      
      if (response.status >= 500) {
        throw new Error(`We're experiencing issues right now. Try again later`);
      }
    })
    .then((weatherResponse) => displayWeatherResult(weatherResponse))
    .catch((error) => {
      outputSection.textContent = error;
    })
    .finally(() => console.log('Promise has finalized'));
});

function displayWeatherResult(data) {
  const template = document.querySelector('#weatherOutput');
  const clonedTemplate = template.content.cloneNode(true);

  const temp = clonedTemplate.querySelector('[data-temp]');
  const description = clonedTemplate.querySelector('[data-description]');

  const tableHeadRow = clonedTemplate.querySelector('[data-thead]');
  const tableBodyRow = clonedTemplate.querySelector('[data-tbodyrow]');

  if (data.currentConditions.temp > 20 && data.currentConditions.temp < 25) {
    temp.classList.add('perfect');
  }
  temp.textContent = data.currentConditions.temp;
  description.textContent = data.description;

  for (let day of data.days) {
    const th = document.createElement('th');
    const td = document.createElement('td');

    th.textContent = new Intl.DateTimeFormat(getLang()).format(new Date(day.datetime));
    td.textContent = day.temp;

    tableHeadRow.appendChild(th);
    tableBodyRow.appendChild(td);
  }

  outputSection.appendChild(clonedTemplate);
}

function getLang() {
  if (navigator.languages != undefined)
    return navigator.languages[0];
  return navigator.language;
}
