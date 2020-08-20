// 2.4. Creusons-nous la tête

// 2.4.1. Code la vie
//        ===========

// Les exemples de référence :
const arn_1 = "CCGUCGUUGCGCUACAGC";
const arn_2 = "CCUCGCCGGUACUUCUCG";
// La séquence aléatoire montre le côté incomplet de l'application ;o) 
const arn_3 = "CUGAGCCUAGGUUACAGC";

// string "UUACGCAGUAGA"
// donne "Leucine-Arginine-Sérine-Arginine"

// Je vais coder une fonction qui a comme argument un morceau de séquence ARN (suite de nucléotides) = chaine de caractères de 3*n lettres
// Je vais faire une découpe en codons (groupes de 3 lettres)
// Je vais substituer chaque codon (groupe de 3 lettres) à un acide aminé selon la règle si dessous :
// // Les correspondances :
// Sérine        = UCU ou UCC ou UCA ou UCG ou AGU ou AGC   
// Proline       = CCU ou CCC ou CCA ou CCG
// Leucine       = UUA ou UUG 
// Phénylalanine = UUU ou UUC
// Arginine      = CGU ou CGC ou CGA ou CGG ou AGA ou AGG
// Tyrosine      = UAU ou UAC

// Et enfin je vais l'imprimer à l'écran (je choisis de faire un return de la chaine de caractère résultat avant impression)


function codonsToAA(codon) {
  switch(codon) {
    case 'UCU':
    case 'UCC':
    case 'UCA':
    case 'UCG':
    case 'AGU':
    case 'AGC':
      return "Sérine";
      break;
    case 'CCU':
    case 'CCC':
    case 'CCA':
    case 'CCG':
      return "Proline";
      break;
    case 'UUA':
    case 'UUG':
      return  "Leucine";
      break;
    case 'UUU':
    case 'UUC':
      return "Phénylalanine";
      break;
    case 'CGU':
    case 'CGC':
    case 'CGA':
    case 'CGG':
    case 'AGA':
    case 'AGG':
      return "Arginine";
      break;
    case 'UAU':
    case 'UAC':
      return "Tyrosine";
      break;
    default: /* Ne devrait pas arriver */
      return "Erreur"
      break;
  }
}

function arnToAcidesAmines(anrSequence){

  if (anrSequence.length % 3 !== 0 ) {
    return "Séquence incomplète";
  }

  // Pour simplifier le pas à pas, je vais faire un tableau qui contient les séquences de 3 lettres
  // Découpage des codons dans un tableau ---
  codons = [];

  for (let i = 0; i < anrSequence.length/3; i++){
    codons.push(anrSequence.slice(i*3,i*3+3));
  }

  // Remplissage d'un tableau des acides aminés qui correspondent aux codons.
  acidesAmines = [];

  codons.forEach(codon =>{
    acidesAmines.push(codonsToAA(codon));
  });

  // Création de la chaine de caractère finale avec "-" comme séparateur
  return acidesAmines.join("-");
}

// Voici la conversion des deux séquences de test
console.log(`Le morceau d'ARN ${arn_1} se transforme en ${arnToAcidesAmines(arn_1)}`);

console.log(`Le morceau d'ARN ${arn_2} se transforme en ${arnToAcidesAmines(arn_2)}`);

console.log(`Le morceau aléatoire d'ARN ${arn_3} se transforme en ${arnToAcidesAmines(arn_3)}. Notre programme manque d'informations`);
