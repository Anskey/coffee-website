console.log("Hello", "How are you");

let courseTitle = "Intro to web development";
let courseLength = "8 weeks";

console.log(courseTitle);
console.log(courseLength);

let firstName = "Anskey";
let lastName = "Miranda";
let age = "35";

console.log(firstName, lastName, age);

let skills = ["html", "css", "js"];

console.log(skills);

skills[0] = "html5";
skills[3] = "python";

console.log(skills);

let course = {
    title: courseTitle, 
    duration: courseLength,
    attendees: ["Anskey", "Terri", "Kat", "Annagray"]
}

console.log(course);
console.log(course.attendees[0]);

let me = {
    name: firstName + " " + lastName,
    age: age,
    skills: skills
}

console.log(me)

me.nickname = "am";
me.skills[3] = "python";

console.log(me);



let toTopButton = document.getElementById("jumptotop");
toTopButton.addEventListener("click", goToTop);

function goToTop(){
    window.scrollTo(0,0);
}