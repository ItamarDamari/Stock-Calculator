function divideBy() { 
    num1 = document.getElementById("price").value;
    num2 = document.getElementById("size").value;
    document.getElementById("result").innerHTML = (num2 / num1).toFixed(2);
}