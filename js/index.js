let menu = document.querySelector('.fa-bars');
let links = document.querySelector('.links');

menu.onclick = () =>{
     menu.classList.toggle('fa-times');
     links.classList.toggle('active');
}

links.onclick = () =>{
     menu.classList.remove('fa-times');
     links.classList.remove('active');
}