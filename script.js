let navbar = document.getElementById('navbar');
let container = document.querySelector('.container');
let btn2 = document.querySelector('#div .btn2');
let btn1 = document.querySelector('#div .btn1');
let index = document.getElementById('index');

let style = getComputedStyle(navbar);
function margin_adjust(){
    container.style.marginTop = style.height;
}
margin_adjust();

btn2.addEventListener('click', function() {
    if (index.style.display == 'none'){
        index.style.display = 'block';
    } else{
        index.style.display = 'none'
    }

    margin_adjust();
})
btn1.addEventListener('click', function() {
     window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    margin_adjust();
})