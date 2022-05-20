var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
        $('.ingredientList').html("<br> <ol><li>Picamos bien el jamón ibérico para que quede en taquitos muy pequeños.</li><li> Ponemos en la sartén la mantequilla y la harina y en cuanto se funde la primera, removemos y agregamos la mitad del jamón, para que este quede envuelto en esa masa o roux. </li><li>Muy despacio, vamos añadiendo la leche a chorritos, dejando que la masa la vaya absorbiendo antes de añadir . </li><li>De esta manera, nunca nos saldrán grumos, mientras que si añadimos toda la leche de golpe, tendremos que trabajar más removiendo para disolverlos correctamente.</li></ol>");
        $('h3').html("Cómo hacer")
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }