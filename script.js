const inputRange = document.getElementById("password-length");
const inputValue = document.getElementById("display-password-length");
const textGenMdp = document.getElementById("password-output");
const btnGeneratorPassword = document.getElementById("generate-password");
const alertEmptyPassword = document.querySelector('.audun_warn');

let resultat = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let alphabetUppercase = alphabet.toUpperCase();
let nombre = "1234567890";
let symbol = "?./§M%¨£µ%°+[|#{~#^@~";

// Le input VALUE récupère la value du input RANGE

inputRange.addEventListener("input", (e) => {
  inputValue.value = e.target.value;
});

function generatePassword() {
  let data = [];
  resultat = 0;
  if (lowercase.checked) {
    data.push(...alphabet);
  }
  if (uppercase.checked) {
    data.push(...alphabetUppercase);
  }
  if (number.checked) {
    data.push(...nombre);
  }
  if (symbols.checked) {
    data.push(...symbol);
  }

  if (data.length >= 1) {

    for (i = 0; i < inputValue.value; i++) {
      resultat += data[Math.floor(Math.random() * data.length)];
    }

    textGenMdp.value = resultat;
    alertEmptyPassword.style.setProperty('display','none')

    textGenMdp.select();
    document.execCommand('copy');
    btnGeneratorPassword.textContent = "Copié !";
    setTimeout(() => {
      btnGeneratorPassword.textContent = "Génerer un mot de passe";
    },1000);


  } else{

    alertEmptyPassword.style.setProperty('display','block')
    textGenMdp.value = "Générateur de mot de passe";
  }
}

btnGeneratorPassword.addEventListener("click", generatePassword);