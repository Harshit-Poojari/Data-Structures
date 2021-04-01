var listofstudents = [];
function submit(){
var name1 = document.getElementById("studentname1").value;
var name2 = document.getElementById("studentname2").value;
var name3 = document.getElementById("studentname3").value;
var name4 = document.getElementById("studentname4").value;
var name5 = document.getElementById("studentname5").value;
listofstudents.push(name1);
listofstudents.push(name2);
listofstudents.push(name3);
listofstudents.push(name4);
listofstudents.push(name5);
 console.log(listofstudents);
 document.getElementById("displayname").innerHTML = listofstudents;
 document.getElementById("sorting_button").style.display="inline-block";
 document.getElementById("submit_button").style.display="none";
}
function sorting(){
    listofstudents.sort();
     console.log(listofstudents);
     document.getElementById("displayname").innerHTML = listofstudents;
}