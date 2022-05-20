console.log("hola")
window.onload = function () {

    console.log(arrow)
    $(".normalArrow").on("click", function () {
        
        newFunction();
    });


};
function newFunction() {
    var arrowLess = "<span class=\"material-icons icon-align\">expand_less</span>"
    var arrowMore = "<span class=\"material-icons icon-align\">expand_more</span>"
    $(this).html(function (i, text) {
        return text === "Ver menos " + arrowLess ? "Ver más " + arrowMore : "Ver menos " + arrowLess;
    });
}

