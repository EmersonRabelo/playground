const selectionSort = (input, options = 'ASC') => {
    const len = input.length;

    for (let i = 0; i < len - 1 ; i++){
        let indexAux = i;

        for (let j = i + 1; j < len; j++){
            if (options === 'ASC'){
                if (input[j] < input[indexAux]){
                    indexAux = j; //Dessa forma eu gravo qual foi a possição da array que verifiquei o menor numero.
                }
            } else if (options === 'DESC') {
                if (input[j] > input[indexAux]){
                    indexAux = j;
                }
            }

        }

        let aux = input[indexAux]; //Seleciono na array o valor do indice gravado anteriormente
        input[indexAux] = input[i]; // Insiro o valor comparador na posição do comparado
        input[i] = aux; // Insiro o valor comparado na posição inicial(arr[n])
    }

    return input
}

let letras = [
    'c', 'd', 'b', 'a', 'x', 'z', 'f', 'e', 'w',  
    'h', 'y', 'm', 'n', 'o', 'i', 'j', 'v', 'u', 
    'q', 'r', 'k', 'l', 't', 's', 'g', 'p', 'z'
];

let nomes = [
    'Alice', 'Bob', 'Charlie', 'David', 'Emily', 'Frank', 'George', 'Hannah', 'Ivy',
    'Jack', 'Kate', 'Liam', 'Mia', 'Nathan', 'Olivia', 'Paul', 'Quinn', 'Rachel', 'Sam',
    'Tom', 'Ursula', 'Victor', 'Wendy', 'Xavier', 'Yvonne', 'Zachary'
];

let numbers = [
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
selectionSort(numbers, 'ASC');
const fim = performance.now();
console.log(`A operação levou ${fim - inicio} milissegundos`);

selectionSort(letras, 'ASC');
selectionSort(nomes, 'ASC');

console.log(numbers);
console.log(letras);
console.log(nomes);