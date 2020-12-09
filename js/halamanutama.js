let modal_spawn = document.querySelector('button[data-toggle="modal-login"]');
let login_set = document.querySelector('.cover');
let login_card = login_set.querySelector('.cover-container');
let login_ready_button = login_set.querySelector('.cover-container-tombol-login');
let login_verdict = login_set.querySelector('.cover-verdict');

body_page = document.querySelector('.halaman-utama-container');

modal_spawn.addEventListener("click", function() {
    login_set.classList.add('show');
});

login_set.addEventListener('click', function() {
    login_set.classList.remove('show');
});

login_card.addEventListener('click', function(holds) {
    holds.stopPropagation();
});

function myTimer() {
    login_set.classList.remove('show');
    clearInterval(myVar);
}

login_ready_button.addEventListener('click', function(event) {
    let username_input = document.forms['form-login']['username'].value;
    let password_input = document.forms['form-login']['password'].value;
    event.preventDefault();
    if (username_input == "pweb_C" && password_input == "123123") {
        login_verdict.style.backgroundColor = "#c6e686";
        login_verdict.style.borderColor = "#446418";
        login_verdict.classList.add('show');
        login_verdict.innerHTML = "Login berhasil.";
        var myVar = setInterval(function myTimer() {
            login_set.classList.remove('show');
            body_page.style.backgroundColor = "green";
            clearInterval(myVar);
        }, 1500);
    }
    
    else {
        login_verdict.style.backgroundColor = "#FFE3E6";
        login_verdict.style.borderColor = "#ECBCC0";
        login_verdict.classList.add('show');
        login_verdict.innerHTML = "Invalid username or password.";
        body_page.style.backgroundColor = "red";
    }
});



