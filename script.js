var powitanie;            // [undefined, undefined] 10000  [0|0 - 32b] [0]

powitanie = "Czesc";      // [string, Czesc] 10000 [1|Czesc0] [Czesc0]
powitanie = 5;            // [number, 5] 10000 [2|5] [5]
powitanie = true;         // [bool, true] 10000 [3|1] [1]

tablica = [true, 5, "Czesc", ["test", "ala", 0] ];
obiekt = { imie: "Jan", nazwisko: "Kowalski", dzieci: [ {imie: 'Edward', wiek: 5} ] };
//powitanie = undefined;

function witaj(slowo) {
    var poczatekPozdrowienia = "Witaj ";
    globalna = "Hej jestem globana";
    console.log(poczatekPozdrowienia + slowo);
    console.log(powitanie);
}

//poczatekPozdrowienia; //<blad
witaj("Hubert");
console.log(globalna);

