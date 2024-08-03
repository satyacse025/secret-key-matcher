let inputDigit = "";
function digitClick(inputKey) {
    let ptext = document.getElementById("pin-text-button");
    if (inputDigit.length < 6) {
        inputDigit = inputDigit + inputKey;
        ptext.innerText = inputDigit;
        ptext.style.fontSize = "22px";
    }
}
document.getElementById("div-1").addEventListener('click', function () {
    digitClick("1");

});
document.getElementById("div-2").addEventListener('click', function () {
    digitClick("2");

});
document.getElementById("div-3").addEventListener('click', function () {
    digitClick("3");

});
document.getElementById("div-4").addEventListener('click', function () {
    digitClick("4");

});
document.getElementById("div-5").addEventListener('click', function () {
    digitClick("5");

});
document.getElementById("div-6").addEventListener('click', function () {
    digitClick("6");

});
document.getElementById("div-7").addEventListener('click', function () {
    digitClick("7");

});
document.getElementById("div-8").addEventListener('click', function () {
    digitClick("8");

});
document.getElementById("div-9").addEventListener('click', function () {
    digitClick("9");

});
document.getElementById("div-0").addEventListener('click', function () {
    digitClick("0");

});


document.getElementById("div-X").addEventListener('click', function () {
    let ptext = document.getElementById("pin-text-button");
    inputDigit = inputDigit.slice(0, -1);
    ptext.innerText = inputDigit;
    ptext.style.fontSize = "22px";
});
document.getElementById("div-clear").addEventListener('click', function () {
    let ptext = document.getElementById("pin-text-button");
    inputDigit = "";
    ptext.innerText = inputDigit;
    ptext.style.fontSize = "22px";
    document.getElementById("submit-text").style.display = 'none';
});
document.getElementById("div-submit").addEventListener('click', function () {
    let ptext = document.getElementById("submit-text");
    let generatedText = document.getElementById("secret-text-button");
    let inputText = document.getElementById("pin-text-button");
    let txtg = generatedText.textContent || generatedText.innerText;
    let txti = inputText.textContent || inputText.innerText;;

    let messageText = "";
    if (txtg === txti) {
        ptext.style.display = 'block';
        messageText = "✔️ You Secret Key is Matched!";
    }
    else {
        ptext.style.display = 'block';
        messageText = "❌ You Secret Key is Not Matched!";
    }

    ptext.innerText = messageText;
    ptext.style.fontSize = "22px";
});
document.getElementById("generate-button").addEventListener('click', function () {
    randomNumberGenerator();

});
function randomNumberGenerator() {
    let minm = 100000;
    let maxm = 999999;
    let secrettext = document.getElementById("secret-text-button");
    secrettext.innerText = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
} 