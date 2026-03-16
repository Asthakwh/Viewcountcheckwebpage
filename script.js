
// VIEW COUNTER
let count = localStorage.getItem("page_view");

if(count){
    count = Number(count) + 1;
}else{
    count = 1;
}

localStorage.setItem("page_view", count);

document.getElementById("counter").innerText = count;


// SAVE NAME
function saveName(){

let name = document.getElementById("username").value;

localStorage.setItem("user_name", name);

document.getElementById("displayName").innerText = "Hello " + name;

}


// SHOW NAME AFTER REFRESH
let storedName = localStorage.getItem("user_name");

if(storedName){
document.getElementById("displayName").innerText = "Hello " + storedName;
}
