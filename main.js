

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

    // QUESTION 1
    const q1_a = document.getElementById("q1-a"); // LAZY
    q1_a.textContent = "💤 From " + nameInput + "'s tummy!";

    const q1_b = document.getElementById("q1-b"); // JOCK
    q1_b.textContent = "🏋️ Letter-writing FLEX! -" + nameInput;

    const q1_c = document.getElementById("q1-c"); // CRANKY
    q1_c.textContent = "😭 Now get to work! -" + nameInput;

    // QUESTION 2
    const q2_a = document.getElementById("q2-a"); // NORMAL
    q2_a.textContent = "🧍 When nothing else is going on, I'm usually reading or experimenting with new recipes at home. Feel free to drop by my place anytime!";

    const q2_b = document.getElementById("q2-b"); // PEPPY
    q2_b.textContent = "🥳 AHH! I WANT TO DANCE!";

    const q2_c = document.getElementById("q2-c"); // SNOOTY
    q2_c.textContent = "👃 Hey, I meant to apologize for calling you a two-faced toad the other day. I didn't mean it. You just caught me at a bad time!";

    // QUESTION 3
    const q3_a = document.getElementById("q3-a"); // SMUG
    q3_a.textContent = "🕴 LIP BAAAAAALM!";

    const q3_b = document.getElementById("q3-b"); // BIG SIS
    q3_b.textContent = "👩 GAAAAAAHHH! My brain's running so hot that I'm gonna catch a fever! I gotta write all this down before it boils away! Whatever you wanted is gonna have to wait for now!";

    // QUESTION 4
    const q4_a = document.getElementById("q4-a"); // PEPPY
    q4_a.textContent = "🥳 I bet all the lurking horrors from society's deepest nightmares wish they could look this cute.";

    const q4_b = document.getElementById("q4-b"); // BIG SIS
    q4_b.textContent = "👩 You ever have those nights when you just can't sleep? At times like that...you know what to do! Try a carrot as a midnight snack! Peel it real nice, and crunch it up nice and slow. Let that day's stress roll off as you crunch! It'll fill you up, and you'll sleep clean on till morning, <catchphrase>!";

    const q4_c = document.getElementById("q4-c"); // NORMAL
    q4_c.textContent = "🧍 It's hard to tell how much of the gossip you hear is true, isn't it? Before you go repeating a rumor... it's best to look into it yourself.";

    const q4_d = document.getElementById("q4-d"); // JOCK
    q4_d.textContent = "🏋️ Welcome! I guess you're here for a tour of the soon-to-be-world-famous " + nameInput + "'s Gym!";

    const q4_e = document.getElementById("q4-e"); // LAZY
    q4_e.textContent = "💤 Isn't my house really clean? I have to clean up every couple of weeks, or my ant friends won't go home.";

    const q4_f = document.getElementById("q4-f"); // CRANKY
    q4_f.textContent = "😭 You know what? TV has changed, kiddo. I don't even watch the news anymore. How about you? You fire up the ol' big screen much these days?";

    const q4_g = document.getElementById("q4-g"); // SNOOTY
    q4_g.textContent = "👃 I can't believe I had to put on sunscreen today. Wait, I wear sunscreen every day. Ignore me.";

    const q4_h = document.getElementById("q4-h"); // SMUG
    q4_h.textContent = "🕴 If I may be so bold, you're looking as cool as a fair number of cucumbers.";


}

// function revealAnswers() {
//     if (document.getElementsByClassName("quizEmoji").style.display === "none") {
//         document.getElementsByClassName("quizEmoji").style.display = "";
//     } else if (document.getElementsByClassName("quizEmoji").style.display === "") {
//         document.getElementsByClassName("quizEmoji").style.display = "none";
//     }
// }