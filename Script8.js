/* Задание 8.

Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения 
в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.*/

let myMap = new Map()
myMap.set('BMW', 'Черный')
myMap.set('AUDI', 'Белый')
myMap.set('MERCEDES', 'Серый')
for (let x of myMap.keys()) {
  let result = `${'ключ это '}${x}`
  console.table(result)
}
for (let y of myMap.values()) {
  let result = `${'значение это '}${y}`
  console.table(result)
}
