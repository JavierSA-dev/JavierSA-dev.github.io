var inicialText = $('.ingredientList').html()
console.log(inicialText)

function myFunction() {
    if ($('.ingredientList').html() === inicialText) {
        $('.ingredientList').html("<ol> <li> Mezcla la harina con sal y pimienta, bate el huevo en un plato hondo y mezcla en un plato el pan rallado con ajo en polvo y perejil seco </li> <li>Pasa los 4 filetes de pollo por harina, después por huevo batido y por último por pan rallado </li> <li>Pasa los 4 filetes de pollo por harina, después por huevo batido y por último por pan rallado </li> <li>Calienta en una sartén aceite de oliva y fríe las milanesas de pollo a 180 ºC durante un par de minutos por cada lado </li> <li>Retira el exceso de aceite de las milanesas dejándolas reposar sobre papel absorbente </li> <li> Sirve inmediatamente para consumirlas recién hechas </li> </ol>") ;
        $('h3').html("Cómo hacer")
    } else {
        $('.ingredientList').html(inicialText);
        $('h3').html("Ingredientes")

    }
  }