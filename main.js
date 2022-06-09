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
function neuesFahrzeug() {
     buch = new buch ("", "", "")
}