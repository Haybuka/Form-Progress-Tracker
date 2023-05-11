//Get relevant Tags

let burger = document.querySelector(".burger");
const biodataSection = document.querySelector(".biodata");
const allListItems = document.querySelectorAll("li");
const allLabels = document.querySelectorAll("label");
const stepFrom = document.querySelector(".step-from");
const stepTo = document.querySelector(".step-to");
const form = document.querySelector("form");

//Toggling Burger collapse
burger.addEventListener("click", (event) => {
  biodataSection.classList.toggle("inactive");
});

//initial step for first element
let initialStep = 0;

//Adding count to step element, +1 to kick off 0.
stepFrom.innerHTML = initialStep + 1;
stepTo.innerHTML = allListItems.length;

//Form submit handles movement
form.addEventListener("submit", (event) => {
  event.preventDefault();
  //Get the length of the List items to determine steps
  const allSteps = allListItems.length;

  // Handle step through and increments.
  if (initialStep + 1 !== allSteps) {
    initialStep += 1;

    //Select all labels in form to activate thier view
    allLabels[initialStep].classList.add("active-input");
    allLabels[initialStep - 1].classList.remove("active-input");

    //Select list items to jump through
    allListItems[initialStep].classList.add("active");
    allListItems[initialStep - 1].classList.remove("active");

    //Increment step element in span

    stepFrom.innerHTML = initialStep + 1;
  } else {
    //On form complete, change button text.
    document.querySelector("button").innerHTML = "Submit";

    // can also pull out all form field values.
    const allInputs = form.querySelectorAll('input');
    allInputs.forEach( Input => {
        console.log(`${Input.id}`, Input.value)
    })
  }
});


