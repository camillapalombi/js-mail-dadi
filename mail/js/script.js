let userMail = ["ciao@yahoo.it" , "antonio@yahoo.com" , "alice@gmail.com" , "pietro@gmail.it" , "marco@gmail.com" , "linda@live.it" , "camilla@hotmail.it" , "sandra@libero.it" , "stefano@yahoo.com"]

const searchMail = prompt('Scrivi qui la tua email');

let existing = false;

for (let i = 0; i < userMail.length; i++) {

    if (userMail[i] == searchMail) {

        existing = true;

    }
}

console.log(existing)

if (existing == false) {

    console.log('Mi dispiace, non sei loggato');
} else {
    console.log('Fantastico, sei loggato!');
}