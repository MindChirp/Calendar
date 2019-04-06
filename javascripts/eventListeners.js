window.addEventListener('mousedown', function(e){   
    setTimeout(function() {
        if(document.getElementById("search-menu-container")) {


        if (document.getElementById('search-menu-container').contains(e.target)){
            // Clicked in box
        } else{
            
            var cont = document.getElementById("search-menu-container");
            //Get the value of the searchbar and input it to the main
            //Searchbar
            document.getElementById("search-box-main").value = document.getElementById("search-box-secondary").value;
            cont.parentNode.removeChild(cont);
            console.log("Removing")
        }
    }
    if(document.getElementById("preview-calendar-item")) {


        if (document.getElementById('preview-calendar-item').contains(e.target)){
            // Clicked in box
        } else{

                var cont = document.getElementById("preview-calendar-item");
            //Get the value of the searchbar and input it to the main
            //Searchbar
            cont.parentNode.removeChild(cont);

                        }
    }

    });
    });


var background = setInterval(function() {

    if(document.getElementById("search-box-main") == document.activeElement) {
        document.activeElement.blur();
        //Call the function to create the dropdown menu
            createSearchMenu();
    }




}, refreshFreq);
activeIntervals.push(background);
var b = document.getElementsByName("button");

b.forEach(function(e) {
    e.addEventListener("click", createRipple);
})


function createRipple(e) {
    var circle = document.createElement("div");
    this.appendChild(circle);

    var d = Math.max(this.clientWidth, this.clientHeight);
    circle.style.width = circle.style.height = d + "px";

    circle.style.left = e.clientX - this.offsetLeft - d / 2 + "px";
    circle.style.top = e.clientY - this.offsetTop - d / 1.2 + "px";

    circle.classList.add("ripple");
    setTimeout(function () {
      var ripples = document.getElementsByClassName("ripple");
      ripples[0].parentNode.removeChild(ripples[0]);
    }, 600);
  }

