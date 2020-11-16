// set up a function 
// how does the the first line code work 
// think of cutPizzaSlices as the parent 



function cutPizzaSlices(slices){

    return function dividePizza(divide){
       
        return console.log( slices/ divide);
    }
   
}
var divide = cutPizzaSlices(8);
divide(3)
divide(2)
