const user = {
    name : "Giannis",
    age : 23,
    isDeveloper : true,
};

function greetUser(userName){
    return "Hello " + userName;
}

console.log(greetUser(user.name));

function checkAge(userAge){
    if (userAge >=18){
        return "Adult";
    } else {
        return "Minor";
    }
}

console.log(checkAge(user.age))

const tasks = ["Learn HTML", "Learn CSS", "Learn JS"];

for (let i = 0; i<tasks.length; i++){
    console.log(tasks[i]);
}

function checkExp(userAge){
    if (userAge>30){
        return "Experienced";
    } else {
        return "Junior";
    }
}
console.log(checkExp(user.age));


const usernameInput = document.getElementById("username");
const showMessageBtn = document.getElementById("showMessageBtn");
const resetBtn = document.getElementById("resetBtn");
const outputMessage = document.getElementById("outputMessage");

showMessageBtn.addEventListener("click", function(){
    const userName = usernameInput.value;

    if (userName === ""){
        outputMessage.textContent = "Παρακαλώ γράψε πρώτα το όνομα σου"
    } else {
        outputMessage.textContent = "Γεια σου, " + userName + "!";
    }
});

resetBtn.addEventListener("click", function(){
    usernameInput.value = "";
    outputMessage.textContent = "Το μήνυμα θα εμφανιστεί εδώ.";
});