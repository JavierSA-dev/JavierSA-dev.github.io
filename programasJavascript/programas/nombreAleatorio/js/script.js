

var test = "test"

function speakVoice(message){
    
    if (!'speechSynthesis' in window) return alert("Lo siento, tu navegador no soporta esta tecnología");
    speechSynthesis.speak(new SpeechSynthesisUtterance(message.innerHTML))

    console.log(message)
}

async function main(){




    var vid = document.getElementById('tamborVideo');
    
    console.log(vid)
    vid.play();

    document.getElementById('tamborSound').play();

    var myAudio = new Audio('audioTambor.m4a');
    myAudio.play();
    function delay(n){
        return new Promise(function(resolve){
            setTimeout(resolve,n*1000);
    });
    }

    

    var x = 0;
    while(x < 41){
        x = x + 1
        var nombres = ["Alejandro Jiménez Leyva","Álvaro García Fuentes","Antonio Julián Bueno Fuentes","Gontzal García Triviño","Hugo Vicente Peligro","Jose Aguilera Ruiz","José Luis Pérez Lara","José Manuel López Valero","José Miguel Escribano Ruiz","Juan García Toril","María José Cervilla Alcalde","Raúl Pantoja Porras","Virginia Ordoño Bernier"]
    
        var winnerNumber = Math.trunc(Math.random() * ((nombres.length) - 0) + 0);
    
        var message = document.getElementById("winMessage")
    
    
        message.innerHTML = "El ganador es: " + nombres[winnerNumber]
        await delay(0.1);

        
    }
    
    speakVoice(message)

}


