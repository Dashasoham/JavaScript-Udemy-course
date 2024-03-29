"use strict";
/*
// const btn = document.querySelector(".btn-country");
// const countriesContainer = document.querySelector(".countries");

// ///////////////////////////////////////

// const renderCountry = function (data, className) {
//   const html = `
//   <article class="country ${className}">
//  <img class="country__img" src="${data.flag}" />  <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${+(
//       data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;

//   countriesContainer.insertAdjacentHTML("beforeend", html);
//   // countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText("beforeend", msg);
//   // countriesContainer.style.opacity = 1;
// }; 

// const getCountryAndNeighbour = function (country) {
//   //AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     //   console.log(this.responseText);

//     const [data] = JSON.parse(this.responseText);
//     console.log(data);

//     //Render country1
//     renderCountry(data);

//     //Get neighbour(2)
//     const [neighbour] = data.borders;

//     if (!neighbour) return;

//     //AJAX call 2
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);

//       renderCountry(data2, "neighbour");
//     });
//   });
// };
// // getCountryAndNeighbour("portugal");
// getCountryAndNeighbour("Mexico");
// // getCountryAndNeighbour("malta");

// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 seconds passed");
//     setTimeout(() => {
//       console.log("3 seconds passed");
//       setTimeout(() => {
//         console.log("4 seconds passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);
//
// // const request = new XMLHttpRequest();
// // request.open("GET", `https://restcountries.com/v2/name/${country}`);
// // request.send();

// // const request = fetch("https://restcountries.com/v2/name/portugal");
// // console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       console.log(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥 ${err.message}.Try Again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener("click", function () {
//   getCountryData("portugal");
// });

// getCountryData("Ukraine");
console.log("test start");
setTimeout(() => console.log("0 sec timer"), 0);
Promise.resolve("Resolved promise 1").then((res) => console.log(res));
console.log("test end");




const lotteryPromise = new Promise(function (resolve, reject) {
  console.log("Lottery draw is happening");
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve("You WIN");
    } else {
      reject(new Error("You lost "));
    }
  }, 2000);
});

lotteryPromise
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
console.log("----PROMISIFYING setTimeout----");

//PROMISIFYING setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(2)
  .then(() => {
    console.log("I waited for 2 seconds");
    return wait(1);
  })
  .then(() => console.log("I've waited for 1 sec"));

Promise.resolve("abc").then((x) => console.log(x));
Promise.reject("abc").catch((x) => console.error(x));

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

console.log("Getting position");

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   (position) => resolve(position),
    //   (err) => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then((pos) => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then((pos) => {
      const { latitude: lat, longitude: longt } = pos.coords;
      console.log(pos.coords);
      return fetch(`https://geocode.xyz/${lat},${longt}?geoit=json`);
    })

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

btn.addEventListener("click", whereAmI);
*/

const countriesContainer = document.querySelector(".countries");
const renderCountry = function (data, className) {
  const html = `
    <article class="country ${className}">
   <img class="country__img" src="${data.flag}" />  <div class="country__data">
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

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  //Geolocation
  try {
    const pos = await getPosition();
    const { latitude: lat, longitude: longt } = pos.coords;

    //Reverse geocoding
    const geoCoding = await fetch(
      `https://geocode.xyz/${lat},${longt}?geoit=json`
    );
    if (!geoCoding.ok) throw new Error("Problem getting location data");
    const dataGeo = await geoCoding.json();
    console.log(dataGeo);

    //Country data
    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!geoCoding.ok) throw new Error("Problem getting location country");
    const data = await res.json();
    // console.log(data);
    renderCountry(data[0]);

    return `You are in ${dataGeo.city},${dataGeo.country}`;
  } catch (err) {
    console.log(`💥${err}`);
    renderError(`💥💥 ${err.message}`);

    //Reject promise returned from async function

    throw err;
  }
};
console.log("1.Will get location");
// const city = whereAmI();
// console.log(city);
// whereAmI()
//   .then((city) => console.log(`2: ${city}`))
//   .catch((err) => console.error(`2: ${err.message}💥`))
//   .finally(() => console.log("3. Finished getting location"));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.error(`2: ${err.message}💥`);
  }
  console.log("3. Finished getting location");
})();
