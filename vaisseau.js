//
// VAISSEAU SPATIAL
// ----------------------------------------- //
// EQUIPAGE VAISSEAU
function Equipage(){

    // EQUIPAGE VAISSEAU
    let tableauEquipage = [

        { nom: "- Onizuka", role: "Commandant", niveau: "Niveau 50", genre: "Homme", age: "45 ans", poid: "58kg", regime: "Oui" },
        { nom: "- Chichi", role: "Ingénieur", niveau: "Niveau 25", genre: "Femme", age: "32 ans", poid: "50kg", regime: "Nom" },
        { nom: "- Vegeta", role: "Médecin", niveau: "Niveau 35", genre: "Homme", age: "36 ans", poid: "65kg", regime: "Nom" },
        { nom: "- Boubou", role: "Pilote", niveau: "Niveau 40", genre: "Inconnu", age: "5 ans", poid: "200kg", regime: "Oui" }

    ];
    // Alerte Equipage 
    alert(
        "Votre équipage :" + "\n" +
        tableauEquipage[0].nom + " " + tableauEquipage[0].role + " " + tableauEquipage[0].niveau + "\n" + 
        tableauEquipage[1].nom + " " + tableauEquipage[1].role + " " + tableauEquipage[0].niveau + "\n" +
        tableauEquipage[2].nom + " " + tableauEquipage[2].role + " " + tableauEquipage[0].niveau + "\n" +
        tableauEquipage[3].nom + " " + tableauEquipage[3].role + " " + tableauEquipage[0].niveau + "\n" 
    ); 
    //
    // Question Equipage statut
    let EquipageRole = prompt("Disposez-vous d'un commandant et d'un pilote dans votre équipe ? Ecrit: 'oui ou non'.");
    // CONDITION
    if(EquipageRole === "oui"){
        alert("Oui, tu disposes d'un commandant !");
        return true
    }
    alert("Toujours pas de commandant à bord pour le vaisseau !");
    return false
}
// ----------------------------------------- //
        // RESSOURCES VAISSEAU //
function Ressources(){

    // RESSOURCES
    let NosRessources = [
        { item: "oxygene", niveau: "75"+  "%" },
        { item: "carburant", niveau: "100"+  "%" },
    ]
    // ALERTE
    alert(
        "Vos ressources :" + "\n" +
        NosRessources[0].item + " " + NosRessources[0].niveau + "\n" +
        NosRessources[1].item + " " + NosRessources[1].niveau
    );
    //
    // Question Equipage statut
    let EquipageRole = prompt("Disposez-vous d'assez d'oxygène ? Ecrit: 'oui ou non'.");
    // CONDITION 
    if(EquipageRole === "oui"){
        alert("Oui, vous avez assez d'oxygène !");
        return true;
    }
    alert("Pas assez d'oxygène pour continuer !");
    return false;
};
//
// ----------------------------------------- //
            // LANCEMENT //
function Decollage(){

    //EQUIPAGE
    if(!Equipage()){
        alert("Les conditions ne sont pas remplies pour ton équipage !");
        alert("Fin de partie");
        return
    } 
    //
    if(!Ressources()){
        alert("Certaines de tes ressources sont très faibles pour ton voyage !");
        alert("Fin de partie");
        return
    } 
    // Compte à rebours jusqu'à 10
    for(let i = 0; i < 10; i++){
        console.log(i);
    };
    // AFFICHAGE DECOLLAGE
    console.log("Decollage du vaisseau !");
    alert("Decollage du vaisseau !");
    console.log("Lancement terminé !");
    alert("Lancement terminé ! Bon voyage !");
};
//
Decollage();
// ----------------------------------------- //