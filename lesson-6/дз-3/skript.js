var links = document.querySelectorAll("button");
var img = ["img/i1.jpg", "img/i2.jpg", "img/i3.jpg", "img/i4.jpg", "img/i5.jpg", "img/i6.jpg"]
var x = 2
for (i = 0; i < 2; i++){
    links[i].onclick = function(e){
        switch (e.target) {
            case links[0]:
                --x
                if (x == -1){
                    x = 5
                }
            document.getElementById("img").src = img[x]
            break;
            case links[1]: {
                ++x
                if (x == 6){
                    x = 0
                }
            document.getElementById("img").src = img[x]
            }
        }
    }
}
console.log(links)