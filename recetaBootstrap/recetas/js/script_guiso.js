var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
        $('.ingredientList').html("<ol> <li> Trocear el pimiento, la cebolla y el chorizo </li> <li> Una vez la masa adquiera una textura compacta empezar a formar bolitas de tamaño regular </li> <li>Sofreír el chorizo y reservar </li> <li> Cocinar a fuego bajo el pimiento y la cebolla </li> <li>Añadir el tomate triturado y cocinar 10 minutos más a fuego bajo </li> <li> Incorporar el chorizo y el arroz </li> <li> Añadir el caldo bien caliente, sal y azafrán, y cocer el arroz durante 18 minutos </li> </ol>") ;
        $('h3').html("Cómo hacer")
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }