const genBtn = document.getElementById('generateMyNumbers')
const C11 = document.getElementById('C1.1')
const C21 = document.getElementById('C2.1')
const C31 = document.getElementById('C3.1')
const C41 = document.getElementById('C4.1')
const C51 = document.getElementById('C5.1')
const C12 = document.getElementById('C1.2')
const C22 = document.getElementById('C2.2')
const C32 = document.getElementById('C3.2')
const C42 = document.getElementById('C4.2')
const C52 = document.getElementById('C5.2')
const C13 = document.getElementById('C1.3')
const C23 = document.getElementById('C2.3')
const C33 = document.getElementById('C3.3')
const C43 = document.getElementById('C4.3')
const C53 = document.getElementById('C5.3')
const C14 = document.getElementById('C1.4')
const C24 = document.getElementById('C2.4')
const C34 = document.getElementById('C3.4')
const C44 = document.getElementById('C4.4')
const C54 = document.getElementById('C5.4')
const C15 = document.getElementById('C1.5')
const C25 = document.getElementById('C2.5')
const C35 = document.getElementById('C3.5')
const C45 = document.getElementById('C4.5')
const C55 = document.getElementById('C5.5')
const defaultResult = 0;


function numberGerenerator() {
   let a = confirm("Are you sure you want to generate new numbers?");
   if (a === true){
      let columnOne = [];
let columnTwo = [];
let columnThree = [];
let columnFour = [];
let columnFive = [];
let t = [];
generateLog(15, 1, 5, 1);
columnOne = t.concat(random);
generateLog(30, 16, 5, 1)
columnTwo = t.concat(random);
generateLog(45, 31, 5, 1)
columnThree = t.concat(random);
generateLog(55, 46, 5, 1)
columnFour = t.concat(random);
generateLog(70, 56, 5, 1)
columnFive = t.concat(random);
for (i = 0; i < 5; i++){
    document.getElementById(`C1.${i+1}`).textContent = columnOne[i];
}
for (i = 0; i < 5; i++){
    document.getElementById(`C2.${i+1}`).textContent = columnTwo[i];
}
for (i = 0; i < 5; i++){
    document.getElementById(`C3.${i+1}`).textContent = columnThree[i];
}
for (i = 0; i < 5; i++){
    document.getElementById(`C4.${i+1}`).textContent = columnFour[i];
}
for (i = 0; i < 5; i++){
    document.getElementById(`C5.${i+1}`).textContent = columnFive[i];
} 
   }
    
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

function click11(){
    document.getElementById(`C1.1`).className = "selbox"
}
function click12(){
    document.getElementById(`C1.2`).className = "selbox"
}
function click13(){
    document.getElementById(`C1.3`).className = "selbox"
}
function click14(){
    document.getElementById(`C1.4`).className = "selbox"
}
function click15(){
    document.getElementById(`C1.5`).className = "selbox"
}
function click21(){
    document.getElementById(`C2.1`).className = "selbox"
}
function click22(){
    document.getElementById(`C2.2`).className = "selbox"
}
function click23(){
    document.getElementById(`C2.3`).className = "selbox"
}
function click24(){
    document.getElementById(`C2.4`).className = "selbox"
}
function click25(){
    document.getElementById(`C2.5`).className = "selbox"
}
function click31(){
    document.getElementById(`C3.1`).className = "selbox"
}
function click32(){
    document.getElementById(`C3.2`).className = "selbox"
}
function click33(){
    document.getElementById(`C3.3`).className = "selbox"
}
function click34(){
    document.getElementById(`C3.4`).className = "selbox"
}
function click35(){
    document.getElementById(`C3.5`).className = "selbox"
}
function click41(){
    document.getElementById(`C4.1`).className = "selbox"
}
function click42(){
    document.getElementById(`C4.2`).className = "selbox"
}
function click43(){
    document.getElementById(`C4.3`).className = "selbox"
}
function click44(){
    document.getElementById(`C4.4`).className = "selbox"
}
function click45(){
    document.getElementById(`C4.5`).className = "selbox"
}
function click51(){
    document.getElementById(`C5.1`).className = "selbox"
}
function click52(){
    document.getElementById(`C5.2`).className = "selbox"
}
function click53(){
    document.getElementById(`C5.3`).className = "selbox"
}
function click54(){
    document.getElementById(`C5.4`).className = "selbox"
}
function click55(){
    document.getElementById(`C5.5`).className = "selbox"
}

genBtn.addEventListener('click',numberGerenerator)
C11.addEventListener('click', click11);
C12.addEventListener('click', click12);
C13.addEventListener('click', click13);
C14.addEventListener('click', click14);
C15.addEventListener('click', click15);
C21.addEventListener('click', click21);
C22.addEventListener('click', click22);
C23.addEventListener('click', click23);
C24.addEventListener('click', click24);
C25.addEventListener('click', click25);
C31.addEventListener('click', click31);
C32.addEventListener('click', click32);
C33.addEventListener('click', click33);
C34.addEventListener('click', click34);
C35.addEventListener('click', click35);
C41.addEventListener('click', click41);
C42.addEventListener('click', click42);
C43.addEventListener('click', click43);
C44.addEventListener('click', click44);
C45.addEventListener('click', click45);
C51.addEventListener('click', click51);
C52.addEventListener('click', click52);
C53.addEventListener('click', click53);
C54.addEventListener('click', click54);
C55.addEventListener('click', click55);
