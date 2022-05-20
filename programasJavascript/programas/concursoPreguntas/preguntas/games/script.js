var music = new Audio('pregunta.mp3')
function pregunta() {
    
    music.play()

}
function stop() {
    if (music.paused) {
        music.play()
    }else{
        music.pause()
    }
}

var totalQuestion = 1
var correctQuestion = 0
var wrongQuestion = 0

$('.totalQuestion').text(totalQuestion)
$('.correctQuestion').text(correctQuestion)
$('.wrongQuestion').text(wrongQuestion)

$(".p1").on( "click", function() {
    checkQuestion($(this), "https://imagenes.elpais.com/resizer/CBSTZ_2sbuQqZAyVPPRpg5Xgq4E=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/OA7MOGJ43VVXSDWCDCGZZB2PRA.jpg", "Sólo en su primer año de salida pac-man ya había alcanzado el millón y medio de ventas.");
    $('.question').text('¿Entre que dos grandes compañias fue la guerra de consolas?')
    $(".p1").prop("onclick", null).off("click");
    $('.respuestas').children().removeClass('p1')
    $('.respuestas').children().addClass('p2')
    $(".p2")[0].innerText = "A. Nintendo vs Sega"
    $(".p2")[1].innerText = "B. Sega vs Microsoft"
    $(".p2")[2].innerText = "C. EA vs Konami"
    $(".p2")[3].innerText = "D. Bethesda vs IBM"
    $('.rA').addClass('correcta')
    p2()
});
function p2(){
    $(".p2").on( "click", function() {

        checkQuestion($(this), "https://i.ytimg.com/vi/sDRqPrYi-kk/maxresdefault.jpg", "La primera guerra de consolas que fue disputada, nintendo fue el vencedor después de la salida de la nintedo 64.");
        $('.question').text('¿Quién protagoniza la saga Halo?')
        $(".p2").prop("onclick", null).off("click");
        $('.respuestas').children().removeClass('p2')
        $('.respuestas').children().addClass('p3')
        $(".p3")[0].innerText = "A. Kirby"
        $(".p3")[1].innerText = "B. Arthur Morgan"
        $(".p3")[2].innerText = "C. Kratos"
        $(".p3")[3].innerText = "D. Jefe Maestro"
        $('.rA').removeClass('correcta')
        $('.rD').addClass('correcta')
        p3()
    });
}

function p3(){
    $(".p3").on( "click", function() {

        checkQuestion($(this), "https://media.gq.com.mx/photos/61f99491247e703ee62fca75/16:9/w_2560%2Cc_limit/halo.jpg", "Jefe Maestro o Master Chief es el icónico soldado que protagoniza esta saga.");
        $('.question').text('¿Cuál fue el último videojuego de Rockstar?')
        $(".p3").prop("onclick", null).off("click");
        $('.respuestas').children().removeClass('p3')
        $('.respuestas').children().addClass('p4')
        $(".p4")[0].innerText = "A. GTA V"
        $(".p4")[1].innerText = "B. GTA Trilogy Collection"
        $(".p4")[2].innerText = "C. Red Dead Revolver"
        $(".p4")[3].innerText = "D. Red Dead Redemption 2"
        $('.rD').removeClass('correcta')
        $('.rB').addClass('correcta')
        p4()
    });
}

function p4(){
    $(".p4").on( "click", function() {
        checkQuestion($(this), "https://www.somosxbox.com/wp-content/uploads/2021/08/E8wIzdeWEAMr5tc-e1629104709995.jpg", "El intento de remasterizar los grandes clásicos que acabó siendo un desastre.");
        $('.question').text('Juego más vendido de la historia')
        $(".p4").prop("onclick", null).off("click");
        $('.respuestas').children().removeClass('p4')
        $('.respuestas').children().addClass('p5')
        $(".p5")[0].innerText = "A. Wii Sports"
        $(".p5")[1].innerText = "B. Tetris"
        $(".p5")[2].innerText = "C. Minecraft"
        $(".p5")[3].innerText = "D. GTA V"
        $('.rB').removeClass('correcta')
        $('.rC').addClass('correcta')
        p5()
        
    });
}

function p5() {
    $(".p5").on( "click", function() {
        checkQuestion($(this), "https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg", "El mítico juego de cubos que ha alcanzado la cifra de 200 millones de ventas seguido por GTA V con 150 millones.");

    })
    
}

function final(){
    if (correctQuestion >= 3) {
        $.confirm({
            title: 'Enhorabuena has aprobado!',
            content: '<img src="https://c.tenor.com/10IuoowY3SkAAAAC/rey-aplausos.gif" alt="">',
            buttons: {
                somethingElse: {
                    text: 'Volver al Inicio',
                    btnClass: 'btn-green',
                    action: function(){
                        window.location.href = '../../index.html'
                    }
                }
            }
        });
               
    }else{
        $.confirm({
            title: 'Que pena más suerte la próxima vez!',
            content: '<img src="https://i.makeagif.com/media/10-14-2015/qT8_f7.gif" alt="">',
            buttons: {
                somethingElse: {
                    text: 'Volver al Inicio',
                    btnClass: 'btn-red',
                    action: function(){
                        window.location.href = '../../index.html'
                    }
                }
            }
        });
    }
}

function checkQuestion(entry, url, text) {
    if (entry.hasClass("correcta")) {
        music.pause()
        var audio = new Audio('acierto.mp3');
        audio.play();
        $.confirm({
            title: 'Felicidades!',
            columnClass: 'medium',
            content: 'Respuesta correcta <br> <img src="' + url + '" alt="" > <br>'+ text +'',
            type: 'green',
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: 'Continuar',
                    btnClass: 'btn-green',
                    action: function () {
                        music.play()
                        totalQuestion++;
                        correctQuestion++;
                        $('.totalQuestion').text(totalQuestion);
                        $('.correctQuestion').text(correctQuestion);
                        if (totalQuestion == 6) {
                            final()
                        }else{
                            $('.totalQuestion').text(totalQuestion);

                        }
                        
                    }
                }
            }
        });
    } else {
        music.pause()
        var audio = new Audio('error.mp3');
        audio.play();
        $.confirm({
            title: 'Que pena!',
            columnClass: 'medium',
            content: 'Respuesta incorrecta, la respuesta correcta era ' + $('.correcta').text(),
            type: 'red',
            typeAnimated: true,
            buttons: {
                tryAgain: {
                    text: 'Continuar',
                    btnClass: 'btn-red',
                    action: function () {
                        music.play()
                        totalQuestion++;
                        wrongQuestion++;
                        
                        $('.totalQuestion').text(totalQuestion);
                        $('.wrongQuestion').text(wrongQuestion);
                        if (totalQuestion == 6) {
                            final()
                        }else{
                            $('.totalQuestion').text(totalQuestion);

                        }
                    }
                }
            }
        });
    }
}

