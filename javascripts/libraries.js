function numToMonth(num) {
    var months = ["january", "february", "march", "april", "may", "june", "july", 
    "august", "september", "october", "november", "december"];
    var txt = months[num];
    return txt;
}

function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }


  function numToDay(num) {
    var days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
    return days[num];
  }

function previewEvent(el, bool, ev) {
console.log(event.target);

var prev = document.createElement("div");
prev.setAttribute("id", "preview-calendar-item");

var header = document.createElement("div");
header.setAttribute("id", "calendar-item-preview-header");
prev.appendChild(header);

var title = document.createElement("h3");

var para = document.createElement("p");
para.setAttribute("id", "calendar-item-preview-info");

if(event.target.tagName == "DIV") {
    var x = event.target.getBoundingClientRect();
    para.innerHTML = event.target.getAttribute("name");
    title.innerHTML = event.target.getElementsByTagName("p")[0].innerHTML;
} else {
var x = event.target.parentNode.getBoundingClientRect();
    para.innerHTML = event.target.parentNode.getAttribute("name");
    title.innerHTML = event.target.parentNode.getElementsByTagName("p")[0].innerHTML;
}


    prev.appendChild(para);
    header.appendChild(title);
//Get pos of element that triggered the event
//Use x.x and x.y for x and y coordinates respectively
setTimeout(function() {

    document.body.appendChild(prev);
}, 10);
    prev.setAttribute("style", "margin-top: " + x.y + "px; margin-left: " + parseInt(x.x - x.width / 5) + "px");


}