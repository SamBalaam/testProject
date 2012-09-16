// js comment and that
// second comment 

function validateForm(){
var x=document.forms["contact"]["email"].value;
var atpos=x.indexOf("@");
var dotpos=x.lastIndexOf(".");

if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length || x == "example@somedomain.com"){
  document.getElementById('messageInsert').innerHTML = "Your email appears invalid!";
  return false;
  }
var y=document.forms["contact"]["name"].value;
if (y==null || y=="" || y == "Your name"){
  document.getElementById('messageInsert').innerHTML = "Something seems wrong with your name!";
  return false;
  }
var z=document.forms["contact"]["message"].value;
if (z==null || z=="" || z == "Type your message"){
  document.getElementById('messageInsert').innerHTML = "Please type your message!";
  return false;
  }
  if(atpos>1 || dotpos>=atpos+2 || dotpos+2<x.length || y!=null || y!="" || z!=null || z!=""){
 alert("Thanks for getting in touch. We'll get back to you shortly.");
  }
}
