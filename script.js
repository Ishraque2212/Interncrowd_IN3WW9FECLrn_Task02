let logIn = document.getElementById("login");
let signUP = document.getElementById("signUp");
let btn = document.getElementById("btn");
let loginBtn = document.getElementById("loginBtn")

function signup(){
    logIn.style.left = "-400px"
    signUP.style.left = "50px"
    btn.style.left = "110px"
}
function login(){
    logIn.style.left = "50px"
    signUP.style.left = "450px"
    btn.style.left = "0"
}

loginBtn.addEventListener("click", ()=>{
    alert("Login Successful! Enjoy.");
    location.reload(true);
})

signUpBtn.addEventListener("click", ()=>{
    alert("Congratulations! Your account has successfully been created.");
    location.reload(true);
})


