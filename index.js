function calTip() {
  var bill = document.getElementById("bill").value;
  var per = document.getElementById("per").value;

  tip = (per / 100) * bill;
  var num = parseFloat(bill) + parseFloat(tip);
    var total = num.toFixed(2);
  if (isNaN(total)) {
    total = 0;
  }
  return total;
}
