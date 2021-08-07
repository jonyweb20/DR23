let style = {
    size: [10, 12, 14, 16, 18, 20, 22, 24, 26],
    decor: ['none', 'line-through', `overline`, `underline`],
    weight: ['normal', 'bold', 'bolder', 'lighter'],
    letter: [0.5, 0.9, 1.8, 3]
}
function complete(){
    let sizes = document.getElementById('fz');
    let weights = document.getElementById('sel-3');
    let letters = document.getElementById('sel-4');
    let decoration = document.getElementById('sel-5');
    for (let key in style) {
        if (style[key] === style.size) {
            for (let i = 0; i < style.size.length; i++){
                sizes.appendChild(Option(style.size[i]));}
        }
        if (style[key] === style.decor) {
            for (let j = 0; j < style.decor.length; j++)
                decoration.appendChild(Option(style.decor[j]));
        }
        if (style[key] === style.weight) {
            for (let k = 0; k < style.weight.length; k++)
                weights.appendChild(Option(style.weight[k]));
        }
        if (style[key] === style.letter) {
            for (let y = 0; y < style.letter.length; y++)
                letters.appendChild(Option(style.letter[y]));
        }
    }
}
function textStyle() {
    let sizes = document.getElementById('fz');
    let weights = document.getElementById('sel-3');
    let letters = document.getElementById('sel-4');
    let decoration = document.getElementById('sel-5');
    let outText = document.querySelector('.exampleText').value;
    let color = document.getElementById('col-1').value;
    let out = document.getElementById('outText');
   out.style.fontSize = sizes.options[sizes.selectedIndex].value + 'px'
   out.style.fontWeight = weights.options[weights.selectedIndex].value
   out.style.textDecoration = decoration.options[decoration.selectedIndex].value
   out.style.letterSpacing = letters.options[letters.selectedIndex].value + 'px'
    out.style.color = color;
    out.innerHTML = outText;
}



