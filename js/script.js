var name = document.getElementById('username').value;
var password = document.getElementById('password').value;
var modalUsername = document.getElementById('modal-username')
var modalReset = document.getElementById('modal-reset');

function send(){
    if((name == '')||(password == '')){
        modalUsername.classList.add("show-modal");
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