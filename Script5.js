/*Задание 5.

Дан произвольный массив. Необходимо вывести количество элементов массива,
затем перебрать его и вывести в консоль каждый элемент массива.*/

const myArr = ['mercedes', 2, 4, 6, 10, 'audi', 'bmw']
console.log(myArr.length)
let index;
for (index = 0; index < myArr.length; ++index) {
  console.log(myArr[index])
}

