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
    checkQuestion($(this), "https://okdiario.com/img/2018/08/06/carabelas-cristobal-colon-655x368.jpg", "Descubierta por Cristobal Colón casi sin querer, ya que quería acortar su viaje dando la vuelta al mundo para llegar a la India así demostrando que la tierra es esférica y se encontró con un nuevo continente");
    $('.question').text('¿Quién inventó la bombilla?')
    $(".p1").prop("onclick", null).off("click");
    $('.respuestas').children().removeClass('p1')
    $('.respuestas').children().addClass('p2')
    $(".p2")[0].innerText = "A. Thomas Alva Edison"
    $(".p2")[1].innerText = "B. Thomas Edison Alva"
    $(".p2")[2].innerText = "C. Alva Thomas Edison"
    $(".p2")[3].innerText = "D. Edison Alva Thomas"
    $('.rA').addClass('correcta')
    p2()
});
function p2(){
    $(".p2").on( "click", function() {

        checkQuestion($(this), "https://rinconeducativo.org/sites/default/files/edison_thomas_alva_0.jpg", "El 27 de enero de 1880, hace hoy justo 135 años, Edison obtenía la patente número 285.898, una bombilla incandescente con filamento de carbono y el vacío en su interior. Con sus 40 horas de duración, fue la primera bombilla comercialmente viable");
        $('.question').text('¿Cuántos continentes hay?')
        $(".p2").prop("onclick", null).off("click");
        $('.respuestas').children().removeClass('p2')
        $('.respuestas').children().addClass('p3')
        $(".p3")[0].innerText = "A. 5"
        $(".p3")[1].innerText = "B. 4"
        $(".p3")[2].innerText = "C. 6"
        $(".p3")[3].innerText = "D. 7"
        $('.rA').removeClass('correcta')
        $('.rD').addClass('correcta')
        p3()
    });
}

function p3(){
    $(".p3").on( "click", function() {

        checkQuestion($(this), "https://www.lavanguardia.com/files/image_449_220/uploads/2019/03/03/5fa521913e414.png","Hay 7 ya que se considera a América como dos, América del Norte y del Sur, además de Europa, Asia, África, Oceanía y la Antártida");
        $('.question').text('¿De quién es la alegoría mito de la Carvena ?')
        $(".p3").prop("onclick", null).off("click");
        $('.respuestas').children().removeClass('p3')
        $('.respuestas').children().addClass('p4')
        $(".p4")[0].innerText = "A. Karl Marx"
        $(".p4")[1].innerText = "B. Platón"
        $(".p4")[2].innerText = "C. Sócrates"
        $(".p4")[3].innerText = "D. Cristiano Ronaldo"
        $('.rD').removeClass('correcta')
        $('.rB').addClass('correcta')
        p4()
    });
}

function p4(){
    $(".p4").on( "click", function() {
        checkQuestion($(this), "https://pymstatic.com/4880/conversions/mito-caverna-platon-wide.jpg", "En el mito de la caverna, el prisionero que asciende al mundo exterior, pasa de la oscuridad a la luz, de la ignorancia al conocimiento. Los prisioneros que permanecen dentro son una metáfora de la condición de las personas en la sociedad.");
        $('.question').text('¿Cuánto sabores hay?')
        $(".p4").prop("onclick", null).off("click");
        $('.respuestas').children().removeClass('p4')
        $('.respuestas').children().addClass('p5')
        $(".p5")[0].innerText = "A. 4"
        $(".p5")[1].innerText = "B. 6"
        $(".p5")[2].innerText = "C. 5"
        $(".p5")[3].innerText = "D. 9"
        $('.rB').removeClass('correcta')
        $('.rC').addClass('correcta')
        p5()
        
    });
}

function p5() {
    $(".p5").on( "click", function() {
        checkQuestion($(this), "https://www.muyjapones.com/wp-content/uploads/2020/02/Umami-el-quinto-sabor.jpg", "Conocemos cinco sabores: dulce, salado, amargo, ácido, y umami, este último se describe como \"ensencia de la delicia\" en japonés, se puede encontrar en champión, tomates o carne curada.");

    })
    
}

function checkpoints(){
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
                            checkpoints()
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
                            checkpoints()
                        }else{
                            $('.totalQuestion').text(totalQuestion);

                        }
                    }
                }
            }
        });
    }
}

