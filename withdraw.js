

document.getElementById('btn-withdraw').addEventListener('click', function(){

   
    const withdrawField = document.getElementById('withdraw-field').value;

    const withdrawFieldNumber = parseFloat(withdrawField);

    

 const  withdrawTotal = document.getElementById('withdraw-total')

     const withdrawTotall =withdrawTotal.innerText

     const withdrawTotalNumner = parseFloat( withdrawTotall);

     const RemWithdraw =  withdrawTotalNumner - withdrawFieldNumber;

     console.log(RemWithdraw)
      withdrawTotal.innerText = RemWithdraw;



      // balance 

      const  BalanceTotal = document.getElementById('balance-total')

      const BalanceTotall =BalanceTotal.innerText
 
      const BalanceTotalNumner = parseFloat(BalanceTotall);


         const  RemBalance  = BalanceTotalNumner -  withdrawFieldNumber;

          
         BalanceTotal.innerText = RemBalance;

})


