

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