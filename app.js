const africa = ['Zebras', 'Liūtas',  '', 'Raganosis', '','Raganosis', 'Begemotas'];
const australia = ['Kengūra', 'Ančiasnapis', 'Dingo', 'Atsirado', 'Strutis'];

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const randomDigit = rand(1, 6);
    btn.push(randomDigit);
});

console.log(btn)


const arr1 = [];
for (let i = 0; i < 10; i++) {
    const randomDigit = rand(1, 10);
    arr1.push(randomDigit);
}
console.log(arr1);


let sum = 0;
for (let i = 0; i < 10; i++) {
    const randomDigit = rand(1, 10);
    sum = sum + randomDigit;
}
    console.log(sum);


