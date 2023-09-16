'use strict';
{    
    const countLength = +prompt('Введите количество элементов массива:');
    const startNumber = +prompt('Введите начало диапазона чисел:');
    const finishNumber = +prompt('Введите конец диапазона чисел:');
    const arrRandom=[];
    function randomNumber(a, n, m) {
        const maxNumber = Math.max(n, m);
        const minNumber = Math.min(n,m);
        console.log(`Диапазон ${a} чисел: от ${n} до ${m}`);
        for (let i = 0; i < a; i++) {
        arrRandom[i] = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        }
    return arrRandom;
    }
    console.log(randomNumber(countLength, startNumber, finishNumber));
}