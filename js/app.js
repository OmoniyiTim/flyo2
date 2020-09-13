// To change the header bg-color
const header = document.querySelector('header');
// On scroll function
window.onscroll=function(){
    var top= window.scrollY;
    if (top >= 100){
        header.classList.add('active');
    }else{
        header.classList.remove('active');
    }
}