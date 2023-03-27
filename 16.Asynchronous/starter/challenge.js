"use strict";
/*
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");
const renderCountry = function (data, className) {
  const html = `
      <article class="country ${className}">
     <img class="country__img" src="${
       data.flag
     }" />  <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${+(
          data.population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
      </div>
    </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 1;
};
const whereAmI = function (lat, longt) {
  fetch(`https://geocode.xyz/${lat},${longt}?geoit=json`)
    .then((result) => {
      if (!result.ok)
        throw new Error(`Problem with geocoding ${result.status}`);
      console.log(result);
      return result.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You're in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.com/v2/name/${data.country}`);
    })
    .then((result) => {
      if (!result.ok) throw new Error(`Country not found(${result.status})`);
      return result.json();
    })
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.error(`${err.message}💥💥💥`));
  // .catch((err) => {
  //   console.log(`${err}`);
  // });
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/