'use strict';
{    
    const countLength = prompt('Введите количество элементов массива:');
    const arrRandom=[];
    function randomNumber(a) {
        for (let i = 0; i < a; i++) {
        arrRandom[i] = Math.ceil(Math.random() * 100);
        console.log(arrRandom[i]);
        }
    return arrRandom;
    }
    //console.log(randomNumber(countLength));
}