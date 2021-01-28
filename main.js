window.onload = () => {
    document.querySelector('.card').classList.add(generateRandomSuit());
    document.querySelector('.card').innerHTML = (generateRandomNumber());
}

let generateRandomNumber = () => {
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" ];
    let indexN = Math.floor(Math.random() * number.length);
    return number[indexN];
};

let generateRandomSuit = () => {
    let suit = ["hearts", "clubs", "diams", "shape"];
    let indexS = Math.floor(Math.random() * suit.length);

    return suit[indexS];
};