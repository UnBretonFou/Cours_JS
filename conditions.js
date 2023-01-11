// Exemple if - else if - else
var speed = 40;

if (speed < 80) {
    if (speed < 50) {
        console.log("Accelères un petit peu")
    }
    else {
        console.log("Tu roules à la bonne vitesse")
    }
}
else if (speed < 100) {
    console.log("Il faut que tu ralentisses un petit peu");
}
else {
    console.log("Tu roules beaucoup trop vite, c'est dangeureux !");
}

/* ================================================================= */
// Exemple switch - case - default - break
var favoriteColor = "yellow";

switch (favoriteColor) {
    case "yellow" :
    case "blue" :
        console.log("Wouah ! le bleu et le jaune c'est trop beau");
        break;
    case "red" :
        console.log("J'aimerais bien une voiture rouge");
        break;
    
    default :
        console.log("Je ne connais pas ta couleur");

}
