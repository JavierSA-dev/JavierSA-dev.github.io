var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
        $('.ingredientList').html("<br> <ol><li>Corta el pan en cubos pequeños y ponlo en un recipiente donde quepa cómodamente. Humedécelo con agua (aproximadamente 1 vaso) agrégale una pizca de sal, mezcla bien y mete en el frigorífico un par de horas.</li><li>Pica el chorizo en dados pequeños y fríelo en abundante aceite de oliva. Cuando esté dorado, agrega los dientes de ajo enteros, sin la piel y el pimiento choricero troceado y deja que se doren ligeramente.</li><li>Retira el chorizo del aceite y reserva.</li><li>Una vez listas, retira del fuego y mézclalas con el chorizo y el pimiento choricero</li></ol>");
        $('h3').html("Cómo hacer")
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }