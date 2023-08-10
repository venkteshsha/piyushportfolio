//circle//
const circle = document.querySelectorAll('.circle');
circle.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i=0;i<dots; i++)
    {
        points += `<div class="points" style="--i:${i}; --rot:
        ${rotate}deg"></div>`; 

    }
    elem.innerHTML =  points;

    const pointsMarked =elem.querySelectorAll('.points');
    for(let i=0;i<percent;i++)
    {
        pointsMarked[i].classList.add('marked')
    }

})

//mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');


//active menu//
let menuLi =document.querySelectorAll('header nav a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = a.length;
    while(-len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
Window.addEventListener("scroll",activeMenu);


const bar = document.getElementById('bar');
const close = document.getElementById('close');  
const nav = document.getElementById('navbar'); 

if (bar) {
    bar.addEventListener('click', () => 
    {
         nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => 
    {
         nav.classList.remove('active')
    })
}

