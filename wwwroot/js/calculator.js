$(document).ready(function () {
    $("#btnCalculate").click(function () {
        const hours = parseFloat($("#hours").val());
        const rate = 50.00;

        // Basic validation
        if (hours > 0) {
            const total = (hours * rate).toFixed(2);
            $("#total").val("$" + total);
        } else {
            alert("Please enter a valid number of hours.");
            $("#hours").focus();
        }
    });
});