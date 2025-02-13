function clickMenu(){
    let itens = document.getElementById('itens');
    if(itens.style.display === 'block'){
        itens.style.display = 'none';
    } else{
        itens.style.display = 'block';
    }
}
 
function checkWidth(){
    let itens = document.getElementById('itens');
    if(window.innerWidth >= 768){
        itens.style.display = 'block';
    } else {
        itens.style.display = 'none';
    }
}
 
window.addEventListener('resize', checkWidth);
window.addEventListener('load', checkWidth);
 
 