

//declaring variables

var hour = document.querySelector("#hour")
var minute = document.querySelector("#minute")
var second = document.getElementById("second");

var period = document.getElementById("period");


//for days
var day = document.getElementById("day");

//container for background
var container  = document.getElementById("container");

// console.log(date.getDay())
let checkDay = function(day){
    switch(day){
        case 0 : return "Sunday";break;
        case 1 : return "Monday";break;
        case 2 : return "Tuesday";break;
        case 3 : return "Wednesday";break;
        case 4 : return "Thursday";break;
        case 5 : return "Friday";break;
        case 6 : return "Saturday";break;
        default : return "Invalid";
    }
}


//AM or PM 
let checkPeriod = function(hour){
    period.textContent = hour <= 12 ? "AM" : "PM";
    
}

//bgchanger 
let handleBG = function(hour){
    let URL = "assets/";

    if(hour >= 1 && hour <= 9){
        URL += "morning.jpg";
    }else if(hour > 9 && hour <= 14){
        URL += "afternoon.jpg";
    }else if(hour > 14 && hour <= 19){
        URL += "evening.jpg";
    }else{
        URL += "night.jpg"
    }
    return URL;
}

let getResult = function(){
    //for Date
    var date = new Date();

    let localHour = date.getHours();

    hour.textContent = `${localHour}`;
    checkPeriod(localHour);
    //bg changer 
    container.style.backgroundImage = `url(${handleBG(localHour)})`

    let localMinute = date.getMinutes();

    minute.textContent = `${localMinute}`;

    let localSecond = date.getSeconds();
    
    second.textContent = `${localSecond}`;

    day.textContent = checkDay(date.getDay());
}

setInterval(getResult,1000)

// console.log(hour,minute,second)

