var name = document.getElementById('username').value;
var password = document.getElementById('password').value;

function send(){
    if((name == '')||(password == '')){
        window.alert('escreva seu nome e sua senha');
    }
}

function forgot(){
    window.prompt('enviaremos uma validação para seu email \ndigite-o:')
}