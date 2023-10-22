// 1) A l’intérieur d’une page HTML ou on met Java script
// b. <script>

// 2) Quelle est la vraie syntaxe pour changer le contenu de l’élément suivant
//<span id=’ span1’>test</span>
// a. document.getElementById(‘span1’).innerHTML=’salut monde’
// 3) Quelle est l’emplacement de Java Script
// c. Les deux

// 4) Quelle la bonne syntaxe pour faire reference à un script externe script1.js
// c. <script src=’script1.js’>

// 5) Un script externe doit contenir le tag <script>
// b. Nom

// 6) Comment créer une fonction en javascript
// b. function function1()

// 7) Comment écrire la condition if
// c. if(x==7)

// 8) Comment écrire la condition x n’est pas égal à 7
// d. if (x !=7)

// 9) La bonne syntaxe de la boucle while
// b. while (k<=20)

// 10) La bonne syntaxe de for
// c. for(j=0 ;j<=10 ;j++)

// 11) Quelle est syntaxe correcte pour créer un Array
// b. var fruits= [‘pomme’,’orange’,’banane’]

// 12) Quel évènement est déclenché si on clique sur un élément HTML
// a. onmouseclick
// b.onclick
// c.onmouseover
// d.onchange

// 13) Est-ce que javascript est sensible à la casse
// a. oui

// 14) Soit
// d. [7,5,9,10]

// 15) Soit
// d. 7,5,9,10

// 16) Soit
// d. Undefined

// 17) Soit
// c. [6,14,4,10,18,8,20]

// 18) Soit
// b. 40

// 19) soit le code suivant :
// b. hello RAMI salut FAHMI

// 20)soit le code suivant :
// b. affiche des valeurs de 1à 59 puis recommence de 0 à 59 plusieurs fois

// Exercice 1 : Manipulation des classes
class Document {
    constructor (id, dateEdition) {
        this.id = id
        this.dateEdition = dateEdition
    }
}

class Livre extends Document {
    constructor (id, dateEdition, titre, auteur) {
        super(titre, auteur)
        this.title = titre
        this.auteur = auteur
    }
    info() {
        return `livre ${this.id}`
    }
}

let d1 = new Document(1, '10/21/2023')
let l1 = new Livre(1, '10/21/2023', 'Meditation', 'Marcos')

class Book {
    constructor (title, author, description, pages) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = 1;
        this.read = false;
    }
    info() {
        console.log(this.title, this.author, this.description, this.pages, this.currentPage, this.read)
    }
    readBook(page) {
        if (page < 1 || page > this.pages) {
            console.log(0);
        } else if (page >= 1 && page < this.pages) {
            this.currentPage = page;
            console.log('En cours de lecture')
        } else if (page === this.pages) {
            this.currentPage = page;
            this.read = true;
            console.log('Lu')
        }
    }
}

let b1 = new Book('Meditation', 'Marcos', 'philosophie', 120,);
b1.info()
b1.readBook(1)
b1.info()
// Exercice 5 : Manipulation des Array
let livres = [{ id: 10, titre: 'POO', auteur: 'RAMI', prix: 300 },
{ id: 11, titre: 'JS ES6', auteur: 'FAMI', prix: 230 },
{ id: 12, titre: 'Algorithme', auteur: 'KARIMI', prix: 330 },
{ id: 13, titre: 'HTMH& CSS', auteur: 'RAMI', prix: 340 }]

// let titres = livres.map(titre => titre.titre)
// let titres = livres.filter(titre => titre.auteur === 'RAMI').map(book => book.titre)
// let titres = livres.find(liver => liver.id === 12)
// let titres = livres.reduce((total,livre)=> total + livre.prix,0)
let mesLivres = livres.slice()
console.log(mesLivres);

