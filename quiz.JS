/*const fragor = document.getElementById("question")
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
*/
let score = 0;
let i = 0;

function Laddafraga(index){
    document.getElementById("frågor").innerHTML = jsonQuestion[index].question ;
    document.getElementById("ValA").innerHTML = jsonQuestion[index].ValA ;
    document.getElementById("ValB").innerHTML = jsonQuestion[index].ValB ;
    document.getElementById("ValC").innerHTML = jsonQuestion[index].ValC ;
    document.getElementById("ValD").innerHTML = jsonQuestion[index].ValD ;

}


function checkAnswer(){
 if (document.getElementById().checked && jsonQuestion[i].ValA == jsonQuestion[i].correct){
     score++
}
if (document.getElementById().checked && jsonQuestion[i].ValB == jsonQuestion[i].correct){
    score++
}
if (document.getElementById().checked && jsonQuestion[i].ValC == jsonQuestion[i].correct){
    score++
}
if (document.getElementById().checked && jsonQuestion[i].ValD == jsonQuestion[i].correct){
    score++
}


var jsonQuestion = [
    {
        "question" : "Leader of demacia",
        "ValA" : "Lux",
        "ValB" : "Garen",
        "ValC" : "Jarvan",
        "ValD": "Sylos",
        "correct" : "Jarvan"
    }
    , {
       "question" : "Who is the pale lady",
       "ValA" : "Leblanc",
       "ValB" : "Soraka",
        "ValC": "Sona",
        "ValD": "Unknown",
        "correct": "Leblanc"
    }, {
        "question" : "Xaviers son's name",
        "ValA" : "Langdon",
        "ValB": "Mike",
        "ValC": "David",
        "ValD": "James",
        "correct": "David"
    }, {
        "question": "Can perform Electric god fist",
        "ValA": "Jin",
        "ValB": "Hehachi",
        "ValC": "Kazuya",
        "ValD": "Nina",
        "correct": "Kazuya" || "Jin" || "Hehachi"
    }, {
        "question": "Season 4 winners",
        "ValA": "Samsung White",
        "ValB": "Royal Club",
        "ValC": "OMG",
        "ValD": "Samsung Blue",
        "correct": "Samsung White"
    }, {
        "question": "seasong 5 winners",
        "ValA": "Fanatic",
        "ValB": "Koo Tigers",
        "ValC": "Origen",
        "ValD": "Skt T1 ",
        "correct" : "Skt T1"
    }, {
        "question": "Season 6 winners",
        "ValA": "Samsung Galaxy",
        "ValB": "H2k Gaming",
        "ValC": "Skt T1",
        "ValD": "Rox Tigers",
        "correct": "Skt T1"
    }, {
        "question": "Season 7 winners",
        "ValA": "Team WE",
        "ValB": "Skt T1",
        "ValC": "Samsung Galaxy",
        "ValD": "Royal Never Give Up",
        "correct": "Samsung Galaxy"
    }, {
        "question": "Season 8 winners",
        "ValA": "Cloud 9",
        "ValB": "Invictus Gaming",
        "ValC": "Fnatic",
        "ValD": "G2 Esports",
        "correct": "Invictus Gaming"
    }, {
        "question": "Most MVP awards",
        "ValA": "Faker",
        "ValB": "Bang",
        "ValC": "Uzi",
        "ValD": "Imp",
        "correct": "Faker"
    },

]


