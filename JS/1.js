/* var menutop=document.querySelector('.header-top');
var menu=document.querySelector('.menu');
var nutmenu=document.querySelector('#thanhmenu')
var nutclose=document.querySelector('.hienthi')
var nenden=document.querySelector('.nenden')
var fixlai=document.querySelector('body') */
/* window.addEventListener('scroll',function (){
    if(window.pageYOffset>175){
        menutop.classList.add('active')
        menu.classList.add('active')
    }
    else{
        menutop.classList.remove('active')
        menu.classList.remove('active')
    }
   
}) */
const $=document.querySelector.bind(document)
const $$=document.querySelectorAll.bind(document)
var menutop=$('.header-top');
var menu=$('.menu');
var nutmenu=$('#thanhmenu')
var nutclose=$('.hienthi')
var nenden=$('.nenden')
var fixlai=$('body')
var nuttop=$('.top')
window
window.onscroll=() =>{
    if(window.pageYOffset>175){
        menutop.classList.add('active')
        menu.classList.add('active')
        nuttop.classList.add('active')
    }
    else{
        menutop.classList.remove('active')
        menu.classList.remove('active')
        nuttop.classList.remove('active')
    }
}

nutmenu.onclick=function () {
    menu.classList.add('hien')
    nutclose.classList.add('len')
    nenden.classList.add('active')
    fixlai.classList.add('no-scroll')
}
nutclose.onclick=function () {
    menu.classList.remove('hien')
    nutclose.classList.remove('len')
    nenden.classList.remove('active')
    fixlai.classList.remove('no-scroll')
}
nenden.onclick=() =>{
    menu.classList.remove('hien')
    nutclose.classList.remove('len')
    nenden.classList.remove('active')
    fixlai.classList.remove('no-scroll')
}

var tabs=$$('.spnoibat .tab-item')
var pane=$$('.spnoibat .tabpaner')
var tabactive=$('.spnoibat .tab-item.active')
/* var line=$('.tab .line')
line.style.left=tabactive.offsetLeft + 'px'
line.style.width=tabactive.offsetWidth + 'px' */
tabs.forEach((tab,index) => {
    var panes=pane[index]
    tab.onclick=function () {
        $('.spnoibat .tabpaner.active').classList.remove('active')
        $('.spnoibat .tab-item.active').classList.remove('active')
        /* line.style.left=this.offsetLeft + 'px'
        line.style.width=this.offsetWidth + 'px' */
        this.classList.add('active')
        panes.classList.add('active')
    }
});
var tabs=$$('.view .tab-item')
var pane=$$('.view .tabpaner')
var tabactive=$('.view .tab-item.active')
/* var line=$('.tab .line')
line.style.left=tabactive.offsetLeft + 'px'
line.style.width=tabactive.offsetWidth + 'px' */
tabs.forEach((tab,index) => {
    var panes=pane[index]
    tab.onclick=function () {
        $('.view .tabpaner.active').classList.remove('active')
        $('.view .tab-item.active').classList.remove('active')
        /* line.style.left=this.offsetLeft + 'px'
        line.style.width=this.offsetWidth + 'px' */
        this.classList.add('active')
        panes.classList.add('active')
    }
});

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut();
