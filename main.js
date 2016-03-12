function updateForm()
{
    var type = document.pizzaForm.pizzaType;
    var toppings = document.pizzaForm.toppings;
    var pizzaTypeValue = 0;
    var toppingsValue = 0;

    for(var i = 0; i < type.length; i++)
    {
        if(type[i].checked)
        {
            pizzaTypeValue += parseFloat(type[i].value);
        }
    }

    for(var i = 0; i < toppings.length; i++)
    {
        if(toppings[i].checked)
        {
            toppingsValue += parseFloat(toppings[i].value);
        }
    }

    //total
    pizzaForm.total.value = pizzaTypeValue + toppingsValue;
}