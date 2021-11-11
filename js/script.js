var name1 = document.getElementById('username').value;
var password = document.getElementById('password').value;
var modalUsername = document.getElementById('modal-username')
var modalReset = document.getElementById('modal-reset');

function send(){
    if((name1 == '')||(password == '')){
        modalUsername.classList.add("show-modal");
    }else{
        confirm(`voce esta logado como ${name1}`)
    }
}

function forgot(){
    modalReset.classList.add("show-modal");
}

function closeUsername(){
    modalUsername.classList.remove("show-modal");
}

function closeReset(){
    modalReset.classList.remove("show-modal");
}