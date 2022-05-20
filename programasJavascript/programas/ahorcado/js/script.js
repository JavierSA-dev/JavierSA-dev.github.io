

var correctLetters = 0;
var tries = 0;
var wrongTries = 0;

async function main() {

    $(".container").fadeOut();


    delay(400).then(() => $(".contanierLetter").fadeIn());

    $("h2").text("Introduce una letra")
    var guessWord = document.getElementById("toGuessWord").value;
    const chars = guessWord.split("");
    for (let i = 0; i < chars.length; i++) {

        $('.containerResult').append("<div id='"+i+"'  class='posibleLetter'> </div>")
        
    }
    $('.containerResult').css("grid-template-columns", "repeat(" + chars.length + ", 1fr)")

    

}

function comprobar() {


    var n = 0;

    var guessWord = document.getElementById("toGuessWord").value;

    guessWord = guessWord.toUpperCase();
    
    const chars = guessWord.split("");

    var userLetter = document.getElementById("letter").value;

    userLetter = userLetter.toUpperCase();


    for (let i = 0; i < chars.length; i++) {



        
        if (userLetter == chars[i]) {
            n++;
            $('#'+i+'').removeClass('posibleLetter')
            $('#'+i+'').addClass('correctLetter')
            correctLetters++;
            $("#" + i + "").text(userLetter)
            
        }

    }

    if (n == 0) {
        wrongTries++;

        $('#letter').addClass("bounce")
        $('#imgStick')[0].style.backgroundPosition = -(308 * wrongTries)+'px 0'
        if(wrongTries == 6){
            $.confirm({
                title: 'Has perdido :(',
                content: 'La palabra era: '+guessWord,
                type: 'red',
                typeAnimated: true,
                buttons: {
                    tryAgain: {
                        text: 'Reiniciar',
                        btnClass: 'btn-orange',
                        action: function(){
                            location.reload();
                        }
                    }
                }
            });
        }
        
    }
    tries++;


    if (correctLetters == chars.length) {
        
        guessWord.substr(0,1).toUpperCase()+guessWord.substr(1);

        $.confirm({
            title: 'Felicidades!!',
            content: 'La palabra era: '+guessWord +'<br> Lo adivinaste en '+tries+' intentos.',
            type: 'green',
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: 'Reiniciar',
                    btnClass: 'btn-orange',
                    action: function(){
                        location.reload();
                    }
                }
            }
        });
    }
    delay(1000).then(() => $('#letter').removeClass("bounce"));





}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

$('#toGuessWord').on('keydown', function (e) {
    if (e.keyCode == 13) {
        main()
        return false;
    }
});

$('#letter').on('keydown', function (e) {
    if (e.keyCode == 13) {
        comprobar()
        return false;
    }
});