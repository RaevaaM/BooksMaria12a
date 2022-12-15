var x = document.getElementById("logIn");
var y = document.getElementById("signUp");
var z = document.getElementById("btn");

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
}



function myFunction() {
    var a = document.getElementById("pass");
    var b = document.getElementById("hide1");
    var c = document.getElementById("hide2");

    if (a.type === 'password') {
        a.type = "text";
        b.style.display = "block";
        c.style.display = "none";
    }
    else {
        a.type = "password";
        b.style.display = "none";
        c.style.display = "block";
    }
}