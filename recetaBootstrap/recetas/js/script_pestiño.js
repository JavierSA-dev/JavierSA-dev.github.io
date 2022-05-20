var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
        $('.ingredientList').html("<br><ol><li> Comenzamos aromatizando el aceite para lo cual lo calentamos en una sartén con un trozo de cáscara de limón dentro. Una vez que se ha dorado ésta y el aceite esté bien caliente se retira la cáscara y se añaden los anises. </li> <li> Apagamos el fuego y dejamos que el aceite se enfríe a temperatura ambiente.En un cuenco grande se pone la harina y se mezcla con el aceite ya frío mezclado con el vino blanco. Se amasa mezclando bien hasta obtener una masa fina que se desprenda de las paredes del recipiente, dejando la masa después reposar media hora cubierta con un paño.</li><ol>") ;
        $('h3').html("Cómo hacer")
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }