const layout = new layouts();
var refreshFreq = 100;

//All the things to search for
var things = ["Monday", "Tuesday", "Wednesday", "Thursday", 
"Friday", "Saturday", "Sunday", "months", "birthdays", 
"people", "importance", "weather", "temperature", "settings", 
"theme"];
//Keep track of all the active intervals
var activeIntervals = [];
//The main background-checking loop


window.onload = function() {
//Get which day the first day of the month is on

var date = new Date();
date.setDate(0);
var firstDayInMonth = numToDay(date.getDay());

//Get the amount of days in the last month
var date = new Date();
if(date.getMonth() == 0) {
    date.setMonth(12);
}
var daysInPrevMonth = daysInMonth(parseInt(date.getMonth()), date.getFullYear());

//Get the amount of days on the first row that belongs to the previous month
var leftOverDaysInFirstRow;
switch(firstDayInMonth) {
    case "monday":
    leftOverDaysInFirstRow = 0;
    break;
    case "tuesday":
    leftOverDaysInFirstRow = 1;

    break;
    case "wednesday":
    leftOverDaysInFirstRow = 2;

    break;
    case "thursday":
    leftOverDaysInFirstRow = 3;

    break;
    case "friday":
    leftOverDaysInFirstRow = 4;

    break;
    case "saturday":
    leftOverDaysInFirstRow = 5;

    break;
    case "sunday":
    leftOverDaysInFirstRow = 6;

    break;
}

//Append the days in the last month if any
if(leftOverDaysInFirstRow != 0) {
    for(var i = 0; i < leftOverDaysInFirstRow; i++) {
        var day = document.createElement("div");
        day.setAttribute("class", "sidebar-calendar-day");
        day.innerHTML = daysInPrevMonth - leftOverDaysInFirstRow + 1 + i;
        document.getElementById("sidebar-calendar").appendChild(day);
    }
}

//Append the days in the current month
    for(var i = 0; i < 42 - leftOverDaysInFirstRow; i++) {
        var day = document.createElement("div");
        day.setAttribute("class", "sidebar-calendar-day");
        day.setAttribute("style", "color: white");
        day.innerHTML = i + 1;

        //Highlight the current day
        if(i + 1 == date.getDate()) {
            day.style.backgroundColor = "rgba(150,150,150, 0.9)";
        }
        if(i == daysInMonth(date.getMonth() + 1, date.getFullYear())) {
            break;
        }
        document.getElementById("sidebar-calendar").appendChild(day);
    }




var indexedEv = [];

    var date = new Date();
    var month = numToMonth(date.getMonth());
    var days = daysInMonth(date.getMonth() + 1, date.getFullYear());

//Create all the calendar items
var par = document.getElementById("calendar-container");
for(var i = 0; i < days; i++) {
    var el = document.createElement("div");
    el.setAttribute("id", "calendar-item");
    el.setAttribute("class", "calendar-item");
var bkg = document.createElement("div");
    bkg.setAttribute("class", "calendar-item-number-background");
    var t = document.createElement("p");
    t.setAttribute("class", "calendar-item-number");
    t.innerHTML = i + 1;
    bkg.appendChild(t);
    el.appendChild(bkg);
    par.appendChild(el);
}
//Append all events to each box
var evs = ([{"title": "Lufte bikkjematen", "meta": "Forutsatt at det er mulig da", "year": 2019, "month": 3, "date": 2, "from": "1200AM", "to": "0500PM", "type": "reminder", "importance": "r"}, {"title": "Gi Cashewnøtter til hønene og så spise opp hønene etterpå fordi de inneholder cashewnøtter", "meta": "Nah", "year": 2019, "month": 3, "date":2, "from": "1200AM", "to": "0500PM", "type": "reminder", "importance": "r"}, {"title": "This is a reminder", "meta": "Nah", "year": 2019, "month": 3, "date":30, "from": "1200AM", "to": "0500PM", "type": "reminder", "importance": "r"}, {"title": "Jeg har bursdag!", "meta": "WOHOOOOo", "year": 2019, "month": 4, "date":4, "from": "1200AM", "to": "0500PM", "type": "reminder", "importance": "r"}]);
localStorage.setItem("events", JSON.stringify(evs));

//retDat is the retrieved event data
var retDat = JSON.parse(localStorage.getItem("events"));

//Keep track of the types of events
for(var i = 0; i < retDat.length; i++) {
    if(retDat[i].month == date.getMonth() && retDat[i].year == date.getFullYear()) {
      //Index the event from memory if it should be shown on the screen upon boot
    indexedEv.push(i);       
}
}


var els = document.getElementsByClassName("calendar-item");
for(var i = 0; i < indexedEv.length; i++) {
    for(var j = 0; j < els.length; j++) {
        if(retDat[indexedEv[i]].date + 1 == parseInt(els[j].querySelector(".calendar-item-number").innerHTML)) {
//Append the event to the box
            if(retDat[indexedEv[i]].type == "reminder") {
                var el = document.createElement("div");
                el.setAttribute("id", "reminder");
                el.setAttribute("name", retDat[indexedEv[i]].meta);
                el.setAttribute("onclick", "previewEvent(this, true, event)");
                var ico = document.createElement("img");
                ico.setAttribute("src", "./data/assets/images/reminder.png");
                el.appendChild(ico);
                ico.setAttribute("id", "reminder-icon");
                var txt = document.createElement("p");
                txt.setAttribute("id", "reminder-title");
                txt.innerHTML = retDat[indexedEv[i]].title;

                el.appendChild(txt);
                els[j - 1].appendChild(el);

            } else if(retDat[indexedEv[i]].type == "event") {

            }

        }
    }
}



}

function createSearchMenu() {
    var cont = document.createElement("div");
    cont.setAttribute("id", "search-menu-container");
    
    
    var resultCont = document.createElement("div");
    resultCont.setAttribute("id", "search-menu-results");
    
    //Create the overlayed search box
    var input = document.createElement("input");
    input.setAttribute("type", "search");
    input.setAttribute("id", "search-box-secondary");
    input.setAttribute("spellcheck", "false");
    //Trigger search function every time the input changes
    input.setAttribute("oninput", "checkForQuery(this.value)");
    cont.appendChild(input);
    
    setTimeout(function() {
        
        document.getElementById("header").appendChild(cont);
    input.value = document.getElementById("search-box-main").value;
    layout.wideDivider(document.getElementById("search-menu-container"), "content-from-search-bar-divider");
    input.focus();
}, 10);
        
        
        var loadingCont = document.createElement("div");
        loadingCont.setAttribute("id", "loading-container");
        
        cont.appendChild(loadingCont);
        
        //<div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
        
        var loader = document.createElement("div");
        loader.setAttribute("class", "lds-ellipsis");
        loader.setAttribute("id", "loading-icon");
        loader.style.display = "none";
        loadingCont.appendChild(loader);
        for(var i = 0; i < 4; i++) {
            var div = document.createElement("div");
            loader.appendChild(div);
        }
        cont.appendChild(resultCont);
        if(input.value == "") {
            var txt = document.createElement("p");
            txt.setAttribute("id", "suggestion-text");
            txt.innerHTML = "Try searching for ";
            
            var span = document.createElement("span");
            span.setAttribute("id", "thing");
            span.innerHTML = things[Math.round(Math.random() * 100 * (things.length - 1) / 100)];
            resultCont.appendChild(txt);
            txt.appendChild(span);
        }
        


}




//Function for checking for clicks





function checkForQuery(qry) {
if(qry.trim() == "") {

    var cont = document.getElementById("search-menu-results");
    cont.innerHTML = "";
    var txt = document.createElement("p");
    txt.setAttribute("id", "suggestion-text");
    document.getElementById("loading-icon").style.display = "none";

    txt.innerHTML = "Try searching for ";

    var span = document.createElement("span");
    span.setAttribute("id", "thing");
    span.innerHTML = things[Math.round(Math.random() * 100 * (things.length - 1) / 100)];
    cont.appendChild(txt);
    txt.appendChild(span);
}
else if(qry.trim() != "") {
    var cont = document.getElementById("search-menu-results");
    cont.innerHTML = "";
    var txt = document.createElement("p");
    txt.setAttribute("id", "searching-status-text");
    txt.innerHTML = "Searching for ";

    var thing = document.createElement("span");
    thing.setAttribute("id", "thing");
    if(qry.length > 22) {
        var a = qry.substring(0, 22);
        thing.innerHTML = a + "...";
    } else {

        thing.innerHTML = qry;
    }
    txt.appendChild(thing);
    document.getElementById("loading-icon").style.display = "block";
    cont.appendChild(txt);

    //Submit the query to another function 
        search(qry);
}


}


function search(qry) {
    setTimeout(function() {
        var cont = document.getElementById("search-menu-results");
        cont.innerHTML = "";

        var txt = document.createElement("p");
        txt.setAttribute("id", "no-result-placeholder");
        txt.innerHTML = "No results found";
    document.getElementById("loading-icon").style.display = "none";
        
        cont.appendChild(txt);
    }, 4000);
}



