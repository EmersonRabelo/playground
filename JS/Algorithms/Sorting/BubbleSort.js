function bubbleSort(input){
    const len = input.length
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++) {
            if (input[j] > input[j+1]){
                let aux = input[j+1];
                input[j+1] = input[j]
                input[j] = aux;
            }
        }
    }
    return input;
}

let list = [
    826, 289, 487, 352, 684, 937, 541, 193, 609, 405,
    752, 367, 821, 149, 290, 573, 810, 648, 927, 236,
    180, 630, 401, 748, 539, 426, 815, 392, 671, 931,
    584, 379, 142, 736, 598, 219, 854, 907, 163, 729,
    509, 243, 458, 367, 540, 198, 874, 326, 715, 607,
    284, 653, 910, 172, 682, 351, 746, 285, 928, 436,
    694, 372, 519, 846, 193, 670, 153, 278, 945, 769,
    310, 582, 697, 914, 827, 236, 493, 605, 394, 760,
    318, 564, 201, 431, 687, 572, 196, 897, 129, 360,
    491, 649, 850, 384, 217, 798, 295, 523, 863, 697
];

const inicio = performance.now();
bubbleSort(list)
const fim = performance.now();
console.log(`A operação levou ${fim - inicio} milissegundos`);


console.log(list);
