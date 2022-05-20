var audio = new Audio();
function soundCorrect(){
    audio = new Audio('media/acierto.mp3')
    audio.play()
}


function soundWrong(){
    audio = new Audio('media/error.mp3')
    audio.play()
}

function tictac(){
    audio = new Audio('media/tictac.mp3')
    audio.play()
}

function risa(){
    audio = new Audio('media/risa.mp3')
    audio.play()
}

function pregunta(){
    audio = new Audio('media/pregunta.mp3')
    audio.play()
}

function aplauso(){
    audio = new Audio('media/aplauso.mp3')
    audio.play()
}

function abucheo(){
    audio = new Audio('media/abucheo.mp3')
    audio.play()
}

function stop(){
    audio.pause();
}