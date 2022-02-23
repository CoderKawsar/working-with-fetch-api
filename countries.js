fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => showCountries(data));

function showCountries(countries) {
  const countriesDiv = document.getElementById("countries");
  for (const country of countries) {
    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${country.name.official}</h3>
      <p>${country.capital}</p>
      <button onclick="loadCountryByName('${country.name.official}')">Details</button>
    `;
    countriesDiv.appendChild(div);

    // // country name
    // const li = document.createElement("li");
    // li.innerText = `Country name: ${country.name.official}
    // Capital name: ${country.capital}`;
    // countriesUl.appendChild(li);

    // // flag
    // const flag = document.createElement("img");
    // flag.setAttribute("src", country.flags.png);
    // li.appendChild(flag);
  }
}

function loadCountryByName(name) {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0]));
}

const displayCountryDetail = (country) => {
  const countryDetailDiv = document.getElementById("country-detail");
  countryDetailDiv.innerHTML = `
    <h5>${country.name.official}</h4>
    <p>Population: ${country.population}</p>
    <img width="200px" src="${country.flags.png}" />
  `;
};
