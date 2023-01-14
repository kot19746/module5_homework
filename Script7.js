/*Задание 7.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, 
но и, например, знаки, null и так далее.*/

const arr = [0, 2, 3, 4, 5, null,'abc'] //здесь добавил 0 , так как речь в задании не про null а про нулевой элемент. В задании написано что могут быть прочие элементы такие как null

const numberArray = arr.filter(elem => typeof  elem === 'number' && !isNaN(elem)) // что бы ваш способ сработал нужно было сначала получить только массив чисел этм способом
const otherElements = arr.filter(elem => typeof  elem !== 'number') // Это не обязательно, просто добавил для наглядности что сида попадают прочие элементы и символы

const odd = numberArray.filter(elem => elem % 2 !== 0)
const even = numberArray.filter(elem => elem % 2 === 0)
const zeroElements = numberArray.filter(elem => elem === 0) // Вот так находится нулевой элемент

console.log(zeroElements.length +' нулевых элементов')
console.log(odd.length +' нечётных элемента(ов)')
console.log(even.length +' чётных элемента(ов)')
