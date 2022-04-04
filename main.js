// create an if statement to check if a number is positive or negative
const values = -10;
if (values >= 0) {
  console.log('positive')
} else {
  console.log('negative')
}

// use an if statement to determine the greatest of three numbers
const number1 = 3;
const number2 = 7;
const number3 = 11;
if (number1 >= number2 && number1 >= number3) {
  console.log('number1 is the greatest number')
} else if (number2 >= number1 && number2 >= number3) {
  console.log('number2 is the greatest number')
} else {
  console.log('number3 is the greatest number')  
}

// create a "Days until the weekend" switch case. Given a day, e.g. "Tuesday", log "Only 3 more days until the weekend". If the day isn't recognised, use a default to show "Sorry we didn't recognise that day"
const day = "Tuesday";
switch (day) {
  case "Tuesday" :
    console.log('Only 3 more days until the weekend');
    break;
  default:
    console.log("Sorry we didn't recognise that day")  
} 

// create a switch case for vegetable prices at a supermarket. It should have potatoes & carrots as the same price per kg, but brocolli, cabbage & asparagus as different prices
const vegetable = "Carrot" ;
switch (vegetable) {
  case "Carrot" :
  case "Potatoe" :
    console.log('2.99€/kg');
    break;
  case "Brocolli" :
    console.log('3.99€/kg');
    break;
  case "Cabbage" :
    console.log('3.49€/kg');
    break;
  case "Asparagus" :
    console.log('4.99€/kg');
    break;
  default:
    console.log('Sold-out');
}