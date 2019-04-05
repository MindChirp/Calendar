var layouts = function() {
    this.wideDivider = function(parent, className) {
        var divider = document.createElement("div");
        divider.setAttribute("id", "divider-wide");
        divider.setAttribute("class", className);

        parent.appendChild(divider);
    }


}