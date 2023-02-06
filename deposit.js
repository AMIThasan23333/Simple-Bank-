


document.getElementById('btn-deposit').addEventListener('click',function(){


  const depositField = document.getElementById('deposit-filed');

  const depositAmountString = depositField.value;

 const depositAmountNumber = parseFloat(depositAmountString);


// vvvvvvv

   const depositElement = document.getElementById('deposit-total');

   const depositTotalString = depositElement.innerText;

   const depositTotalNumber = parseFloat(depositTotalString )

   const TotalMoney  =  depositAmountNumber +   depositTotalNumber;

   depositElement.innerText = TotalMoney;

 
  
     const  BalanceTotal = document.getElementById('balance-total')

      const BalanceTotall =BalanceTotal.innerText
 
      const BalanceTotalNumner = parseFloat(BalanceTotall);


         const  TotalBalance  = BalanceTotalNumner + depositAmountNumber;


         BalanceTotal.innerText = TotalBalance;

         

})