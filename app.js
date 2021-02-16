const defaultResult = 0;
let random = defaultResult;
let nextNewNumber = defaultResult;
let newLine = defaultResult;
let logOutput;
let numberName;

function off() {
	document.getElementById("overlay").style.display = "none";
}
function on() {
	document.getElementById("overlay").style.display = "block";
}

function generateLog(max, min, end, start) {
	random = [];
	for (start = 0; start < end; start++) {
		let temp = Math.floor(Math.random() * (max - min + 1) + min);
		if (random.indexOf(temp) == -1) {
			random.push(temp);
		} else start--;
	}
	console.log(random);
}

function generateNextNumber() {
	if (random === 0) {
		let userInput = prompt('What number do you want to play up to?', 80)
		generateLog(userInput,1,userInput,1);
		generationHandler();
	} else if (random !== 0) {
		newLine = newLine + 1;
		generationHandler();
	}
}

function changeBoxStyle(boxIdName) {
	let s = "b" + boxIdName;
	let n = "boxStyleTwo" + " " + s;
	document.getElementById(s).className = n;
}
function generationHandler() {
	nextNewNumber = random[newLine];
	logOutput = random.slice(0, newLine + 1);
	outputResult(nextNewNumber);
	numberName = lookupNumberNickname(nextNewNumber);
	outputNickname(numberName);
	changeBoxStyle(nextNewNumber);
}

function resetGameClearLog() {
	let confirmAnswer;
	confirmAnswer = confirm("Do you really want to reset the Game?");
	if (confirmAnswer === true) {
		for (i = 0; i < logOutput.length; i++) {
			let s = `b${logOutput[i]}`;
			let n = "mini numb";
			document.getElementById(s).className = n;
		}
	}
	outputNickname("----");
	outputResult(defaultResult);
	random = 0;
	newLine = 0;
}
function lookupNumberNickname(newNumberNickname) {
	let lookup = {
		0: "WHOOPS!",
		1: "One Direction",
		2: "One Little Duck",
		3: "Cup of Herbal Tea",
		4: "Knock at the Door",
		5: "Poppies Jive",
		6: "Hattie's Dance Mix",
		7: "Lucky Seven",
		8: "Garden Gate",
		9: "Angus Climbs",
		10: "Erin's Den",
		11: "Legs 11",
		12: "One Dozen",
		13: "Unlucky for Some",
		14: "Valentine’s Day",
		15: "Young and Keen",
		16: "Sweet 16",
		17: "Dancing Queen",
		18: "Down to the Pub",
		19: "Goodbye Teens",
		20: "One Score",
		21: "Royal Salute",
		22: "Two Little Ducks",
		23: "Thee and Me",
		24: "Two Dozen",
		25: "Duck and Dive",
		26: "Pick and Mix",
		27: "Take Me to Heaven",
		28: "Jones' Being Late",
		29: "Rise and Shine",
		30: "Dirty Gertie",
		31: "Man Bun",
		32: "Buckle My Shoe",
		33: "Dirty Knee",
		34: "Ask for More",
		35: "Jump and Jive",
		36: "Three Dozen",
		37: "More than 11",
		38: "Christmas Cake",
		39: "Steps",
		40: "Naughty 40",
		41: "Time for Fun",
		42: "Winnie the Pooh",
		43: "Down on Your Knees",
		44: "Donnacha's Dinosour",
		45: "Halfway There",
		46: "Up to Tricks",
		47: "Four and Seven",
		48: "Four Dozen",
		49: "PC",
		50: "Half a Century",
		51: "Tweak of the Thumb",
		52: "Muireann's Stew",
		53: "Stuck in the Tree",
		54: "John's Stinky Drawers",
		55: "Snakes Alive",
		56: "Chill with Netflix",
		57: "Heinz Varieties",
		58: "Make Them Wait",
		59: "Tequila and lime",
		60: "Five Dozen",
		61: "Bakers Bun",
		62: "Turn the Screw",
		63: "Tickle Me 63",
		64: "Red Raw",
		65: "Old Age Pension",
		66: "South-side Smiths",
		67: "Made in Heaven",
		68: "Saving Grace",
		69: "Either Way Up",
		70: "Three Score and 10",
		71: "Bang on the Drum",
		72: "Six Dozen",
		73: "Queen B",
		74: "Candy Store",
		75: "Strive and Strive",
		76: "Trombones",
		77: "Sunset Trip",
		78: "Heaven's Gate",
		79: "One More Time",
		80: "Eight and Blank"
	};
	return lookup[newNumberNickname];
}
function generatePlayerNumbers () {	
let max = 70;
let min = 1;
let random = Math.floor(Math.random() * (max - min + 1) + min);

}

newNumberBtn.addEventListener("click", generateNextNumber);
resetGameBtn.addEventListener("click", resetGameClearLog);
overLayOffBtn.addEventListener("click", off);
overLayOnBtn.addEventListener("click", on);
