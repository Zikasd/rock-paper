const computerOptins = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * 3);
    
    return computerOptins[randomIndex];
}



console.log(computerPlay());
