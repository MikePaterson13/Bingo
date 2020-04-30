const newNumberBtn = document.getElementById("new-number");
const viewLogBtn = document.getElementById("view-number-log");
const resetGameBtn = document.getElementById("reset-game");

const currentResultOutput = document.getElementById("current-result");
const showLogSection = document.getElementById("the-log");
const showNumberNickname = document.getElementById("number-nickname");

function outputResult(result) {
	currentResultOutput.textContent = result;
}

function outputLog(result) {
	showLogSection.textContent = result;
}

function outputNickname(result) {
	showNumberNickname.textContent = result;
}
