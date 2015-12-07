var nombre_ordinateur = 0;
var nombre_entier = 0;
var nombre_saisi = document.getElementById('nombre_saisi');
var bouton = document.getElementById('bouton');
var resultat = document.getElementById('resultat');

nombre_ordinateur= Math.round(Math.random()*100);

function controle_nombre() {
    nombre_entier = parseInt(nombre_saisi.value,10); 
    if (nombre_entier <1 || nombre_entier >100) {
        alert("Le nombre doit être compris entre 1 et 100");
    }
}
function calculer() {
    controle_nombre();
    
    if (nombre_entier < nombre_ordinateur) {
        resultat.innerHTML = "Votre nombre est trop petit";
    } else if (nombre_entier > nombre_ordinateur) {
        resultat.innerHTML = "Votre nombre est trop grand";
    } else {
        resultat.innerHTML = "Bravo, vous avez trouvé le nombre : "+ nombre_saisi.value ;
    }
}