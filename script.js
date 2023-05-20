function calculate() {
    var billAmount = document.getElementById("billAmount").value;
    var tipAmount = document.getElementById("tipAmount").value;
    var totalTip = parseFloat(billAmount) + parseFloat(tipAmount);

    document.getElementById("total").innerHTML = "<h3>Total Bill </h3> " + totalTip + " Rupees";
}
