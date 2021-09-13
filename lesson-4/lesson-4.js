var obj = {}
n = prompt("Введите чсило от 0 - 999")
var num = Number(n)
    if (num < 10 && num >= 0){
        obj.ed = n[0]
    }else{
        if (num < 100){
            obj.des = n[0]
            obj.ed = n[1]
        }else{
            if (num < 1000){
            obj.hunders = n[0]
            obj.des = n[1]
            obj.ed = n[2]
        }else{
        console.log("Ошибка! Вы ввели недопустимое кол-во символов")
    }
    }
    }
console.log(obj) // я решил через if сделать
