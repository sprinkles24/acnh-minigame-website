

const currentDate = new Date();

const currentYear = currentDate.getFullYear();

const christmas = new Date(currentYear, 11, 25);

const daysTillChristmas = Math.ceil((christmas - currentDate)/(8.64*10**7));


function findingDaysIcon() {

    if ((daysTillChristmas)<0) {
        return "./images/toy day countdown icons/a_lot.PNG";

    } else if (daysTillChristmas>25) {
        return "./images/toy day countdown icons/a_lot.PNG";

    } else {
        return `./images/toy day countdown icons/${daysTillChristmas}.PNG`;

    }

}

const linkToImage = document.getElementById("gamesLink");
linkToImage.src = findingDaysIcon();


function nameSubmitted() {
    var nameInput = document.getElementById("nameInput").value;

    const q1_a = document.getElementById("q1-a"); // LAZY
    q1_a.textContent = "a. From " + nameInput + "'s tummy!";

    const q1_b = document.getElementById("q1-b"); // JOCK
    q1_b.textContent = "b. Letter-writing FLEX! -" + nameInput;

    const q1_c = document.getElementById("q1-c"); // CRANKY
    q1_c.textContent = "c. Now get to work! -" + nameInput;

}

function checkAnswers() {
    
}