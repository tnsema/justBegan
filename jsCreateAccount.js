

var pass = document.getElementById("password").Value;
var vpass = document.getElementById("vpassword").Value;
var up = uppercase(pass);

alert(up);



function validate(){

}

function uppercase(pass){
    
var pass = document.getElementById("password").Value;
var vpass = document.getElementById("vpassword").Value;
     
    for(var i=0; i<pass.length; i++){

if(pass.CharAt(i) == pass.CharAt(i).UpperCase){
    up+=1;
   
}

    }
    return up;
}