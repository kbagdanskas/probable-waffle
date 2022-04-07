const proceed = document.getElementById("proceed-button");
const buttonBlue = document.getElementById("button-blue");
const buttonSecondBlue = document.getElementById("second-blue-button");
const firstSurvey = document.getElementsByClassName("first-survey");
const secondSurvey = document.getElementsByClassName("second-survey");
const confirmationSection = document.getElementsByClassName(
  "confirmation-section"
);
const emailCheck = document.getElementsByClassName("email-check-section");
const form = document.querySelector("form");

proceed.addEventListener("click", (e) => {
  e.preventDefault();
  firstSurvey[0].style.display = "none";
  secondSurvey[0].style.display = "flex";
});
buttonBlue.addEventListener("click", (e) => {
  e.preventDefault();
  secondSurvey[0].style.display = "none";
  confirmationSection[0].style.display = "flex";
});
buttonSecondBlue.addEventListener("click", (e) => {
  e.preventDefault();
  confirmationSection[0].style.display = "none";
  emailCheck[0].style.display = "flex";
});
// proceed.addEventListener("click", (e) => {
//   e.preventDefault();
//   secondSurvey[0].style.display = "none";
//   confirmationSection[0].style.display = "flex";
// });

// proceed.addEventListener("click", (e) => {
// e.preventDefault();
//   let videoGames = document.getElementById("video-games");
//   let programming = document.getElementById("programming");
//   let otherTasks = document.getElementById("other-tasks");
//   let familyTime = document.getElementById("family-time");
//   let watchingTv = document.getElementById("watching-tv");
//   let cleaning = document.getElementById("cleaning");
//   videoGames = videoGames.value;
//   localStorage.setItem("videoGames", videoGames);
//   programming = programming.value;
//   localStorage.setItem("programming", programming);
//   otherTasks = otherTasks.value;
//   localStorage.setItem("otherTasks", otherTasks);
// });
// const url = "http://18.193.250.181:1337/api/countries";
// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//   });

function save() {
  const checkboxFirst = document.getElementById("video-games");
  localStorage.setItem("video-games", checkboxFirst.checked);
  const checkboxSecond = document.getElementById("programming");
  localStorage.setItem("programming", checkboxSecond.checked);
  const checkboxThird = document.getElementById("other-tasks");
  localStorage.setItem("other-tasks", checkboxThird.checked);
  const checkboxFourth = document.getElementById("family-time");
  localStorage.setItem("family-time", checkboxFourth.checked);
  const checkboxFifth = document.getElementById("watching-tv");
  localStorage.setItem("watching-tv", checkboxFifth.checked);
  const checkboxSixth = document.getElementById("cleaning");
  localStorage.setItem("cleaning", checkboxSixth.checked);
}

function load() {
  const checkboxFirst = JSON.parse(localStorage.getItem("video-games"));
  document.getElementById("video-games").checked = checkboxFirst;
  const checkboxSecond = JSON.parse(localStorage.getItem("programming"));
  document.getElementById("programming").checked = checkboxSecond;
  const checkboxThird = JSON.parse(localStorage.getItem("other-tasks"));
  document.getElementById("other-tasks").checked = checkboxThird;
  const checkboxFourth = JSON.parse(localStorage.getItem("family-time"));
  document.getElementById("family-time").checked = checkboxFourth;
  const checkboxFifth = JSON.parse(localStorage.getItem("watching-tv"));
  document.getElementById("watching-tv").checked = checkboxFifth;
  const checkboxSixth = JSON.parse(localStorage.getItem("cleaning"));
  document.getElementById("cleaning").checked = checkboxSixth;
}

load();

function wis() {
  location.reload();
  localStorage.clear();
}

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const countrySelect = document.getElementById("country");
const storagedname = document.getElementById("name-storage");

buttonBlue.addEventListener("click", (e) => {
  e.preventDefault();
  const firstNamee = firstName.value;
  const lastNamee = lastName.value;
  const emaill = email.value;
  const countrySelectt = countrySelect.value;
  if (firstNamee && lastNamee && emaill && countrySelectt) {
    localStorage.setItem("name", firstName.value);
    localStorage.setItem("surname", lastName.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("country", country.value);
  } else {
    alert("something went wrong..");
  }
});

function getValue() {
  const x = localStorage.getItem("name");
  document.getElementById("name-storage").innerHTML = x;
  const y = localStorage.getItem("surname");
  document.getElementById("surname-storage").innerHTML = y;
  const z = localStorage.getItem("email");
  document.getElementById("email-storage").innerHTML = z;
  const a = localStorage.getItem("country");
  document.getElementById("country-storage").innerHTML = a;
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

getCountry();
getValue();
