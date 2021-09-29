var links = document.querySelectorAll(".list")
var textH2 = document.querySelectorAll(".hlist")
var textP = document.querySelectorAll(".textlist")
var cena = document.querySelectorAll('.slogan')
var bay = document.querySelectorAll('.listbuttom')
w = 0
b = 0
m = 0
var d = 0, r = 0, y = 0
function createCart(){
    document.createElement('div')
    
}
for(var i = 0; i < 3; i++){
    links[i].onclick = function(e){
        document.getElementById("big").src= "img/i" + e.target.id[1] + '.png';
        document.getElementById("text-h2").innerText = textH2[e.target.id[1] - 1].innerHTML;
        document.getElementById("text-p").innerText = textP[e.target.id[1] - 1].innerHTML;
        document.getElementById("slogan").innerText = cena[e.target.id[1] - 1].innerHTML;
    }
}
delete cena[1].innerHTML[0]
for(var i = 0; i < 3; i++){
    bay[i].onclick = function(e){
        var height = document.querySelector(".cart")
        height.classList.add('cook')
        var p = Number(cena[e.target.id[1] - 1].innerHTML)
        if(e.target.id[1] == 1){
           w++
          r = p*w
        }
        if(e.target.id[1] == 2){
           b++
          d = p*b
        }
        if(e.target.id[1] == 3){
           m++
           y = p*m
        }
         x = [w,b,m]
        k = r+d+y
        document.getElementById("cena").innerText = 'Цена: ' + k;
        document.getElementById("f"+ e.target.id[1]).innerText = x[e.target.id[1]-1];
        document.getElementById("x"+ e.target.id[1]).innerText = textH2[e.target.id[1] - 1].innerHTML;
    }
}
