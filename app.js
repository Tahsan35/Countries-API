fetch('https://restcountries.eu/rest/v2/all')
.then(rest => rest.json())
.then(data => displayData(data));


const displayData = countries => {
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i< countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';

        // const h3 = document.createElement('h3');
        // h3.innerText = country.name;
        //     countryDiv.appendChild(h3);

        // const p = document.createElement('p');
        // p.innerText = country.capital;
        //     countryDiv.appendChild(p);

        
        const countryInfo = `
        <h3 class="country-name">${country.name}</h3>  
        <p>${country.capital}</p>
        <button onClick="countryDetails('${country.name}')">Know the details</button>
        `
        countryDiv.innerHTML = countryInfo;
            countriesDiv.appendChild(countryDiv);
    }
}
const countryDetails = name =>{
const url = `https://restcountries.eu/rest/v2/name/${name}`
fetch(url)
.then(response => response.json())
.then(data => renderCountryInfo(data[0]));
}

const renderCountryInfo = country => {
const countryDiv = document.getElementById('country-details');
countryDiv.innerHTML = `
<h1>${country.name}</h1>
<p>Population : ${country.population}</p>
<p>Area :${country.area}</p>
<img src="${country.flag}"/>
`
}
