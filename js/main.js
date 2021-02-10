"use strict";


let userName = prompt('please inter your name', "<name gose her>");
function yourName(userName){
alert('welcome to become friends.. ' + userName);
console.log(userName);
}

let me = prompt('Im I 26 years old ?', "<yes or no>");

function myAge(me){if (me.toLowerCase === 'yes') {
    alert('it\'s true');
    //console.log('correct')
} else if (me.toLowerCase() === 'no') {
    alert('it\'s 26');
}
}

let back = prompt(' dose my back ground about interior design?', '<yes or no>');

function babyBack(back){ if (back.toLowerCase() === 'yes') {
    alert('true');
    //console.log('correct')
} else if (back.toLowerCase() === 'no') {
    alert('false');
}
}


let challenges = prompt('dose I accept challenges ?', '<yes or no>');

function loveChallenges(challenges){ if (challenges.toLowerCase() === 'no') {
    alert('yes I does');
    //console.log('correct')
} else if (challenges.toLowerCase() === 'yes') {
    alert(' we start be come friends');
}
}


let ask = prompt('do you will ask me to draw you?', '<yes or no>');

function meAske(ask){ if (ask.toLowerCase() === 'yes') {

    alert('do not even try');
} else if (ask.toLowerCase() === 'no') {
    alert('great I like you ');
    //console.log('correct')
}
}
let know = prompt(' did you start to know me?', '<yes or no>');

function youKnow (know){ if (know.toLowerCase() === 'yes') {
    alert('great read about me to know more');
    //console.log('correct')
} else if (know.toLowerCase() === 'no') {
    alert(' here you can read about me to know me more.');
    //console.log('correct')
}
}
yourName(userName);
myAge(me);
babyBack(back);
loveChallenges(challenges);
meAsk(ask);
youKnow(know);

alert(userName + (' ..hello agin'))
console.log(userName, know, ask, me, challenges, back)
