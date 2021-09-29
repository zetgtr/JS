// дз - 1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 - 1+1=2
// d = b++; alert(d);           // 1 - 1-вывод+1
// c = (2+ ++a); alert(c);      // 5 - (2 + 1 + 2(во 2ой строке а=2))
// d = (2+ b++); alert(d);      // 4 - (2 + 2(в 3 строке b=2))-вывод + 1
// alert(a);                    // 3 - а=1,во 2 строке а=2, в 4 стоке а=3 вывод - а=3
// alert(b);                    // 3 - b=1,в 3 строке b=2, в 5 стоке b=3 вывод - b=3

// дз - 2

// var a = 2;
// var x = 1 + (a *= 2); // x = 5

// дз - 3

// a = parseInt(Math.random () * 20 + -9);
// b = parseInt(Math.random () * 20 + -9);

// if (a < 0 && b < 0) {
//     c = a * b;
//     }

// if (a >= 0 && b >= 0){
//         c = a - b
//     }

// if (a >= 0 && b <= 0 || b >= 0 && a <= 0){
//     c = a + b
// }

// console.log(a)
// console.log(b)
// alert(c)

// дз - 4

// a = parseInt(Math.random () * 16 + 0)
// switch (a){
//     case 1 :
//         console.log(a++);
   
//     case 2 :
//         console.log(a++);
    
//     case 3 :
//         console.log(a++);
    
//     case 4 :
//         console.log(a++);
    
//     case 5 :
//         console.log(a++);
    
//     case 6 :
//         console.log(a++);
    
//     case 7 :
//         console.log(a++);
    
//     case 8 :
//         console.log(a++);
    
//     case 9 :
//         console.log(a++);
    
//     case 10 :
//         console.log(a++);
    
//     case 11 :
//         console.log(a++);
    
//     case 12 :
//         console.log(a++);
    
//     case 13 :
//         console.log(a++);
    
//     case 14 :
//         console.log(a++);
//     break;
// }

// дз - 4 - рекурсия

// function ShowNumber(a){
//     if (a == 16){
//         return 16;
//     }
//     console.log(a)
//     ShowNumber (a + 1)
// }
// ShowNumber(parseInt(Math.random () * 16 + 0))

// дз - 5

// function sum(a,b){
//     return a + b;
// }
// function difference(a,b){
//     return a - b;
// }
// function work(a,b){
//     return a * b;
// }
// function factor(a,b){
//     return a / b;
// }

// дз - 6

// function mathOperation(arg1, arg2, operation){
//     if (operation == '+'){
//         return sum
//     }
//     if (operation == '-'){
//         return difference
//     }
//     if (operation == '*'){
//         return work
//     }
//     if (operation == '/'){
//         return factor
//     }
//     switch(operation){
//         case sum:
//             return arg1 + arg2;
//         break;
//         case difference:
//             return arg1 - arg2;
//         break;
//         case work:
//             return arg1 * arg2;
//         break;
//         case factor:
//             return arg1 / arg2;
//         break;
//    }
// }

// дз - 7 


// if (null > 0) {
//     alert("да больше")
// }
// if (null < 0) {
//     alert("да меньше")
// }

// if (null == 0) {
//     alert("да ровно")
// }
// null означает, что переменная содержит ссылку на пространство в памяти, которое не содержит объекта.

// 0 -это числовой тип данных со значением 0.

// дз - 8 

// function power(val, pow){
//     if (pow == 0){
//         return val;
//     }
//     if (pow == 1){
//         return val;
//     }
//     if (pow != 1){
//         return val*power(val, pow-1)
//     }
// }