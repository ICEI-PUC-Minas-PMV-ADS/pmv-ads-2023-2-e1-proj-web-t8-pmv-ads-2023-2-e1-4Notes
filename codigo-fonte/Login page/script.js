document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault(); 

   
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (username.length < 7) {
        alert('O nome de usuário deve ter pelo menos 7 caracteres.');
    } else if (password.length < 7) {
        alert('A senha deve ter pelo menos 7 caracteres.');
    } else {
       
        window.location.href = 'file:///C:/Users/jjulio/Documents/NotePage/home/index.html';
    }
});
