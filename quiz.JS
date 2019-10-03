const fragor = document.getElementById("question")
const ValA = document.getElementById("A")
const ValB = document.getElementById("B")
const ValC = document.getElementById("C")
const ValD = document.getElementById("D")
const counter = document.getElementById("counter")
const score = document.getElementById("score")

let start = document.getElementById("startbtn")

start.onclick = function () {
    console.log("hello world");

}


let loops = document.getElementsById("UserNumber");

var questionloop = [
    {
        question: "Leader of demacia",
        ValA: "Lux",
        ValB: "Garen",
        ValC: "Jarvan",
        ValD: "Sylos",
        correct: "C"
    }
    , {
        question: "Who is the pale lady",
        ValA: "Leblanc",
        ValB: "Soraka",
        ValC: "Sona",
        ValD: "Unknown",
        correct: "A"
    }, {
        question: "Xaviers son's name",
        ValA: "Langdon",
        ValB: "Mike",
        ValC: "David",
        ValD: "James",
        correct: "C"
    }, {
        question: "Throwed off a cliff",
        ValA: "Jin",
        ValB: "Hehachi",
        ValC: "Kazuya",
        ValD: "Nina",
        correct: "C"
    }, {
        question: "Season 4 winners",
        ValA: "Samsung White",
        ValB: "Royal Club",
        ValC: "OMG",
        ValD: "Samsung Blue",
        correct: "A"
    }, {
        question: "seasong 5 winners",
        ValA: "Fanatic",
        ValB: "Koo Tigers",
        ValC: "Origen",
        ValD: "Skt T1 ",
        correct: "D"
    }, {
        question: "Season 6 winners",
        ValA: "Samsung Galaxy",
        ValB: "H2k Gaming",
        ValC: "Skt T1",
        ValD: "Rox Tigers",
        correct: "C"
    }, {
        question: "Season 7 winners",
        ValA: "Team WE",
        ValB: "Skt T1",
        ValC: "Samsung Galaxy",
        ValD: "Royal Never Give Up",
        correct: "C"
    }, {
        question: "Season 8 winners",
        ValA: "Cloud 9",
        ValB: "Invictus Gaming",
        ValC: "Fnatic",
        ValD: "G2 Esports",
        correct: "B"
    }, {
        question: "Most MVP awards",
        ValA: "Faker",
        ValB: "Bang",
        ValC: "Uzi",
        ValD: "Imp",
        correct: "A"
    },

]

let questions = 0;
function startquiz(){
    let B = questionloop[startquiz];
    fragor.innerHTML = "<p>"+ B.fragor +"</p>";

}