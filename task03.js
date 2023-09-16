'use strict';
{    
    const countLength = +prompt('Введите количество элементов массива:');
    const startNumber = +prompt('Введите начало диапазона чисел:');
    const finishNumber = +prompt('Введите конец диапазона чисел:');
    const sortNumber = prompt('Введите опциональный параметр even или odd:').toLowerCase();
    const arrRandom=[];
    function randomNumber(a, n, m, s='') {
        const maxNumber = Math.max(n, m);
        const minNumber = Math.min(n,m);
        let numberRandom, evenOdd;
        console.log(`Диапазон ${a} чисел: от ${n} до ${m}`);
        for (let i = 0; i < a;) {
            numberRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
            evenOdd = numberRandom % 2;
            if (s === '') {
            arrRandom[i] = numberRandom;
            i++;
            } else if (s === 'even' && evenOdd == 0) {
                arrRandom[i] = numberRandom;
                i++;
            } else if (s === 'odd' && evenOdd != 0) {
                arrRandom[i] = numberRandom;
                i++;
            }
        }
    return arrRandom;
    }
    console.log(randomNumber(countLength, startNumber, finishNumber, sortNumber));
}