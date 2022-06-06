// Input Income 
let inputIncome = document.getElementById("income-input");
// Expenses Input 
let foodInput = document.getElementById("food-input");
let rentInput = document.getElementById("rent-input");
let clothesInput = document.getElementById("clothes-input");
let totalExpense = document.getElementById("expenses-input");
let totalInputBalance = document.getElementById("balance-input");
// Saving Input 
let savingInput = document.getElementById("saving-input");
let savingInputAmount = document.getElementById("saving-amount");
let remainingInputBalance = document.getElementById("remaining-balance");
// Input Button 
let calculateBtn = document.getElementById("calculate-btn");
let saveBtn = document.getElementById("save-btn");

/*-------------------
   get Value Input 
----------------------*/

function getInputNumbers(inputId) {
  let inputValues = document.getElementById(inputId);
  let inputNumber = parseFloat(inputValues.value);
  return inputNumber;
}

/*--------------------
    Update Banlance  
---------------------*/
calculateBtn.addEventListener("click", function () {
  let incomeInput = getInputNumbers("income-input");
  let inputFood = getInputNumbers("food-input");
  let inputRent = getInputNumbers("rent-input");
  let inputCloths = getInputNumbers("clothes-input");

  let totalInputExpense =
    parseFloat(inputFood) + parseFloat(inputRent) + parseFloat(inputCloths);

  /*   Error Handle */
  if (inputFood < 0 || inputRent < 0 || inputCloths < 0 || incomeInput < 0) {
    return alert(" ❌ Worng Numbers, Please Use A Positive Numbers ✅");
  } else if (incomeInput < totalInputExpense) {
    return alert("❌ Expenses is Biger Than Your Income");
  } else if (
    foodInput.value == "" ||
    rentInput.value == "" ||
    clothesInput.value == "" ||
    inputIncome.value == ""
  ) {
    return alert("❌ Wrong , Please Use Number ✅");
  } else if (isNaN(inputFood) || isNaN(inputRent) || isNaN(inputCloths) || isNaN(incomeInput)){
    return alert("❌ Don't Use String ! Please Use a Numbers");
  } else {
    totalExpense.innerText = totalInputExpense;
  }

  /* Balance  */
  let currentIncome =
    parseFloat(incomeInput) - parseFloat(totalExpense.innerText);
  totalInputBalance.innerText = currentIncome;
});

/*---------------
   Saving Part
-----------------*/
saveBtn.addEventListener("click", function () {
  let inputAmount = getInputNumbers("income-input");
  let inputSaveAmount = getInputNumbers("saving-input");

  let inputAmountParcentages = parseFloat(inputSaveAmount);
  let inputSavingAmount =
    (parseFloat(inputAmount) * inputAmountParcentages) / 100;
  //   Error Handle
  if (isNaN(inputSaveAmount) || inputSaveAmount == "") {
    return alert("❌ Don't Use String ! Please Use a Numbers");
  } else if (inputSaveAmount < 0) {
    return alert("❌ Wrong Numbers, Please Use A Positive Numbers ✅");
  } else if (inputSavingAmount > totalInputBalance.innerText) {
    return alert("❌ Your Saving Amount Biger than Balance Amount");
  } else {
    savingInputAmount.innerText = inputSavingAmount;
  }

  remainingInputBalance.innerText =
    parseFloat(totalInputBalance.innerText) -
    parseFloat(savingInputAmount.innerText);
});
