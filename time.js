

function count(){
	
	var old = new Date("dec, 31 2099 00:00:00");
	var tym = new Date();
	
	var dif = old - tym;
	
	var d = Math.floor(dif / (1000*60*60*24));
	var h = Math.floor((dif%(1000*60*60*24)) / (1000*60*60));
	var m = Math.floor((dif%(1000*60*60)) / (1000*60));
	var s = Math.floor((dif%(1000*60)) / (1000));
	
	var d = update(d);
	var h = update(h);
	var m = update(m);
	var s = update(s);
	
	document.getElementById("days").innerHTML = d ;
	document.getElementById("days2").innerHTML = " days ";
	document.getElementById("hours").innerHTML = h ;
	document.getElementById("hours2").innerHTML = " hours ";
	document.getElementById("min").innerHTML = m ;
	document.getElementById("min2").innerHTML = " minutes ";
	document.getElementById("sec").innerHTML = s ;
	document.getElementById("sec2").innerHTML = " seconds ";
	
}
setInterval("count()", 1000);

function update(i){
	
	if(i<10){
		var i = "0"+i;
		
	}
	else{
		var i = i;
	}
	return i;
}