var nutphai=document.querySelector('.nuts b.phai')
var nuttrai=document.querySelector('.nuts b.trai')
var slides=document.querySelectorAll('.slides ul li')
var chisohientai=0;
var soluongslide=slides.length
var trangthai='dungyen'

var chuyenslidenutphai=function () {
    if(trangthai=='chuyendong'){return false}
    trangthai='chuyendong'
    var trangthai2chuyendong=0;
    var phanthuhientai=slides[chisohientai];
    if(chisohientai < soluongslide - 1){
        chisohientai=chisohientai+1;
    }
    else{
        chisohientai=0;
    }
    var phantutieptheo=slides[chisohientai];
    var xulyhientaiend=function () {
        this.classList.remove('dangxem')
        this.classList.remove('bienmatphai')
        trangthai2chuyendong++
        if(trangthai2chuyendong==2){trangthai='dungyen'}
    }
    phanthuhientai.addEventListener('webkitAnimationEnd',xulyhientaiend)
    var xulytieptheoend=function () {
        this.classList.remove('divaophai')
        this.classList.add('dangxem')
        trangthai2chuyendong++
        if(trangthai2chuyendong==2){trangthai='dungyen'}
    }
    phantutieptheo.addEventListener('webkitAnimationEnd',xulytieptheoend)
    phanthuhientai.classList.add("bienmatphai")
    phantutieptheo.classList.add("divaophai")
}
nutphai.addEventListener('click', chuyenslidenutphai)
setInterval(chuyenslidenutphai,4000)

var chuyenslidenuttrai=function () {
    if(trangthai=='chuyendong'){return false}
    trangthai='chuyendong'
    var trangthai2chuyendong=0;
    var phanthuhientai=slides[chisohientai];
    if(chisohientai > 0){
        chisohientai--;
    }
    else{
        chisohientai=soluongslide-1;
    }
    var phantutieptheo=slides[chisohientai];
    var xulyhientaiend=function () {
        this.classList.remove('dangxem')
        this.classList.remove('bienmattrai')
        trangthai2chuyendong++
        if(trangthai2chuyendong==2){trangthai='dungyen'}
    }
    phanthuhientai.addEventListener('webkitAnimationEnd',xulyhientaiend)
    var xulytieptheoend=function () {
        this.classList.remove('divaotrai')
        this.classList.add('dangxem')
        trangthai2chuyendong++
        if(trangthai2chuyendong==2){trangthai='dungyen'}
    }
    phantutieptheo.addEventListener('webkitAnimationEnd',xulytieptheoend)
    phanthuhientai.classList.add("bienmattrai")
    phantutieptheo.classList.add("divaotrai")
}
nuttrai.addEventListener('click', chuyenslidenuttrai)