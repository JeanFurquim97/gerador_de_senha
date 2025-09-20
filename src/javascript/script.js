const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const symbolsCheckbox = document.getElementById("symbols");

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

lengthInput.addEventListener("input", () => {
    lengthValue.textContent = lengthInput.value;
});

function createPassword() {
    let chars = lowerCase;
    if (uppercaseCheckbox.checked) {
        chars += upperCase;
    }
    if (symbolsCheckbox.checked) {
        chars += symbols;
    }

    let password = "";
    for (let i = 0; i < lengthInput.value; i++) {
        password += chars[Math.floor(Math.random() * chars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    navigator.clipboard.writeText(passwordBox.value)
      .then(() => {
        console.log("Senha copiada para a área de transferência!");
      })
      .catch(err => {
        console.error("Falhou ao copiar:", err);
      });
}