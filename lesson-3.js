// дз - 1

var num = 100;

nextNamber:
for (var i = 2; i <= num; i++) { 
  for (var namber = 2; namber < i; namber++) { 
    if (i % namber == 0) 
    continue nextNamber; 
  }
  console.log( i ); 
}

//дз - 2 - 3

// var goods = [
//     {
//     tatle: "Товар № 1",
//     price: 100,
//     caunt: 2,
//     },
//     {
//     tatle: "Товар № 2",
//     price: 500,
//     caunt: 6,
//     },
//     {
//     tatle: "Товар № 3",
//     price: 700,
//     caunt: 3,
//     },
//     {
//     tatle: "Товар № 4",
//     price: 200,
//     caunt: 3,
//     },
//     {
//     tatle: "Товар № 5",
//     price: 500,
//     caunt: 7,
// },]
// var s = 0
// for (var item of goods){
//     s += item.price*item.caunt
// }
// console.log ("Все товары стоят " + s)

// // дз - 4 

// for (i = 0; i < 10; console.log(i++)) {
// }

// дз - 5

// for (i = 0; i < 21; i++){
//     for (x = 0; x < i; x++){
//     console.log('x')
//     }
//     console.log('\n')
// }