const inputRange = document.getElementById("password-length");
const inputValue = document.getElementById("display-password-length");
const btnGeneratorPassword = document.getElementById( "generate-password");

let resultat = "";
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let nombre = "1234567890";
let symbol = "?./§M%¨£µ%°+[|#{~#^@~";

// Méthode variable
let alphabetTaille = alphabet.length;
let alphabetUppercase = alphabet.toUpperCase();

// Le input VALUE récupère la value du input RANGE

inputRange.addEventListener("input", (e) => {
  inputValue.value = e.target.value;
});



//////////////////////
////// FONCTION
//////////////////////

// Generateur mot de passe MINUSCULE

const genPwdMinuscule = (valuePassword) => {
  for (let i = 0; i < valuePassword; i++) {
    resultat += alphabet.charAt(
      Math.floor(Math.random() * alphabetTaille)
    );
  }
  return resultat;
  
};

// Generateur mot de passe MAJUSCULE

const genPwdMajuscule = (taille) => {
  for (let i = 0; i < taille; i++) {
    resultat += alphabetUppercase.charAt(
      Math.floor(Math.random() * alphabetTaille)
    );
  }

  return resultat;
};

// Generateur mot de passe NOMBRE

const genPwdNombre = (taille) => {
  for (let i = 0; i < taille; i++) {
    resultat += nombre.charAt(
      Math.floor(Math.random() * nombre.length)
    );
  }
  return resultat;
};

// Generateur mot de passe SYMBOL

const genPwdSymbols = (taille) => {
  for (let i = 0; i < taille; i++) {
    resultat += symbol.charAt(
      Math.floor(Math.random() * symbol.length)
    );
  }

  return resultat;
};

