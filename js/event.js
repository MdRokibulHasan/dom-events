function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// just set name of the blue function 
const blueButton = document.getElementById('make-blue-button');
blueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

// just click green button handel annoymos function
const greenButton = document.getElementById('make-green-button');
greenButton.onclick = function () {
    document.body.style.backgroundColor = 'green';
}

// handel by using event listener
const goldenrodButton = document.getElementById('make-goldenrod-button');

goldenrodButton.addEventListener('click', makeGoldenrod);

function makeGoldenrod() {
    document.body.style.backgroundColor = 'goldenrod';
}
// add eventListener
const hotPinkButton = document.getElementById('make-hotpink-button');
hotPinkButton.addEventListener('click', function () {

    document.body.style.backgroundColor = 'hotpink';
}
)
// short cut
document.getElementById('make-light-blue-button').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})


