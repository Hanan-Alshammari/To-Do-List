const inputbox = document.getElementById("inputBox");
const listContainer = document.getElementById("list");
const date = document.getElementById("date");

function addItem(){
    if(inputbox.value ===''){
        alert('You must write a text');
    }
    else{
        let listItem = document.createElement("li");
        listItem.innerHTML = inputbox.value;
        listContainer.appendChild(listItem);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        listItem.appendChild(span);
    }
    inputbox.value = '';
    store();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        store();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        store();
    }
},false);

function store(){
    localStorage.setItem("data", list.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();

function showDate(){
    let day = new Date().getDay();
    let y = new Date().getFullYear();
    let mon = new Date().getMonth();
    let d = new Date().getDate();
    switch(day){
        case 0:
            day = "Sunday";
            break;
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
    }  
    switch(mon){
        case 0: 
        mon= "January";
            break;
        case 1: 
        mon= "February";
            break;
        case 2: 
        mon= "March";
            break;
        case 3: 
        mon= "April";
            break;
        case 4: 
        mon= "May";
            break;
        case 5: 
        mon= "June"; 
            break;
        case 6: 
        mon= "July";
            break;
        case 7: 
        mon= "August";
            break;
        case 8: 
        mon= "September";
            break;
        case 9: 
        mon= "October";
            break;
        case 10: 
        mon= "November";
            break;
        case 11: 
        mon= "December";
            break;
        } 
    date.innerText = `${day} | ${mon} ${d}, ${y}`;  
}

showDate(); 