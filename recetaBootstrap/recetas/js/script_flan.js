var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
        $('.ingredientList').html("<br> <ol><li>Mezclamos los huevos con el azúcar, removiendo con suavidad y sin batir. Incorporamos la leche y removemos suavemente hasta que el azúcar se haya disuelto. Pasamos la mezcla por un colador fino. </li> <li> Cubrimos la base de las flaneras con una fina capa de caramelo líquido. Las rellenamos con la mezcla, con cuidado y lentamente para no incorporar aire, y las colocamos en una fuente de horno. Llenamos la fuente con un dedo de agua y la introducimos en el horno, precalentado con calor arriba y abajo, a 180 ºC.</li><li>Cocemos durante 25-30 minutos o hasta que, al introducir una aguja en el flan, esta salga seca.</li></ol>") ;
        $('h3').html("Cómo hacer")
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }