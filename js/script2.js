var bouton = document.getElementById('bouton');
var jeu = document.getElementById('jeu'),
    jeuLen = jeu.length;
    
var hasard = 0;
var choix = 0;
var selectionmanu = 0;

/* Sélection par l'operateur dans la liste deroulante */
function selection() {
      for (var i=0 ; i < jeuLen ; i++) { 
          if (i == jeu.selectedIndex) {
              selectionmanu=i;
          } 
      }
}

/* Sélection par l'ordinateur */
function choisir() {
    hasard = Math.random();
    if (hasard < 0.33) {
        choix = 0;
    } else if (hasard <0.67) {
        choix = 1;
    } else {
        choix = 2;
    }
    
    testjeu();
    
}
/* Comparaison des 2 choix */
function testjeu() {
    if (selectionmanu == choix) {
        alert ("Vous avez fait le même choix que l'ordinateur");
    } else {
        alert ("Vous avez fait un choix différent de l'ordinateur");
    }
}
          
