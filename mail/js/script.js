/*const userMail = ["ciao@yahoo.it" , "antonio@yahoo.com" , "alice@gmail.com" , "pietro@gmail.it" , "marco@gmail.com" , "linda@live.it" , "camilla@hotmail.it" , "sandra@libero.it" , "stefano@yahoo.com"]

let searchMail = prompt('Scrivi qui la tua email');

let existing = false;


for (let currentMail = 0; currentMail < userMail.length; currentMail++) {

    if (userMail[currentMail] == searchMail) {

        existing = true;
        break;

    }
}

if (existing == false) {

    console.log('Mi dispiace, non sei ancora loggato');

} else {
    console.log('Fantastico, sei loggato!');
}*/



const Mails = ["ciao@yahoo.it" , "antonio@yahoo.com" , "alice@gmail.com" , "pietro@gmail.it" , "marco@gmail.com" , "linda@live.it" , "camilla@hotmail.it" , "sandra@libero.it" , "stefano@yahoo.com"]

let btnMail = document.querySelector('.btn-mail');

const resultOutput = document.getElementById('result');


btnMail.addEventListener('click' , function() {

    const userMail = document.querySelector('#enter-email').value;

    let existing = false;

    for (let i = 0; i < Mails.length; i++) {

        if (Mails[i] == userMail) {
            existing = true;
            
        }
    }

    if (existing) {
        resultOutput.innerHTML = 'Indirizzo esistente'

    } else {
        resultOutput.innerHTML = 'Indirizzo inesistente'
    }
})


