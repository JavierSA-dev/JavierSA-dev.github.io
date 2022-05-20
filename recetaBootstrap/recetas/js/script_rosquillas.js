var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
        $('.ingredientList').html("<br> <ol><li>Mezclar el aceite, el azúcar, los huevos, la ralladura de limón y el anís <li> Añadir la sal, levadura y la mitad de la harina </li><li> Incorporar la otra mitad de la harina y amasar hasta formar una masa </li><li> Formamos las rosquillas y las freímos</li> <li> Dejamos las rosquillas enfriar y les espolvoreamos azúcar glass</li><li> Dejamos las rosquillas enfriar y les espolvoreamos azúcar glass</li></ol>") ;
        $('h3').html("Cómo hacer")
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }