function eventCreator() {
    if(!document.getElementById("event-creator")) {

    
    var cont = document.createElement("div");
    cont.setAttribute("id", "event-creator");
    document.getElementById("calendar-container").appendChild(cont);


    var title = document.createElement("h1");
    title.setAttribute("id", "title");
    title.innerHTML = "Create an Event";

    cont.appendChild(title);
    } else {
        var cont = document.getElementById("event-creator");
        cont.style.animation = "out-event-creator 300ms ease-in-out";
        setTimeout(function() {
            cont.parentNode.removeChild(cont);
        }, 300)
    }
}