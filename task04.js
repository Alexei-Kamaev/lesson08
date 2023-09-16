'use strict';
{    
    const startYear = +prompt('Введите начало диапазона лет:');
    const finishYear = +prompt('Введите конец диапазона лет:');
    const arrRandom=[];
    function arrYear(n, m) {
        const maxYear = Math.max(n, m);
        const minYear = Math.min(n,m);
        console.log(`Диапазон лет: от ${n} до ${m}`);
        let yearVis;
        for (let i = minYear; i <= maxYear; i++) {
        yearVis = i;
        if (i % 4 == 0) arrRandom.push(yearVis);
        }
    return arrRandom.join(', ');
    }
    console.log('Високосные года в диапазоне: ' + arrYear(startYear, finishYear));
}