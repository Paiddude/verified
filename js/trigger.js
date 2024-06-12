const openBTN = document.getElementById("open-btn");
const closeBTN = document.querySelectorAll(".close-btn");
const modalDisplay = document.getElementById("verified-modal");
const modalDisplay1 = document.getElementById("unverified-modal");
const textQuerry = document.getElementById("text-querry");
const textResult = document.getElementById("text-result");
const textResult1 = document.getElementById("text-result1");

const verifiedName = [
  "Upbit",
  "Upbitglobal",
  "Minho yoon",
  "Michelle Danke",
  "@Minhoyoon",
  "@MichelleDanke",
];

openBTN.addEventListener("click", (e) => {
  e.preventDefault();
  let textRes = textQuerry.value;

  if (textRes !== "") {
    textRes = capitalizeFirstCharacter(textRes); // Capitalize the first character

    if (verifiedName.includes(textRes)) {
      modalDisplay.style.display = "block";
      textResult.innerText = textRes;
    } else {
      modalDisplay1.style.display = "block";
      textResult1.innerText = textRes;
    }
  } else {
    window.alert("No Input Provided");
  }
});

function capitalizeFirstCharacter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* openBTN.addEventListener("click", (e) => {
  e.preventDefault();
  let textRes = textQuerry.value;
  if (textRes !== "") {
    modalDisplay.style.display = "block";
    textResult.innerText = textRes;
  } else {
    // Handle the case when textRes is an empty string
    console.log("No Input Provided");
  }
}); */

closeBTN.forEach((close) => {
  close.addEventListener("click", () => {
    modalDisplay.style.display = "none";
    modalDisplay1.style.display = "none";
    console.log("hello");
  });
});
