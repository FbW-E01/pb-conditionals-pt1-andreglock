const intOne = 49;
const intTwo = 99;

if ((50 <= intOne && intOne <= 99) || (50 <= intTwo && intTwo <= 99)) {
    console.log('1:', true);
} else {
    console.log('1:', false);
}

const intThree = 101;

if ((50 <= intOne && intOne <= 99) || (50 <= intTwo && intTwo <= 99) || (50 <= intThree && intThree <= 99)) {
    console.log('2:', true);
} else {
    console.log('2:', false);
}

const a = 9;
const b = 12;
const c = -13;

if (a > b && a > c) {
    console.log('3 The largest is:', a);
} else if (b > a && b > c) {
    console.log('3 The largest is:', b);
} else if (c > a && c > b) {
    console.log('3 The largest is:', c);
} else {
    console.log('3 There are no largest variable');
}

let givenString = 'thon'
let newString = 'Py' + givenString;

if (newString.split("").slice(0, 2).join("") === 'Py') {
    console.log('4:', givenString);
} else {
    console.log('4:', newString);
}

if (50 <= a + b && a + b <= 80) {
    console.log('5:', 65);
} else {
    console.log('5:', 80);
}

const intFour = 32;
const intFive = 40;

if (intFour + intFive === 8 || Math.sqrt(Math.pow((intFour - intFive), 2)) === 8) {
// Math.sqrt(Math.pow((intFour - intFive), 2)) checks also intFive - intFour
    console.log('6:', true);
} else {
    console.log('6:', false);
}

if (intFour + intFive === 15 || intFour === 15 || intFive === 15) {
    console.log('7:', true);
} else {
    console.log('7:', false);
}

if ((intFour % 7) * (intFour % 11) * (intFive % 7) * (intFive % 11) === 0) {
    console.log('8:', true);
} else {
    console.log('8:', false);
}

if (intFour === intFive) {
    console.log('9:', intFour * 6);
} else {
    console.log(`9: ${intFour} and ${intFive} are different`);
}

const difference = intFive - 19;

if (difference > 19) {
    console.log('10:', difference * 2);
} else {
    console.log('10: the difference is less than 19');
}

const firstName = 'Pedro';
const age = 14;

if (age < 13) {
    console.log(`11: ${firstName} is a child`)
} else if (age < 20) {
    console.log(`11: ${firstName} is a teenager`)
} else if (age < 30) {
    console.log(`11: ${firstName} is a young adult`)
} else {
    console.log(`11: ${firstName} is an adult`)
}


