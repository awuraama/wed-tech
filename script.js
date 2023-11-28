var para = document.querySelector('p');
para.addEventListener('click',updateName);

function updateName(){
    var name = prompt('enter a new name');
    para.textContent = 'player 1: ' + name;

};