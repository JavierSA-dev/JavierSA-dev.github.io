console.log("hola")
var contador = 1

$(".click").on("click", function() {
    
    $('.count').text(contador++)
});

var timeout, clicker = $(".click");

clicker.mousedown(function(){

    timeout = setInterval(function(){
        $('.count').text(contador++)
        console.log("a")
    }, 100);

    return false;
});

$(document).mouseup(function(){
    clearInterval(timeout);
    return false;
});