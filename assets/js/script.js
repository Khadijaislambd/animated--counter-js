var project = setInterval(projectDone, 10)
var clients = setInterval(happyClients, 10)
var coffee = setInterval(cupsCoffee, 10)
let count1 = 1;
let count2 = 1;
let count3 = 1;

function projectDone () {
    count1++;
    document.querySelector("#number1").innerHTML = count1;

    // stop at given condition

    if (count1 == 500) {
        clearInterval(project);
    }
}
function happyClients () {
    count2++;
    document.querySelector("#number2").innerHTML = count2;

    // stop at given condition

    if (count2 == 89) {
        clearInterval(clients);
    }
}
function cupsCoffee () {
    count3++;
    document.querySelector("#number3").innerHTML = count3;

    // stop at given condition

    if (count3 == 369) {
        clearInterval(coffee);
    }
}
