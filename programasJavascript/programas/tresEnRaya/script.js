$(window).on('load', function () {

    $('td').hover(function () {
        $(this).css("background-color", "lightblue")

    }, function () {
        $(this).css("background-color", "white")
    }
    );
    $('td').click(async function () {



        function delay(n) {
            return new Promise(function (resolve) {
                setTimeout(resolve, n * 1000);
            });
        }


        var valueCell = $(this).children('p')
        function reset() {
            $('.eachX').text(" ")
        }

        var turnGame = $('#playerTurn')[0].innerHTML




        var linea1 = new Array($('.line1'))
        var linea2 = new Array($('.line2'))
        var linea3 = new Array($('.line3'))

        var colum1 = new Array($('.colum1'))
        var colum2 = new Array($('.colum2'))
        var colum3 = new Array($('.colum3'))

        if (turnGame == 1) {
            valueCell.text("X")
            $('#playerTurn')[0].innerHTML = "2"
        }
        else {
            valueCell.text(0)
            $('#playerTurn')[0].innerHTML = "1"
        }

        // Comprobar el empate recorriendo todas las celdas
        for (let x = 0; x < $('.eachX').length; x++) {
            var values = + new Array($('.eachX')[x].outerText)

        }
        /*
        if (isNaN(values)) {
            await delay(0.2)
            $.alert({
                title: 'Empate',
                content: 'Partida terminada en empate',
                buttons: {
                    confirm: function () {
                        $.alert('Confirmed!');
                    },
                    cancel: function () {
                        $.alert('Canceled!');
                    },
                    somethingElse: {
                        text: 'Something else',
                        btnClass: 'btn-blue',
                        keys: ['enter', 'shift'],
                        action: function () {
                            $.alert('Something else?');
                        }
                    }
                });
            reset()
        }*/


        // Lineas
        if ((linea1[0][0].outerText) == "0" && (linea1[0][1].outerText) == "0" && (linea1[0][2].outerText) == "0" || (linea1[0][0].outerText) == "X" && (linea1[0][1].outerText) == "X" && (linea1[0][2].outerText) == "X") {
            await delay(0.2)
            alert("Has ganado")
            reset()


        }
        else if ((linea2[0][0].outerText) == "0" && (linea2[0][1].outerText) == "0" && (linea2[0][2].outerText) == "0" || (linea2[0][0].outerText) == "X" && (linea2[0][1].outerText) == "X" && (linea2[0][2].outerText) == "X") {
            await delay(0.2)
            alert("Has ganado")
            reset()


        }
        else if ((linea3[0][0].outerText) == "0" && (linea3[0][1].outerText) == "0" && (linea3[0][2].outerText) == "0" || (linea3[0][0].outerText) == "X" && (linea3[0][1].outerText) == "X" && (linea3[0][2].outerText) == "X") {
            await delay(0.2)
            alert("Has ganado")
            reset()


        }

        // Columnas

        if ((colum1[0][0].outerText) == "0" && (colum1[0][1].outerText) == "0" && (colum1[0][2].outerText) == "0" || (colum1[0][0].outerText) == "X" && (colum1[0][1].outerText) == "X" && (colum1[0][2].outerText) == "X") {
            await delay(0.2)

            alert("Has ganado")
            reset()


        }
        else if ((colum2[0][0].outerText) == "0" && (colum2[0][1].outerText) == "0" && (colum2[0][2].outerText) == "0" || (colum2[0][0].outerText) == "X" && (colum2[0][1].outerText) == "X" && (colum2[0][2].outerText) == "X") {
            await delay(0.2)
            alert("Has ganado")
            reset()


        }
        else if ((colum3[0][0].outerText) == "0" && (colum3[0][1].outerText) == "0" && (colum3[0][2].outerText) == "0" || (colum3[0][0].outerText) == "X" && (colum3[0][1].outerText) == "X" && (colum3[0][2].outerText) == "X") {
            await delay(0.2)
            alert("Has ganado")
            reset()


        }




    })



})
