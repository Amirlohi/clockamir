let wakeUp = 7;
let noon = 12;
let lunch = 12;
let nap = lunch + 2;
let evening = 18;
let startTime;
/******************************/
function currentTime(){
    let clock = document.getElementById("clock");
    let nowTime = new Date();
    let hour = nowTime.getHours(); 
    let min = nowTime.getMinutes(); 
    let sec = nowTime.getSeconds(); 
    let period = "PM";
    
    if(hour>noon){
        period = "AM";
        hour=hour-12;
    }

    let clockTime = hour + ':' + min + ':' + sec + " " + period + "!";
    clock.innerText = clockTime;

   
}
/*currentTime();
setInterval(currentTime,1000);*/


function showtMessage(){
    time = new Date().getHours();
    var messageText;
    let timeEvent = document.getElementById("timeEvent");
    let imageEvent = document.getElementById("imageEvent");
    let image = "https://estherbydesign.org/wp-content/uploads/2021/02/December10.jpg";
    if (time == startTime)
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
      messageText = "Let's party!";
    }
    else if (time == wakeUp)
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
      messageText = "Wake up!";
    }
    else if (time == lunch)
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
      messageText = "Let's have some lunch!";
    }
    else if (time == nap)
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
      messageText = "Sleep night!";
    }
    else if (time < noon)
    {
      image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
      messageText = "Good morning!";
    }
    else if (time >= evening)
    {
      image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
      messageText = "Good evening!";
    }
    else
    {
      image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
      messageText = "Good afternoon!";
    }
    console.log(messageText);
    timeEvent.innerHTML = messageText;
    imageEvent.src = image;
    
    currentTime()
}
showtMessage()
setInterval(showtMessage,1000);

let startTimeButton = document.getElementById("startTimeButton");
function buttonEvent(){
    if (startTime < 0){
        startTime = new Date().getHours();
        startTimeButton.innerText = "Stop!";
        startTimeButton.style.backgroundColor = "#0A8DAB";
    }
    else {
        startTime = -1;
        startTimeButton.innerText = "Start!";
        startTimeButton.style.backgroundColor = "white";
    }
}
startTimeButton.addEventListener("click",buttonEvent);
buttonEvent();

const wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
const lunchTimerSelector = document.getElementById("lunchTimeSelector");
const napTimeSelector =  document.getElementById("napTimeSelector");

function wakeupEvent(){
    wakeUp =  wakeUpTimeSelector.value;
}

wakeUpTimeSelector.addEventListener("change",wakeupEvent);

function lunchEvent(){
    lunch = lunchTimerSelector.value;
}

lunchTimerSelector.addEventListener("change",lunchEvent);

function napEvent(){
    nap =napTimeSelector.value;
}

napTimeSelector.addEventListener("change",napEvent);

