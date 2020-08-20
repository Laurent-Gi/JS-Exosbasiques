/* 2.2.2 Pyramide de Mario */
/*       ----------------- */
// Utilisateur rentre un nombre (par ex 5)
//     #
//    ##
//   ###
//  ####
// #####

console.log("Salut, bienvenue dans ma super pyramide !");

number = prompt("Combien d'étages veux-tu à ta pyramide ?");

draw_pyramide(number);

// Beaucoup plus simple avec la fonction .repeat !!!!
draw_pyramide2(number);

function draw_pyramide(inputNumber){
  let etage = "";
  let etage_inverse = "";
  for (let indice = 1; indice <= inputNumber; indice++) {
    etage += "#"
    etage_inverse = "";
    for (let i = 1; i <= (inputNumber - indice); i++) {etage_inverse+=" "}
    etage_inverse += etage 
    console.log(etage_inverse);
  }
}

function draw_pyramide2(inputNumber){
  for (let indice = 1; indice <= inputNumber; indice++) {
    console.log(" ".repeat(inputNumber - indice) + "#".repeat(indice));
  }
}