let booksList = new Array();
let authorslist = new Array();
let categoriesList = new Array();

let listAuthors = document.getElementById("listAuthors");
let listBooks = document.getElementById("booksList");
let listCategories = document.getElementById("listCategories");

listAuthors.addEventListener("change", chargeByAuthor);
//listeCategories.addEventListener("change",chargementParCategories);

/**  on créé l'écouteur d'évènement sur le chargement de notre page */
window.addEventListener("DOMContentLoaded", jsonOnload);


/**  fonction qui appelle le chargement du fichier json */
function jsonOnload() {
    fetch("json/books.json")
        .then((response) => {
            return response.json(); /* on convertit la reponse en json * */
        })
        .then((data) => {
            //console.log(data);
            createBooks(data);
        })
}

/** FONCTION QUI AFFICHERA LES LIVRE MAIS AUSSI QUI CREERA DES LISTES DEROULANTES */
function createBooks(_books) {

    //Boucle sur l'ensemble du repetoire des livres
    for (let book of _books) {
        booksList.push(book);

        for (let i = 0; i < book.authors.length; i++) {
            let author = book.authors[i];

            //je verifie si nous avons ou pas des doublon dans la liste des auteurs
            if (authorslist.indexOf(author) == -1) {
                authorslist.push(author);
            }
        }
        //Faire le même schema pour la liste des Catégories
    }
    booksList.sort();
    authorslist.sort();


    for (let x = 0; x < authorslist.length; x++) {
        let option = document.createElement("option");
        option.value = authorslist[x];
        option.innerText = authorslist[x];
        listAuthors.appendChild(option)[x]

    }

    showBooks(booksList);

}

function showBooks(_books) {

    listBooks.innerHTML = "";

    for (let a = 0; a < _books.length; a++) {
        let book = document.createElement("div");
        book.setAttribute("class", "card");

        if (_books[a].thumbnailUrl == undefined || _books[a].thumbnailUrl == null) {
            _books[a].thumbnailUrl = "https://p1.storage.canalblog.com/14/48/1145642/91330992_o.png"
        }

        let titre;
        if (_books[a].title.length > 20) {
            titre = _books[a].title.substring(0, 20) + "(...";
        }
        else {
            titre = _books[a].title;
        }



        book.innerHTML = '<img src="' + _books[a].thumbnailUrl + '"/>';

        listBooks.appendChild(book);
    }
}

/** FONCTION QUI APPELLE LE CHARGEMENT DU NOM DE L'AUTEUR DANS LA LISTE DEROULANTE */
function chargeByAuthor() {

}




/** FONCTION QUI APPELLE LE CHARGEMENT DE LA  CATEGORIES DANS LA LISTE DEROULANTE */
function chargeByCategories() {

}


/** FONCTION QUI APPELLE LE CHARGEMENT DES LIVRES DE LA LISTE DEROULANTE */
function chargeByBooks() {

}

