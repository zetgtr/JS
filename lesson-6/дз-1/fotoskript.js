var links = document.querySelectorAll("img");
console.log(links)
function f(){
    alert("ошибка")
}
for(var i = 0; i < 3; i++){
    links[i].onclick = function(e){
        document.getElementById("big").src= "img/i" + e.target.id[1] + '.jpg';   
    }
}
