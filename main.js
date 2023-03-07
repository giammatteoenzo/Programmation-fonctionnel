
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


const Planet = require('./Planet');
const Satellite = require('./Satellite');
//Une fonction d'ordre supérieur est une fonction qui prend en paramètre une autre autre fonction qui peux être un lambda expression
// Voici une réécriture de la fonction Sort, et Map en js

//Pour la fonction d'ordre supérieur nous allons réécrire la fonction MAP de js
Array.prototype.CustomMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

//Autre fonction d'ordre supérieur, la fonction Sort réécrite en js

Array.prototype.CustomSort = function(compareFunction) {
  if (compareFunction === undefined) {
    compareFunction = (a, b) => a - b;
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (compareFunction(this[j], this[i]) < 0) {
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};


// Une fonction pure, est une fonction qui n'as pas d'effet de bord, qui retourne toujours le même résultat pour les mêmes entrèes.
//Voici un exemple de fonction pure: 
function multiplication(a, b) {
  return a * b;
}

//Exemple de fonction idem potent

function Addition(a, b) {
  return a +b;
}

//Autre fonction idem potent (elle re,vpoe la somme des nombre premier inférieur a la valeur en paramètre)

function SumNbPremier(x) {
  let sum = 0;
  for (let i = 2; i < x; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      sum += i;
    }
  }
  return sum;
}

//Fonction qui retourne les x nombre premier en utilisant l'immutabilité:

function getPrimeNumbers(x) {
  let primes = [];
  for (let i = 2; i < x; i++) {
    let isPrime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(i);
    }
  }
  return Object.freeze(primes);
}

//Utilisation de composition de fonction pure:

function AdditionnerEtMultiplier(a, b) {
  return multiplication(a, Addition(a, b));
}

//On fait la même chose maintenant mais avec des fonctions Impures: 

let compteur = 0;

function compteurIncrement() {
  compteur += 1;
  return compteur;
}

function multiplicationParCompteur(x) {
  return x * compteur;
}

function incrementationEtMultiplication(x) {
  return multiplicationParCompteur(compteurIncrement());
}


(() => {

  console.log("Test de la fonction d'ordre supérier CustomMap avec un lambda")
  console.log("tableau initial = ");
  let initialArray = [1, 2, 3, 4];
  console.log(initialArray);

    initialArray.CustomMap(t => (t * 2));

    console.log("Apres map = ");
    console.log(initialArray);


    console.log("Test de la fonction d'ordre supérier CustomSort avec un lambda")
    console.log("tableau initial = ");
    let nonSortedArray = [9,4,7,32,87,654,5];
    let sortedArray = nonSortedArray.CustomSort((a,b) => (b - a));
    console.log("Apres sort");
    console.log(sortedArray);

    console.log("test fonction idem potent qui renvoyer la somme des x nombres premiers");

    console.log(SumNbPremier(1000));

    console.log("on fait pareil avec la liste des x nombre premier");
    console.log(getPrimeNumbers(1000));

  //On utilise la composition de fonction pure additionner puis multiplier avec les entiers 20 et 10: 

  console.log(AdditionnerEtMultiplier(20, 10));

   //On utilise la composition de fonction Impure avec l'entier 10:
   
   console.log(incrementationEtMultiplication(10));


    //Composition Over Inheritence:
    let earth = new Planet("Terre", 12742, 149.6, 2000);
    let moon = new Satellite("Lune", 3476, 384.4, 3000);
    moon.setPlanet(earth);
   console.log("La lune est maintenant rattaché a la terre");

   //On uti

})()

