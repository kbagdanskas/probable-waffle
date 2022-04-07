window.addEventListener("load", () => {
  generate();
});

const generate = () => {
  let random = Math.floor(Math.random() * 5001) + 5000;
  const number = document.getElementById("appear");
  number.innerText = random;
};

// api url
const api_url =
  "http://18.193.250.181:1337/api/people?populate=*&filters[country][id][$eq]=1";

async function getapi(url) {
  const response = await fetch(url);

  var data = await response.json();
  if (response) {
    hideloader();
  }
  show(data);
  getPeople(data);
}
getapi(api_url);

function hideloader() {
  document.getElementById("loading").style.display = "none";
}
function show(data) {
  let tab = `<tr>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
         </tr>`;

  for (let item of data.data) {
    tab += `<tr> 
    <td class="fetch-style">${item.attributes.first_name} ${item.attributes.last_name}<br>${item.attributes.email} </td>
    <td></td>
    <td></td>           
    <td>${item.attributes.country.data.attributes.country}</td>          
</tr>`;
  }
  document.getElementById("people").innerHTML = tab;
}
const getCountry = async () => {
  try {
    const res = await fetch("http://18.193.250.181:1337/api/countries");
    const data = await res.json();
    const countrySelect = document.getElementById("country");
    const countries = [...new Set(data.data.map((x) => x.attributes.country))];

    countries.forEach((country) => {
      const option = document.createElement("option");
      option.textContent = country;
      countrySelect.append(option);
    });

    document.getElementsByClassName("details").append(countrySelect);
  } catch (err) {
    console.log(err);
  }
};

// fetch("http://18.193.250.181:1337/api/people")
//   .then((res) => res.json())
//   .them((data) => {
//     getPeople(data);
//   });
getCountry();
function getPeople(data) {
  const getPeople = document.getElementById("appearSign");
  getPeople.textContent = data.data.length;
}
