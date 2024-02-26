

function cabeza(){
    var canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI *2, true);
        ctx.moveTo(200, 200);
        ctx.stroke();
}
function cuerpo(){
    ctx.beginPath();
    ctx.lineTo(75, 75);
    ctx.moveTo(200, 200);
    ctx.sroke();

}
        






function letras(){
    for (let i = 65; i < 91; i++) {
        let button = document.createElement("button");
        button.classList.add("letters");
        button.innerText = String.fromCharCode(i);}

}

const palabras = ['html', 'mesa']
cabeza();
cuerpo();