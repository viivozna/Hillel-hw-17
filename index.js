const billInput = prompt("Enter the invoice amount: ");
const tipInput = prompt("Enter the percent of tip: ");

if (billInput === null || tipInput === null) {
    alert("Canceled");
} else {
    const bill = Number(billInput);
    const tipPercent = Number(tipInput);

    if (bill <= 0 || tipPercent < 0 || tipPercent > 100 || Number.isNaN(bill) || Number.isNaN(tipPercent) || billInput.trim() === "" || tipInput.trim() === "") {
        alert("Invalid input data")
    } else {
        const tipAmount = (tipPercent * bill) / 100;
        const finalBill = tipAmount + bill;
        alert(`Check sum: ${bill} Tip: ${tipPercent}% Tip amount: ${tipAmount} Total sum to pay: ${finalBill}`);
    }
}
