const pressed = [];
const secretCode = 'zob';

window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.lenght);

    if(pressed.join('').includes(secretCode)) {
        console.log('DING DING!');
        cornify_add();
    }
})