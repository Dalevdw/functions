function TotalCost(x,y) {
     x = parseInt(document.getElementById("no_oficecream").value);
     y = parseFloat(document.getElementById("cost").value);
     var answer=document.getElementById("result");
     answer.value= x * y;
     //alert("The total cost is: " + answer);  
}