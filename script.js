// Assignment Code
const generateBtn = document.getElementById("generate");

// Write password to the #password input

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const passwordEl = document.getElementById('password');
const lengthEl = document.getElementById('length');
const generateEl = document.getElementById('generate');
const symbols = '!@#$%^&*(){}[]=<>/,.'

var addLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);

var addUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

var addNumber = String.fromCharCode(Math.floor(Math.random() * 10) + 48);

var addSymbol = symbols[Math.floor(Math.random() * symbols.length)];

//Array=[addLower,addUpper,addNumber, addSymbol, length];
//passwordEl.innerText = [addUpper, addLower, addNumber, addSymbol];
//var length = lenghtEl.value;
const length = +lengthEl.value;



function Password(){
 let generatePassword = [addUpper, addLower, addNumber, addSymbol,+length.valueOf(lengthEl)].join([]);
 //document.write(generatePassword.join)
 //length = lenghtEl.value;
 //writePassword = "";
//	for (let i = 0; i < generatePassword.length; i++) {
	//   writePassword += generatePassword[i] ;}
   //return(passwordEl.innerText = generatePassword.join([]));
   for (let i = 0;i < 10;i++) {
    password += generatePassword;}

return(	  
passwordEl.innerHTML= password);
   
   if (uppercaseEl.checked) {
	   generatePassword = [addUpper];
	 } 
	
   
   if (uppercaseEl.checked + lowercaseEl.checked) {
	   generatePassword = [addUpper,addLower];
	 } 
	
	 if (uppercaseEl.checked + lowercaseEl.checked + numbersEl.checked) {
	   generatePassword = [addUpper,addLower,addNumber];
	 } 
	 
   
	 if (uppercaseEl.checked + lowercaseEl.checked + numbersEl.checked+symbolsEl.checked) {
	   generatePassword = [addUpper,addLower,addNumber,addSymbol];
	 } 
   
   

//return(
	//passwordEl.innerText = password.join([])

};

 

generateBtn.addEventListener("click", Password)
