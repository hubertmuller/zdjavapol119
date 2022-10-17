var powitanie;            // [undefined, undefined] 10000  [0|0 - 32b] [0]

powitanie = "Czesc";      // [string, Czesc] 10000 [1|Czesc0] [Czesc0]
powitanie = 5;            // [number, 5] 10000 [2|5] [5]
powitanie = true;         // [bool, true] 10000 [3|1] [1]

tablica = [true, 5, "Czesc", ["test", "ala", 0] ];
obiekt = { imie: "Jan", nazwisko: "Kowalski", dzieci: [ {imie: 'Edward', wiek: 5} ] };
//powitanie = undefined;

function witaj(slowo) {
    var poczatekPozdrowienia = "Witaj ";
    function przygotujPowitanie(poczatekPozdrowienia, slowo) {
        return poczatekPozdrowienia + slowo;
    }
    globalna = "Hej jestem globana";
    console.log(przygotujPowitanie(poczatekPozdrowienia,slowo));
    console.log(powitanie);
}

function osoba(imie, nazwisko) {
    var x = 5;
    var y = 6; //prywatna
    function prywatna() {

    }
    return {
        "imie": imie, 
        "nazwisko": nazwisko,
        pozdrow: function() {
            console.log('Witaj o zacny/a ' + this.imie + " " + this.nazwisko);
        },
        pobierzX: function () {
            return x;
        }
    }
}

function test(doWykonania) {
    doWykonania();
}

test(function () { console.log('funkcja test')});

//poczatekPozdrowienia; //<blad
witaj("Hubert");
console.log(globalna);

// reakcja na zdarzenie

document.forma.addEventListener("submit", function(event) {

    function wyswietlBlad(selektor, komunikat) {
        var cel = document.querySelector(selektor);
        document.querySelectorAll(selektor + " > span").forEach( function(el) {
            el.textContent = '';
        } );

        var bladEl = document.createElement("span");
        cel.appendChild(bladEl);
        bladEl.textContent = komunikat;
    }

    blad = false;
    //sprawdzenia wartosci formularza
    if (document.forma.imie.value.length < 2) {
        blad = true;
        // wyswietlenei komunikatu
        console.log('imie jest zle');
        wyswietlBlad('#imieError','Imie jest zbyt krótkie!');

    }

    if (!document.forma.nazwisko.value.match(/^([A-Za-z/-]){3,}$/)) {
        blad = true;
        //wyswietlenei komunikatu
        console.log('nazwisko jest zle');
        wyswietlBlad('#nazwiskoError','Nazwisko nie spełnia wzorca!');
    }


    if (blad) {
        event.preventDefault();
    }
});
