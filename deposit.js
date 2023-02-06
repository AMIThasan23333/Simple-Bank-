

document.getElementById('btn-deposit').addEventListener('click', function(){

const depositField =  document.getElementById('deposit filed')

const newdepositAmountString =  depositField.value;

const newdepositAmount = parseFloat(newdepositAmountString)

 const depositTotalElement = document.getElementById('deposit-total');

 const previousdepositTotalString = depositTotalElement.innerText;


 const previousdepositTotal = parseFloat(previousdepositTotalString);

 

   const currentDepositTotal = previousdepositTotal + newdepositAmount;

   
   depositTotalElement.innerText = currentDepositTotal;



   depositField.value = '';


   
})

