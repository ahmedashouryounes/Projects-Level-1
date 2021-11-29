/*--------------------------------------------------*/
var a = document.querySelector('.btn-top')
var n = document.querySelector('.navbar')

window.onscroll = function () {
    if (document.documentElement.scrollTop > 250) {
        a.style.display = "block"
    }
    else a.style.display = "none"
    if (document.documentElement.scrollTop > 600) {
        n.style.position = "sticky"
    }
    else n.style.position = "initial"
}





/*-----------------------------------------------*/
var counters = document.querySelectorAll('.count');

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		const inc = 1;

		if (count < target) {
			counter.innerText = count + inc;
			setTimeout(updateCount, 10);
		} else {
			counter.innerText = target;
		}
	};
	updateCount();
});
/*------------------------------------------------*/
var myForm = document.getElementById('myForm');
var valid = false;

myForm.addEventListener('input', function (el) {
    switch (el.target.id) {
        case 'username': checkName(el.target); break
        case 'email': checkEmail(el.target); break
        case 'password': checkPassword(el.target); break
    }
})

function checkName(inputElement) {
    var inputText = inputElement.value.trim()
    if (inputText.length >= 3) {
        removeError(inputElement);
        return true;
    }
    else {
        showError(inputElement, 'enter at leaset 3 character')
        return false;
    }
}
function checkEmail(emailInput) {
    var emailText = emailInput.value
    var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regEx.test(emailText)) {
        removeError(emailInput)
        return true;
    }
    else {
        showError(emailInput, 'enter valid email')
        return false;
    }
}
function checkPassword(passwordInput) {
    var passText = passwordInput.value
    var strongRegek = new RegExp("^(?=.*[a=z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    console.log(strongRegek.test(passwordInput))
    if (strongRegek.test(passText)) {
        removeError(passwordInput)
        return true;
    }
    else {
        showError(passwordInput, 'lowercase and capitalcase , numbers , special character and be 8 characters')
        return false;
    }
}
function showError(y, msg) {
    y.nextElementSibling.innerText = msg
    y.nextElementSibling.classList.add('text-danger')
    y.nextElementSibling.classList.add('spanError')
}
function removeError(y, msg) {
    y.nextElementSibling.innerText = ""
}

myForm.addEventListener('submit', function(e) {
    
    var inputs = myForm.getElementsByTagName('input');
    var nameElement;
    var emailElement;
    var passwordElement;


    for (var input of inputs) {
        switch (input.id) {
            case 'username': nameElement = input;
                break;
            case 'email': emailElement = input;
                break;
            case 'password': passwordElement = input;
                break;
        }
    }

    if (checkName(nameElement) && checkEmail(emailElement) && checkPassword(passwordElement)) {
        valid = true;
    }

    if (!valid) {
        e.preventDefault();
        alert('Please complete validation');
    }
})
