var score = 0;

var a = prompt('True or False: The text says that students must rest their eyes 5 minutes every hour. (Answer "True" or "False", case sensitive.)');
if (a === "False") {
    score = score + 1;
    alert('Correct!');
} else {
    alert('Sorry, the correct answer is "False".');
}

var b = prompt('How many seconds do students need to rest their eyes every 20 minutes?');
if (b === "20") {
    score = score + 1;
    alert('Correct!');
} else {
    alert('Sorry, the correct answer is "20".');
}

var c = prompt('True or False: Things moving quickly on the screen are good for your eyes');
if (c === "False") {
    score = score + 1;
    alert('Correct!');
} else {
    alert('Sorry, the correct answer is "False".');
}

var d = prompt('True or False: Teachers can assign projects off of the screen to improve eyesight');
if (d === "True") {
    score = score + 1;
    alert('Correct!');
} else {
    alert('Sorry, the correct answer is "True".');
}

var e = prompt('True or False: Colourful text is better than black and white text for your eyes.');
if (e === "False") {
    score = score + 1;
    alert('Correct!');
} else {
    alert('Sorry, the correct answer is "False".');
}

var f = prompt('Which one is better for your eyes: (1) e-book, (2) video games? Type the number "1" or "2".');
if (f === "1") {
    score = score + 1;
    alert('Correct!');
} else {
    alert('Sorry, the correct answer is "1".');
}

var g = prompt("True or False: To protect children's eyes, parents can let them use electronics as much as they want.");
if (g === "False") {
    score = score + 1;
    alert('Correct!');
} else {
    alert('Sorry, the correct answer is "False".');
}

var h = prompt('How many seconds should your eyes rest every hour?');
if (h === "600") {
    score = score + 1;
    alert('Correct!');
} else {
    if (h === "10") {
        alert('Did you remember that I asked in seconds?');
    } else {
        alert('Sorry, the correct answer is "600".');
    }
}

var i = prompt('Is using a mobile device or reading a book lying on the ground good for your eyes? Answer "Yes" or "No".');
if (i === "No") {
    score = score + 1;
    alert('Correct!');
} else {
    alert('Sorry, the correct answer is "No".');
}

var j = prompt('True or False: Teachers assigning documents instead of playing games to learn is better for your eyes.');
if (j === "True") {
    score = score + 1;
    alert('Correct!');
} else {
    alert('Sorry, the correct answer is "True".');
}

if (score === 10) {
    alert('Congratulations! You scored 10 out of 10!');
}

if (score === 9 || score === 8) {
    alert('Almost perfect! You scored ' + score + ' out of 10!');
}

if (score === 7 || score === 6) {
    alert('Great job! You scored ' + score + ' out of 10!');
}

if (score === 5 || score === 4) {
    alert('Good job for scoring ' + score + ' out of 10.');
}

if (score === 3 || score === 2) {
    alert("You scored " + score + " out of 10. Keep trying, and you'll be perfect!");
}

if (score === 1 || score === 0) {
    alert("You scored " + score + " out of 10. I bet you'll get a good score if you try again");
}