// Tu vas coder un script script_7.js qui va fonctionner de la façon suivante :
// pour s'adresser au bot, un fenêtre de prompt va s'ouvrir.
// L'utilisateur pourra y saisir sa phrase et le bot répondra via une impression en console.

// Les règles de conversations du bot sont les suivantes (rangées par priorité -
// si deux règles sont vraies, seule la plus haute dans la liste s'applique) :

// Si on lui pose une question (= la phrase finie par "?"), le bot répond "Ouais Ouais..." ;
// Si on lui hurle trop dessus (= la phrase est 100% en majuscules), le bot répond "Pwa, calme-toi..." ;
// Si la phrase que tu prononces contient le mot "Fortnite", le bot répond "on s' fait une partie soum-soum ?" ;
// Si on lui envoie un message vide, le bot répond "t'es en PLS ?" ;
// Pour tout autre phrase que tu lui envoies, le bot répond "balek." ;

// prompt et console.log

console.log("Tu veux qu'on discute ? Ben vas-y, c'est à toi !");

let answer = "";
while(answer === "") {

  answer = prompt("Dis-moi...");

  
  if (answer.endsWith("?")) { // Se termine pas "?" : On te pose une question !
    console.log("Ouais Ouais...");
    answer = "";
  } else if (answer === answer.toUpperCase()) {  // On te crie dessus !
    console.log("Pwa, calme-toi..");
    answer = "";
  } else if (answer.toLowerCase().includes("fortnite")) {  // On te parle de Fortnite
    console.log("on s' fait une partie soum-soum ?");
    answer = "";
  } else if (answer === "") {
    console.log("t'es en PLS ?");
  } else if (answer === "exit" || answer === "quit") {
    // rien, c'est la sortie, on laisse answer cette fois
  } else {
    console.log("balek.");
    answer = "";
  }

} 
