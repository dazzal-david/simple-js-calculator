let output = '';
let newNumber = null;

function appendNumber(number) {
    output += number; 
    updateResult();
}

function updateResult() {
    document.getElementById("output").value = output;
}

function resetBtn() {
    output = '';
    updateResult();
}

function equals() {
    output = eval(output);
    updateResult();
}