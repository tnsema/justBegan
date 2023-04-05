
function red(){

var you = document.getElementById("body");

alert("the color will be red");
you.style.backgroundColor="red";

}

function blue(){

var you = document.getElementById("body");
alert("the color will be blue");
you.style.backgroundColor="blue";

}

function green(){

var you = document.getElementById("body");
alert("the color will be green");
you.style.backgroundColor="green";

}

function process(){
	
	var gen = document.getElementByName("gender");
	var gend;
	alert(gen.length);
	
	for(var i=0; i < gen; i++){
		if(gen[i].checked){
			gend=gen[i].value;
		}
	}
	
	document.getElementById("hey").innerHTML = "for";
	
}