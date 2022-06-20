class Buch {
    constructor(Farbe, Verlag, Autor, Preis, Anzahl) {
        this.Farbe = "Farbe"
        this.Verlag = "Verlag"
        this.Autor = "Autor"
        this.Preis = "Preis"
        this.Anzahl = "Anzahl"
    }

    verfuegbar() {
        if (this.Anzahl < 1) {
            console.log("Es ist kein Buch mehr vorhanden")
        } else {
            console.log("Es ist noch mindestens 1 Buch vorhanden")
        }
    }
    verkauft() {
        this.Anzahl = this.Anzahl - 1
    }
}

let lager = []

function init() {
    let buch = new Buch("Schwarz", "Duden", "J.K. Rowling", "19.99€")
    lager.push(buch)
    buch = new Buch("Weiß", "Cornelsen", "Gotthold Ephraim Lessing", "14.99€")
    lager.push(buch)
    buch = new Buch("Orange", "Aviva", "Theodor Sturm", "9.99€")
    lager.push(buch)
    buch = new Buch("Gelb", "Auer", "Stephen King", "16.99€")
    lager.push(buch)
}

function lagerListe() {
    for (let i = 0; i < lager.length; i++) {
    console.log (lager[i])
    }
}

function sortieren(){
    lager.sort(vergleich)
}
function vergleich(buch1,buch2){
    if(buch1.Autor < buch2.Autor){
        return -1;
    }
    if(buch1.Autor > buch2.Autor){
        return 1;
    }
    return 0
}