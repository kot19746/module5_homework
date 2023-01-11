/* Задание 6.

Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль.
Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.*/

function verifArr(arr, i = 0) {
  if (arr.length < 2 || i == arr.length-1) {
    return true;
  }
  return typeof arr[i] !== typeof arr[i+1] 
    ? false 
    : verifArr(arr, ++i)
}
console.log(verifArr([10, 15, 20, 25, 30]))
console.log(verifArr([5, 'abc', null, 7, 18]))
