//Calculate Tip
function calculateTip() {
  let billAmt = document.getElementById("bill").value;
  let serviceQual = document.getElementById("tip").value;
  let numOfPeople = document.getElementById("people").value;

  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Βάλε τιμή");
    return;
  }


  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  //Calculate tip
  let total = ((billAmt * serviceQual) + Number(billAmt))/numOfPeople;

  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tiptxt").innerHTML = total;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function() {
  calculateTip();

};

document.getElementById("koko").onclick = function() {
  calculateTip();

};
