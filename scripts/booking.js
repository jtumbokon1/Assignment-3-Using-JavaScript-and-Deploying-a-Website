/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
/* jshint esversion: 6 */
const fulldayBtn = document.getElementById('full');
const halfdayBtn = document.getElementById("half");
const clearBtn = document.getElementById('clear-button');
const daysBtn = document.querySelectorAll(".day-selector li");
let costText = document.getElementById("calculated-cost");
let daysCounter = 0;
let dailyRate = 0;
let weeklyCost = 0;


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function daysClickerHandler(days) {
    days.addEventListener("click", () => {
        if(days.classList.contains("clicked") === false) {
            days.classList.add("clicked");
            daysCounter++;
            recalculate();
        } else {
            days.classList.remove("clicked");
            daysCounter--;
            recalculate();
        }
    });
}

daysBtn.forEach(days => {
    daysClickerHandler(days);
});


/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
function clearClickerHandler() {
    daysBtn.forEach(days => {
        days.classList.remove("clicked");
        daysCounter = 0;
        recalculate();
    });
}

clearBtn.addEventListener("click", clearClickerHandler);


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function halfdayClickerHandler() {
    dailyRate = 20;
    halfdayBtn.classList.add("clicked");
    fulldayBtn.classList.remove("clicked");
    recalculate();
}

halfdayBtn.addEventListener("click", halfdayClickerHandler);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
function fulldayClickerHandler() {
    dailyRate = 35;
    fulldayBtn.classList.add("clicked");
    halfdayBtn.classList.remove("clicked");
    recalculate();
}

fulldayClickerHandler();

fulldayBtn.addEventListener("click", fulldayClickerHandler);


/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function recalculate() {
    weeklyCost = dailyRate * daysCounter;
    costText.innerHTML = weeklyCost;
}

