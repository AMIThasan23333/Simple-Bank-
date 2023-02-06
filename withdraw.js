

document.getElementById('btn-withdraw').addEventListener('click', function(){

   
    const withdrawField = document.getElementById('withdraw-field').value;

    const withdrawFieldNumber = parseFloat(withdrawField);

    

 const  withdrawTotal = document.getElementById('withdraw-total')

     const withdrawTotall =withdrawTotal.innerText

     const withdrawTotalNumner = parseFloat( withdrawTotall);

     const RemWithdraw =  withdrawTotalNumner - withdrawFieldNumber;

     console.log(RemWithdraw)
      withdrawTotal.innerText = RemWithdraw;





})