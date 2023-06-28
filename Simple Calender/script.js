
function Wholetime(){
    const today = new Date();
    sec.innerHTML = today.getSeconds();
    const hr12 = today.getHours();
    if(hr12 > 12){
    
    };
    
    date.innerHTML = today.getDate();
    day.innerHTML = weekdays[today.getDay()];
    month.innerHTML = AllMonth[today.getMonth()];
    year.innerHTML = today.getFullYear();
    hr.innerHTML = hr12;
    min.innerHTML = today.getMinutes();
}
setInterval( Wholetime , 1000);

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const time = document.getElementById("time");
const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const weekdays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const AllMonth = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];



