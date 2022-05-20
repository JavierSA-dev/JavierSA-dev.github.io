var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
        $('.ingredientList').html("<br> <ol> <li> Calentar el aceite en una sartén, sofreír la cebolla picada, añadir el ajo y rehogar 1 minuto </li> <li> Incorporar el tomate triturado y el laurel </li> <li>Cocer a fuego medio-bajo hasta que la salsa reduzca y condimentar con albahaca, orégano, pimienta y sal </li> <li> Cocer la pasta el tiempo indicado para el punto al dente, menos 2 minutos </li> <li>Escurrir la pasta, reservando un poco del agua de cocción, juntar con la salsa de tomate y un chorrito del agua reservada </li> <li> Cocer el conjunto durante los 2 minutos restantes </li> <li> Espolvorear con queso rallado y servir </li> </ol>") ;
        $('h3').html("Cómo hacer")
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }