let numbers = [1 , 2 , 3 , 4 , 5 ,6];

console.log(numbers);

let pcNumber = document.querySelector('.pc-number');

let userNumber = document.querySelector('.user-number');

let winner = document.querySelector('.the-winner');

for (i = 0; i < numbers.length; i++) {
    let resultPc = Math.round(Math.random() * 5 + 1);
    console.log(pcNumber)
    pcNumber.innerHTML = `Il mio numero è: ${resultPc}`

    let resultUser = Math.round(Math.random()* 5 + 1 );
    console.log(userNumber)
    userNumber.innerHTML =`Marco, il tuo numero è: ${resultUser}`

    if (resultPc > resultUser) {
        winner.innerHTML = 'Ti ho battuto'
    } else if (resultPc == resultUser) {
        winner.innerHTML = 'Siamo pari, riproviamo!!'
    } else {
        winner.innerHTML = 'Marco sei il vincitore'
    }
}