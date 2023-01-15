const container = document.querySelector('.container');
const Generatebtn = document.querySelector('button'); 
const copyBtn = document.querySelector('.copy');

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function colorGenerate() {
    copyBtn.classList.add("show");
    let clr = "#";
    for(var i=0; i<6; i++) {
        clr = clr + arr[randm()];
    }
    document.body.style.background = clr;
    Generatebtn.innerHTML = clr;
}

copyBtn.addEventListener("click", function(){
    let colorValue = Generatebtn.innerText;

    let inputElement = document.createElement('input');
    inputElement.setAttribute('value', colorValue);
    document.body.appendChild(inputElement);

    inputElement.select();
    document.execCommand("copy");
    inputElement.parentNode.removeChild(inputElement);
    alert('Color Copied!');
});

function randm(){
    return Math.floor(Math.random()*arr.length)
}