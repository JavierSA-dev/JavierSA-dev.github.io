var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
        $('.ingredientList').html("<br> <ol><li>Lo primero es dejar los garbanzos a remojo en abundante agua fría la noche antes, preferiblemente unas 8-12 horas, o algunas más. Yo prefiero lavarlos un poco antes, y procuro usar una variedad local fresca de temporada, de calibre pequeño.</li><li>Picar la cebolleta y dos dientes de ajo. Poner a pochar la primera con un poco de sal en una cazuela con algo de aceite de oliva. </li><li>Añadir el ajo, remover un poco y dejar sofreír unos minutos, vigilando que no se queme</li></ol>") ;
        $('h3').html("Cómo hacer")
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }