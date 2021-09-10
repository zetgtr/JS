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
//     if (b != 0){
//         return a / b;
//     }
//     return 0;
// }

// дз - 6

// a = +prompt('Ведите число х')
// b = +prompt('Введите число b')
// operation = prompt("Введите знак + , - , * , /")

//  function mathOperation(a, b, operation){
//     switch (operation) {
//         case "+":
//             alert(sum(a,b))
//         break;
//         case '-':
//             alert(difference(a,b))
//         break;
//         case '*':
//             alert(work(a,b))
//         break;
//         case '/':
//             alert(factor(a,b))
//         break;
//         default:
//             alert('Введен неверный знак!')
//     }
// }
// mathOperation(a, b, operation)

// дз - 7 


// if (null > 0) {
//     alert("да больше") // false
// }
// if (null < 0) {
//     alert("да меньше") // false
// }
// if (null == 0) {
//     alert("да ровно") // false
// }
// if (null >= 0) {
//     alert("да больше либо ровно") // true
// }
// if (null <= 0) {
//     alert("да меньше либо ровно") // true
// }
// if (null != 0){
//     alert("да не 0") // true
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
