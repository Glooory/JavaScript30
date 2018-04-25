const keyPressed = [];
const secretCode = "music";
const secretCodeLenght = secretCode.length;

window.addEventListener('keyup', (e) => {
    keyPressed.push(e.key);
    keyPressed.splice(-secretCode.length - 1, keyPressed.length - secretCodeLenght);
    if (keyPressed.join('').includes(secretCode)) {
        cornify_add();
    }
});