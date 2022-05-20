var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
        $('.ingredientList').html("<br> <ol><li>Deja el pimiento choricero en agua templada durante 20 minutos. Quita la carne con un cuchillo, tritura y reserva.</li><li>Pica la cebolla y el pimiento verde. Rehógalos en una cazuela con aceite. Trocea y agrega el chorizo a la cazuela con un poco de sal. Echa el pimiento choricero. Pela y trocea las patatas (que hagan clac) y échalas a la cazuela.</li><li>Machaca el laurel, el ajo y el azafrán en el mortero y añádelos a la cazuela</li><li>Cubre todo con agua y sal. Deja cocer a fuego lento durante 25 minutos. Sírvelo en una fuente.</li></ol>");
        $('h3').html("Cómo hacer")
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }