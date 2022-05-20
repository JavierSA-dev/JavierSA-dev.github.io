var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
        $('.ingredientList').html("<br> <ol><li>Coloca la harina, la levadura, los huevos, el azúcar, 2 manzanas (peladas y cortadas en dados) y la leche en el vaso batidor. Tritura hasta que quede una masa homogénea.</li> <li> Vierte la mezcla sobre el molde untado de mantequilla y espolvoreado de harina. Pela las otras 2 manzanas, córtalas en láminas y cubre la superficie de la tarta. </li> <li>Hornéala a 180ºC durante 45 minutos (con el horno precalentado). Deja que se temple un poco, desmolda y con ayuda de un pincel unta la superficie con un poco de mermelada de albaricoque.</li></ol>");
        $('h3').html("Cómo hacer")
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }