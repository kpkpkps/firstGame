var Answer = window.prompt("The number: ")

var A=0
var B=0

function check(a,n){
		AB = [0, 0]
		for (var i=0; i<5; i++){
		if ((a[i] == n[0]) || (a[i] == n[1]) || (a[i] == n[2]) || (a[i] == n[3]) || (a[i] == n[4])) {
		AB[1] += 1;
		}
		if (a[i] == n[i]){
		AB[1] -= 1;
		AB[0] += 1;
		}
		}
		return AB;
}
		

function mainFunction(){

var money = 100
var sec=60

var guess = window.prompt("First Guess: ")
var A = String(check(guess, Answer)[0])
var B = String(check(guess, Answer)[1])

document.getElementById("numbers").innerHTML += "<br>" + guess + " A = " + A + " B = " + B

var timerInterval =setInterval(function(){
		if (sec == 0) 
		{
		sec=60
		sec -= 1
		}
		else{sec -= 1}
		
		document.getElementById("timer").innerHTML = sec
		},
		1000
		)
	
//var timeInterval =(setInterval(function(){sec-- 
//document.getElementById("timer").innerHTML = sec}, 1000))
	
	setInterval(function(){

	money -= 5
	
var guess = window.prompt("Next Guess: ")

var A = String(check(guess, Answer)[0])
var B = String(check(guess, Answer)[1])

document.getElementById("numbers").innerHTML += "<br>" + guess + " A = " + A + " B = " + B
	
	document.getElementById("score").innerHTML = money


}
, 60000
)
}
