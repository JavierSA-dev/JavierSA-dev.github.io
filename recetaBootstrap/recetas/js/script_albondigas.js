var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
            $('.ingredientList').html("<ol> <li> Juntar los ingredientes para la elaboración de masa de albóndigas en un bol amplio. Con las manos mezclar hasta integrar </li> <li> Una vez la masa adquiera una textura compacta empezar a formar bolitas de tamaño regular </li> <li>Reservar en una fuente según se formen </li> <li> En una cazuela con AOVE cocinar hasta que estén doradas en su exterior. Reservar en papel absorbente </li> <li>Añadir las almendras y tostar. Retirar del fuego </li> <li> Verter el vino blanco y evaporar el alcohol </li>  </ol>");
            $('h3').html("Cómo hacer")
 
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }