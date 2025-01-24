/********************************************************
 *              DO NOT TOUCH AREA: START                *
 ********************************************************/

function main() {
    const n = parseInt(readln(), 10);
    writeln(oddishOrEvenish(+n));
}

/********************************************************
 *                DO NOT TOUCH AREA: END                *
 ********************************************************/

function oddishOrEvenish(n) {
    return `${n}`.split('').reduce((a, b) => +a + (+b), 0) % 2 === 0 ? 'Evenish' : 'Oddish';
}
