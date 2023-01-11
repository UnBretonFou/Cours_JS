//  % = modulo : simplement le reste de la division 

var nom = "John";

var x = 12;
var result = ++x; // x++ ne fonctionnera pas car l'ordre de priorité n'est pas bon
x++;// on aurait pu mettre x += 1 MAIS PAS x++ = x = 12 + 1 = 13 ; même chose avec x--

var y = 25.63;

var xString = "12.63";

var mystring = "Hello World";

var string_1 = "Hello";
var string_2 = "World";
var myNewString_2 = string_1 + " " + string_2;



// Remplacer dans un mot par un autre dans une string
var myNewString = mystring.replace("World", "Tim");

// Retrouver la position/index dans une string
var position = mystring.indexOf("World");

// string vers float
var xNumber = parseFloat(xString);

// string vers int
var xNumber = parseInt(xString);

// longueur (lenght) d'une chaine 
var nomLenght = nom.length;

// int ou float vers string
var xToString = x.toString(); 


// Afficher le résultat dans la console Google
console.log(x);