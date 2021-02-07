import { Calculator } from "./calc.js"

document.getElementById("reset").addEventListener('click', reset);

let calc = new Calculator();

document.getElementById("calculate").addEventListener('click', function() {
    let input1 = Number(document.getElementById('input1').value);
    let input2 = Number(document.getElementById('input2').value);
    let operation = document.getElementById("operation").value;

    console.log(input1);
    console.log(operation);
    console.log(input2);

    let output = 0;
    if (operation == "+") {
        output = calc.add(input1, input2);
    }
    else if (operation == "-") {
        output = calc.subtract(input1, input2);
    }
    else if (operation == "*") {
        output = calc.multiply(input1, input2);
    }
    else if (operation == "/") {
        output = calc.divide(input1, input2);
    }
    else {
        output = "???";
    }
    document.getElementById("output").innerText = output;
		
});




function reset() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    document.getElementById('output').innerHTML = '0';

}