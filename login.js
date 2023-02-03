
document.getElementById('btn').addEventListener('click', function(){

    // console.log("login clicked")

    const emailField =document.getElementById('user-email')
    const email= emailField.value;

    const passwordField = document.getElementById('user-pass')
     const password = passwordField.value


     if(email === "mdarfinji45@gmail.com" && password === 'asd'){

        window.location.href = 'bank.html'

     }
     


})