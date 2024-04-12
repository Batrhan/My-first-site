let n = [1, 4, 6, 2, 8, 3, 9];
let summa = 0;
for ( let i=0; i< n.length; i++){
    summa = summa + n[i];
}
let srednee = summa / n.length;
n.sort((a, b) => a - b);
let seredina=Math.floor(n.length/2)
let mediana = n[seredina]
let max = n[0]
for (let i=1; i< n.length; i++) {
    if (n[i] > max) {
        max = n[i];
    }
}
let min = n[0]
for (let i=1; i< n.length; i++) {
    if (n[i] < min) {
        min = n[i];
    }
}
console.log("Среднее арифметическое:", srednee)
console.log("Медиана:", mediana )
console.log("Макс число:", max)
console.log("Мин число:", min)
