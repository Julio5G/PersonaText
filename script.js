let nameH1 = document.getElementById("name");
let phrase = document.getElementById("phrase");

function applyName() {
    nameH1.innerHTML = phrase.value;
}

phrase.addEventListener("keydown", function(event) {
    if(event.key == "Enter") {
        applyName();
    }
});

let colors = [
	'#9400D3',
	'#4B0082',
	'#0000FF',
	'#00FF00',
	'#FFFF00',
	'#FF7F00',
	'#FF0000'
]

window.onload = function() {
    setInterval(changeColors, 1000 / 5);
    //setInterval(changeSize, 1000 / 5);
}

let i = 0;
function changeColors() {
    nameH1.style.color = colors[i];
    i++;
    if (i >= colors.length) {
        i = 0;
    }
}
/*
let j = 5;
function changeSize() {
    nameH1.style.fontSize = j +"rem";
    j++;
    if (j >= 15) {
        j = 5;
    }
}
*/


