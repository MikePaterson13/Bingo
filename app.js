const defaultResult = 0;
let random = 0;
let nextNewNumber = 0;
let newLine = 0;
let logOutput;
let numberName;

function generateLog() {
	let max = 70;
	random = [];
	for (let i = 0; i < max; i++) {
		let temp = Math.floor(Math.random() * max);
		if (random.indexOf(temp) == -1) {
			random.push(temp);
		} else i--;
	}
	console.log(random);
}

function generateNextNumber() {
	if (random === 0) {
		generateLog();
		generationHandler();
	} else if (random !== 0) {
		newLine = newLine + 1;
		generationHandler();
	}
}

function changeBoxStyle (boxIdName) {
	let s = "b" + boxIdName;
	document.getElementById(s).className = "boxStyleTwo" + " " + s;
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
		location.reload();
	}
}
function lookupNumberNickname(newNumberNickname) {
	let lookup = {
		0: "WHOOPS!",
		1: "Kelly’s Eye",
		2: "One Little Duck",
		3: "Cup of Tea",
		4: "Knock at the Door",
		5: "Man Alive",
		6: "Tom Mix",
		7: "Lucky Seven",
		8: "Garden Gate",
		9: "Doctor’s Orders",
		10: "Cameron’s Den",
		11: "Legs 11",
		12: "One Dozen",
		13: "Unlucky for Some",
		14: "Valentine’s Day",
		15: "Young and Keen",
		16: "Sweet 16",
		17: "Dancing Queen",
		18: "Coming of Age",
		19: "Goodbye Teens",
		20: "One Score",
		21: "Royal Salute",
		22: "Two Little Ducks",
		23: "Thee and Me",
		24: "Two Dozen",
		25: "Duck and Dive",
		26: "Pick and Mix",
		27: "Gateway to Heaven",
		28: "Over Weight",
		29: "Rise and Shine",
		30: "Dirty Gertie",
		31: "Get Up and Run",
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
		44: "Droopy Drawers",
		45: "Halfway There",
		46: "Up to Tricks",
		47: "Four and Seven",
		48: "Four Dozen",
		49: "PC",
		50: "Half a Century",
		51: "Tweak of the Thumb",
		52: "Danny La Rue",
		53: "Stuck in the Tree",
		54: "Clean the Floor",
		55: "Snakes Alive",
		56: "Was She Worth It?",
		57: "Heinz Varieties",
		58: "Make Them Wait",
		59: "Brighton Line",
		60: "Five Dozen",
		61: "Bakers Bun",
		62: "Turn the Screw",
		63: "Tickle Me 63",
		64: "Red Raw",
		65: "Old Age Pension",
		66: "Clickety Click",
		67: "Made in Heaven",
		68: "Saving Grace",
		69: "Either Way Up",
		70: "Three Score and 10",
	};
	return lookup[newNumberNickname]
}

newNumberBtn.addEventListener("click", generateNextNumber);
resetGameBtn.addEventListener("click", resetGameClearLog);