//const email = "ognavi@gmail.com"; //constante
//var email = "ognavi@gmail.com";
let email = "ognavi@gmail.com"; //variável local

console.log(email);
console.log("O seu e-mail é: " + email);
console.log(`O seu e-mail é:  ${email}`); //procurar utilizar template string

document.getElementById("btn-submit").addEventListener('click', e => {

  console.log('O botão foi clicado!');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

  console.log('O mouse está sobre o formulário.');

});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

  console.log('O mouse está fora do formulário.');

});

document.querySelector('#form-login').addEventListener('submit', e => {

  e.preventDefault();

  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  //JSON - é um objeto
  let json = {
    email,
    password
  };

  /*
  console.log(json);
  let stringJSON = JSON.stringify(json);
  console.log(stringJSON);
  let jsonParse = JSON.parse(stringJSON);
  console.log(jsonParse);
  */

  if (!json.email) {

    console.error('O campo e-mail deve ser preenchido!');

  } else if (!json.password) {

    console.error('O campo password deve ser preenchido!');

  } else {

    console.info("Dados validados com sucesso!");

  }

});