const register_email = document.querySelector(".register-email");
const register_password = document.querySelector(".register-password");
const register_again_password = document.querySelector(
    ".register-again-password"
);
const form_register_btn = document.querySelector("#form-register-btn");
const text_alert = document.querySelector(".text-art");

function formCheck(e) {
    register_email.value;
    register_password.value;
    register_again_password.value;

    localStorage.setItem("user", JSON.stringify(register_email.value));
    localStorage.setItem("user_parol", register_password.value);

    if (register_password.value === register_again_password.value) {
        text_alert.innerHTML = "";
    } else if (register_password.value != register_again_password.value) {
        text_alert.innerHTML = "password can not be entered !";
        return false;
    } else {
        document.user_parol(localStorage.getItem("user_parol"));
        document.user(localStorage.getItem("user"));
        console
        return true;
    }

}

const PasswordValues = localStorage.getItem('user_parol')
const userValues = localStorage.getItem('user')

function formGet(e) {
    const emailLogin = document.querySelector('.email-login')
    const passwordLogin = document.querySelector('.login-password')

    if (passwordLogin.value === PasswordValues || emailLogin.value === userValues) {
        return true
    } else {
        return false
    }
}