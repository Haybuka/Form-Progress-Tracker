let burger = document.querySelector(".burger");
const biodataSection = document.querySelector(".biodata");
const allListItems = document.querySelectorAll("li");
const allLabels = document.querySelectorAll("label");
const stepFrom = document.querySelector(".step-from");
const stepTo = document.querySelector(".step-to");
const form = document.querySelector("form");

let initialStep = 0;
stepFrom.innerHTML = initialStep + 1;
stepTo.innerHTML = allListItems.length;
burger.addEventListener("click", (event) => {
  biodataSection.classList.toggle("inactive");
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const allSteps = allListItems.length;

  if (initialStep + 1 !== allSteps) {
    console.log(initialStep + 1, allSteps);
    initialStep += 1;
    allLabels[initialStep].classList.add("active-input");
    allLabels[initialStep - 1].classList.remove("active-input");
    allListItems[initialStep].classList.add("active");
    allListItems[initialStep - 1].classList.remove("active");
    stepFrom.innerHTML = initialStep + 1;
    console.log("added one to step", initialStep);
  } else {
    document.querySelector("button").innerHTML = "Submit";
    console.log("all steps done", initialStep);
  }
});

// console.dir(allListItems.length);
