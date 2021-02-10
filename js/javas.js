"use strict";


let userName = prompt('please inter your name', "<name gose her>");
alert('welcome to become friends.. ' + userName);
console.log(userName);

let me = prompt('Im I 26 years old ?', "<yes or no>");

if (me.toLowerCase === 'yes') {
    alert('it\'s true');
    //console.log('correct')
} else if (me.toLowerCase() === 'no') {
    alert('it\'s 26');
}

let back = prompt(' dose my back ground about interior design?', '<yes or no>');

if (back.toLowerCase() === 'yes') {
    alert('true');
    //console.log('correct')
} else if (back.toLowerCase() === 'no') {
    alert('false');
}

let challenges = prompt('dose I accept challenges ?', '<yes or no>');

if (challenges.toLowerCase() === 'no') {
    alert('yes I does');
    //console.log('correct')
} else if (challenges.toLowerCase() === 'yes') {
    alert(' we start be come friends');
}

let ask = prompt('do you will ask me to draw you?', '<yes or no>');

if (ask.toLowerCase() === 'yes') {

    alert('do not even try');
} else if (ask.toLowerCase() === 'no') {
    alert('great I like you ');
    //console.log('correct')
}

let know = prompt(' did you start to know me?', '<yes or no>');

if (know.toLowerCase() === 'yes') {
    alert('great read about me to know more');
    //console.log('correct')
} else if (know.toLowerCase() === 'no') {
    alert(' here you can read about me to know me more.');
    //console.log('correct')
}

alert(userName + '..hello agin');

console.log(userName, know, ask, me, challenges, back);
0

let lucky = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let toTry = 4;
let guess = prompt('guess what is my luck number?', "<number goes from 1 to 10>");
let flag = true

while (flag) {
    for (let i = 0; i < lucky.length; i++) {

        // console.log('at index', lucky[i]);

        if (Number(guess) === 7) {
            alert('true');
            flag = false;
            break;

        } else if (Number(guess) > 8 || Number(guess) < 6) {
            alert('too faaar');
            guess = prompt('please try again you have : ' + toTry + ' remaining!');

        } else if (Number(guess) === 8 || Number(guess) ===
            6) {
            alert('very very close');
            // console.log(Number(guess));
            guess = prompt('please try again you have : ' + toTry + ' remaining!');

        }
        break;
    }




}






let toDo = ['walking at night', 'swimming', 'bike riding', 'camping', 'cooking', 'meditation', 'meet people', 'photography', 'exploration', 'writing'];
let attempts = 6;
let userInput = prompt('try to guess what I like to do');
let correct = false
while (attempts > 0) {

    for (let i = 0; i < toDo.length; i++) {
        console.log('at index', i, 'value =>', userInput)
        console.log(userInput)
        console.log(toDo[i])

        if (userInput === toDo[i]) {
            alert('correct answer!');
            correct = true
            break;
        }

        attempts--;
    }
    if (correct) {
        break;
    }
    userInput = prompt('please try again you have : ' + attempts + ' remaining!');

    console.log(userInput);



}




// toDo.push('playing');
// console.log(toDo);

// toDo.pop();
// console.log(toDo);


// toDo.push('drawing');
// console.log(toDo);

// toDo.unshift('sleeping');
// console.log(toDo);

// toDo.shift();
// console.log(toDo.length);
// console.log(toDo);


// toTry.push('0');
// console.log(toTry);

// toTry.pop();
// console.log(toTry);


// toDo.push('1');
// console.log(toTry);

// toDo.unshift('2');
// console.log(toTry);

// toDo.shift();
// console.log(toTry.length);
// console.log(toTry);