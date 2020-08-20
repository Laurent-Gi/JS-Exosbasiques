/* 2.2. Opérations & boucles  */
/*      --------------------  */

/* Exercice n°2.2.1 Calculs rapides */

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");

function factorial(inputNumber){
  let outputNumber = 1;

  for (let indice = 1; indice <= inputNumber; indice++) {
        outputNumber = outputNumber*indice;
  }
  return outputNumber;
}

console.log(`Le résultat est : ${factorial(number)}`);

