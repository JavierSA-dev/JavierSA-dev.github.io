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
    checkQuestion($(this), "https://blog.twitch.tv/assets/uploads/04d5c297db069212b5e162e756fd7081.png","Justin.tv fue un sitio web creado por Justin Kan a principios de 2007, que permitía a cualquier persona transmitir vídeos en vivo. El 5 de agosto del año 2014, el sitio web cierra definitivamente, brindando también la posibilidad a sus usuarios de pago, de poder migrar todo su contenido y sus cuentas de Justin a Twitch.");
    $('.question').text('¿Que streamer tiene el récord de espectadores en un directo?')
    $(".p1").prop("onclick", null).off("click");
    $('.respuestas').children().removeClass('p1')
    $('.respuestas').children().addClass('p2')
    $(".p2")[0].innerText = "A. TheGrefg"
    $(".p2")[1].innerText = "B. Rubius"
    $(".p2")[2].innerText = "C. Ibai"
    $(".p2")[3].innerText = "D. Auronplay"
    $('.rA').addClass('correcta')
    p2()
});
function p2(){
    $(".p2").on( "click", function() {

        checkQuestion($(this), "https://imagenes.elpais.com/resizer/SLc9RhIc95_GIWzAApyRglhGDwY=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/XTRLZPEAPBOYPEAPRCYZLHJTTY.jpg", "Thegrefg superó el evento de la velada de Ibai (1.5M de viewers) con un total de 2.4M al presentar su skin de Fortnite");
        $('.question').text('¿Qué serie de streamers fue la más grande?')
        $(".p2").prop("onclick", null).off("click");
        $('.respuestas').children().removeClass('p2')
        $('.respuestas').children().addClass('p3')
        $(".p3")[0].innerText = "A. 14 días"
        $(".p3")[1].innerText = "B. Arkadia"
        $(".p3")[2].innerText = "C. Egoland (Rust)"
        $(".p3")[3].innerText = "D. Marbella Vice (GTA V)"
        $('.rA').removeClass('correcta')
        $('.rD').addClass('correcta')
        p3()
    });
}

function p3(){
    $(".p3").on( "click", function() {

        checkQuestion($(this), "https://i.blogs.es/799bdf/marbella-vice/1366_2000.jpeg", "La serie de Roleplay de GTA V consiguió reunir a 27 millones de espectadores, entre los streamers con mas media de viewers están: <ul style='list-style: circle;'><li>Ibai(134K)</li><li>Rubius(55K)</li><li>Illojuan(45K)</li></ul> ");
        $('.question').text('¿Cúal fue el nombre de la celebración de los premios para Streamers?')
        $(".p3").prop("onclick", null).off("click");
        $('.respuestas').children().removeClass('p3')
        $('.respuestas').children().addClass('p4')
        $(".p4")[0].innerText = "A. Premios Esrand"
        $(".p4")[1].innerText = "B. Premios Esland"
        $(".p4")[2].innerText = "C. Premios al Mejor Streamer"
        $(".p4")[3].innerText = "D. Premios TheGrefg 😎"
        $('.rD').removeClass('correcta')
        $('.rB').addClass('correcta')
        p4()
    });
}

function p4(){
    $(".p4").on( "click", function() {
        checkQuestion($(this), "https://www.esportmaniacos.com/wp-content/uploads/2022/01/premios-esland-ganadores-780x470.jpg", "Evento creado por TheGrefg para dar premios divididos por categorías, parecido a los Óscars");

        $('.question').text('¿Cúal fue el combate estrella en el combate de la Velada del Año?')
        $(".p4").prop("onclick", null).off("click");
        $('.respuestas').children().removeClass('p4')
        $('.respuestas').children().addClass('p5')
        $(".p5")[0].innerText = "A. Grefg vs Willyrex"
        $(".p5")[1].innerText = "B. Torete vs Future"
        $(".p5")[2].innerText = "C. Jagger VS Viruzz"
        $(".p5")[3].innerText = "D. Elmillor vs Reven"
        $('.rB').removeClass('correcta')
        $('.rC').addClass('correcta')
        p5()
        
    });
}

function p5() {
    $(".p5").on( "click", function() {
        checkQuestion($(this), "https://i.ytimg.com/vi/iHHgVch0-Rs/maxresdefault.jpg", "El torneo fue creado para enfrentar a Elmillor y a Reven por una discusión por Twitter pero gracias al show de Jagger acabó acaparando toda la atención");

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
    console.log(text)
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
                    columnClass: 'medium',
                    btnClass: 'btn-green',
                    action: function () {
                        music.play()
                        totalQuestion++;
                        correctQuestion++;
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
            content: 'Respuesta incorrecta, la respuesta correcta era <br>' + $('.correcta').text(),
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

