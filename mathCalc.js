var Layout_DESKTOP = {
    setMenuButton_AEL: function () {
        var menuButtonBody_EL = document.querySelector('div.dsk-menu-button-box');
        var menuButton_EL = document.querySelector('svg.dsk-menu-arrow');
        var calcDott_EL = document.querySelector('div.menu-button-dott');
        var appCover_EL = document.querySelector('div.app-cover');
        var isShow = false;
        [calcDott_EL, menuButton_EL].forEach(function (element) {
            element.addEventListener('click', function () {
                var sidebar = document.querySelector('nav.dsk-nav-menu');
                switch (isShow) {
                    case false:
                        {
                            isShow = true;
                            setTimeout(function () {
                                menuButtonBody_EL.style.display = "flex";
                                sidebar.style.left = '0px';
                                menuButton_EL.style.transform = 'rotateZ(0deg)';
                                sidebar.style.transitionDuration = '0.35s';
                                appCover_EL.style.zIndex = "1";
                                appCover_EL.style.backgroundColor = "0,0,0,0.5";
                            }, 1);
                        }
                        break;
                    case true:
                        {
                            isShow = false;
                            setTimeout(function () {
                                menuButtonBody_EL.style.display = "none";
                                sidebar.style.left = '-300px'; // + 65px dla strzałki (5px - cień)
                                menuButton_EL.style.transform = 'rotateZ(180deg)';
                                sidebar.style.transitionDuration = '0.35s';
                                setTimeout(function () {
                                    appCover_EL.style.zIndex = "-1";
                                    appCover_EL.style.backgroundColor = "0,0,0,0.0";
                                }, 350);
                            }, 1);
                        }
                        break;
                }
            }, false);
        });
        /*menuButton_EL.addEventListener('click', () => {
            const sidebar: HTMLElement = document.querySelector('nav.dsk-nav-menu');
            switch (isShow){
                case false: {
                    isShow = true;
                    setTimeout(() => {
                        menuButtonBody_EL.style.display = "flex";
                        sidebar.style.left = '0px';
                        menuButton_EL.style.transform = 'rotateZ(0deg)';
                        sidebar.style.transitionDuration = '0.35s';
                        appCover_EL.style.zIndex = "1";
                        appCover_EL.style.backgroundColor = "0,0,0,0.5";
                    }, 1);
                } break;
                case true: {
                    isShow = false;
                    setTimeout(() => {
                        menuButtonBody_EL.style.display = "none";
                        sidebar.style.left = '-300px';  // + 65px dla strzałki (5px - cień)
                        menuButton_EL.style.transform = 'rotateZ(180deg)';
                        sidebar.style.transitionDuration = '0.35s';
                        setTimeout(() => {
                            appCover_EL.style.zIndex = "-1";
                            appCover_EL.style.backgroundColor = "0,0,0,0.0";
                        }, 350);
                    }, 1);
                } break;
            }
        }, false);*/
    },
    setScrollBarPosition: function () {
        window.addEventListener("DOMContentLoaded", function () {
            var container = document.querySelectorAll('.ct-refactoring > .screen > .screen-position > .screen-hanger > .info, .ct-refactoring > .screen > .screen-position > .screen-hanger > .value');
            for (var i = 0; i < container.length; i++) {
                container[i].scrollLeft = container[i].scrollWidth;
            }
        }, false);
    }
};
Layout_DESKTOP.setMenuButton_AEL();
Layout_DESKTOP.setScrollBarPosition();
var LocalStorage_ALL = {
    clcBt_EVT: undefined,
    clcBt_DIV: null,
    clcBt_ID: 0,
    clcType_EL: null,
    calcTitle_EL: document.querySelector('div.cb-title'),
    setPageOpenCalc_AEL: function () {
        var _this = this;
        var calcButton_COLL = document.querySelector('div.nav-button-box').children;
        var calcType_EL = document.querySelectorAll('div[class^="ct-"]');
        for (var i = 0; i < calcButton_COLL.length; i++) {
            calcButton_COLL[i].addEventListener('click', function (e) {
                _this.clcBt_EVT = e.currentTarget;
                _this.clcBt_DIV = _this.clcBt_EVT;
                _this.clcBt_ID = Number(_this.clcBt_DIV.id.slice(4, 6));
                switch (_this.clcBt_ID) {
                    case 0:
                        for (var i_1 = 0; i_1 < calcType_EL.length; i_1++) {
                            if (i_1 === _this.clcBt_ID) {
                                _this.clcType_EL = calcType_EL[i_1];
                                _this.clcType_EL.style.display = 'block';
                                _this.calcTitle_EL.textContent = "Logika";
                            }
                            else {
                                _this.clcType_EL = calcType_EL[i_1];
                                _this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', String(_this.clcBt_ID));
                        break;
                    case 1:
                        for (var i_2 = 0; i_2 < calcType_EL.length; i_2++) {
                            if (i_2 === _this.clcBt_ID) {
                                _this.clcType_EL = calcType_EL[i_2];
                                _this.clcType_EL.style.display = 'block';
                                _this.calcTitle_EL.textContent = "Euklides";
                            }
                            else {
                                _this.clcType_EL = calcType_EL[i_2];
                                _this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', String(_this.clcBt_ID));
                        break;
                    case 2:
                        for (var i_3 = 0; i_3 < calcType_EL.length; i_3++) {
                            if (i_3 === _this.clcBt_ID) {
                                _this.clcType_EL = calcType_EL[i_3];
                                _this.clcType_EL.style.display = 'block';
                                _this.calcTitle_EL.textContent = "NWD NWW FAC";
                            }
                            else {
                                _this.clcType_EL = calcType_EL[i_3];
                                _this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', String(_this.clcBt_ID));
                        break;
                }
            }, false);
        }
    },
    getLocalStorage: function () {
        var calcType_EL = document.querySelectorAll('div[class^="ct-"]');
        var calcType = localStorage.getItem('calculator');
        (calcType === undefined || calcType === null) ? calcType = '0' : calcType;
        if (calcType) {
            switch (Number(calcType)) {
                case 0:
                    for (var i = 0; i < calcType_EL.length; i++) {
                        if (i === Number(calcType)) {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'block';
                            this.calcTitle_EL.textContent = "Logika";
                        }
                        else {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'none';
                        }
                    }
                    break;
                case 1:
                    for (var i = 0; i < calcType_EL.length; i++) {
                        if (i === Number(calcType)) {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'block';
                            this.calcTitle_EL.textContent = "Euklides";
                        }
                        else {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'none';
                        }
                    }
                    break;
                case 2:
                    for (var i = 0; i < calcType_EL.length; i++) {
                        if (i === Number(calcType)) {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'block';
                            this.calcTitle_EL.textContent = "NWD NWW FAC";
                        }
                        else {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'none';
                        }
                    }
                    break;
            }
        }
    }
};
LocalStorage_ALL.getLocalStorage();
LocalStorage_ALL.setPageOpenCalc_AEL();
var Calculator_MathLogic_FUNCTIONS = {
    bt_EVT: undefined,
    bt_DIV: null,
    bt_ID: "",
    value: " ",
    value_MEMORY: "",
    isValid: false,
    p01_VAL: "0",
    q01_VAL: "0",
    r01_VAL: "0",
    calc_MODE: "TAU",
    isResultTAU: false,
    screen_INFO_EVA: "EVA | p = 0, q = 0, r = 0",
    screen_INFO_TAU: "TAU",
    screen_EL: document.getElementById('screen_TRANSFORM'),
    screen_POS_2: document.getElementById('screen-position-1_TRANSFORM'),
    screen_POS_3: document.getElementById('screen-position-2_TRANSFORM'),
    butonGroup_EL: document.getElementById('buttons-group_TRANSFORM'),
    mode_EL: document.getElementById("MODE"),
    screen_INFO: document.querySelector('.ct-logic > .screen > .screen-position > .screen-hanger > .info'),
    screen_VALUE: document.querySelector('.ct-logic > .screen > .screen-position > .screen-hanger > .value'),
    setButtons_AEL: function () {
        var _this = this;
        var button_COLL = document.querySelector('.ct-logic > .buttons-group').children;
        for (var i = 0; i < button_COLL.length; i++) {
            button_COLL[i].addEventListener("click", function (e) {
                _this.bt_EVT = e.currentTarget;
                _this.bt_DIV = _this.bt_EVT;
                _this.bt_ID = _this.bt_DIV.id;
                switch (_this.bt_ID) {
                    case "MODE":
                        _this.operation_MODE(_this.bt_ID); // OK
                        break;
                    case "=":
                        {
                            if (_this.isValid == true) {
                                _this.operation_CALCULATE_1(_this.bt_ID);
                            }
                        }
                        break;
                    case "BACK":
                        _this.operation_DEL(_this.bt_ID); // OK
                        break;
                    case "AC":
                        _this.operation_AC(_this.bt_ID); // OK
                        break;
                    case "p01":
                        _this.operation_SignValue(_this.bt_ID); // OK
                        break;
                    case "q01":
                        _this.operation_SignValue(_this.bt_ID); // OK
                        break;
                    case "r01":
                        _this.operation_SignValue(_this.bt_ID); // OK
                        break;
                    default: // p, q, r, ~, /\, \/, =>, <=>, |, (, )
                        _this.operation_Sign(_this.bt_ID); // OK
                        break;
                }
                // Po wywołaniu funkji operacji TAU, przywróć układ EVA:
                if (_this.bt_ID !== "=" && _this.isResultTAU === true) {
                    _this.isResultTAU = false;
                    _this.screen_EL.classList.replace('screen_TAU', 'screen_EVA');
                    _this.screen_POS_2.classList.replace('screen-position_TAU', 'screen-position_EVA');
                    _this.screen_POS_3.classList.replace('screen-position_TAU', 'screen-position_EVA');
                    _this.butonGroup_EL.classList.replace('buttons-group_TAU', 'buttons-group_EVA');
                }
            }, false);
        }
        this.operation_MODE();
    },
    operation_MODE: function () {
        if (this.calc_MODE === "EVA") {
            this.calc_MODE = "TAU";
            this.mode_EL.textContent = "EVA";
            this.screen_INFO.textContent = this.screen_INFO_TAU;
        }
        else if (this.calc_MODE === "TAU") {
            this.calc_MODE = "EVA";
            this.mode_EL.textContent = "TAU";
            this.screen_INFO.textContent = this.screen_INFO_EVA;
        }
    },
    operation_VALID: function () {
        // Walidacja danych:
        var badColor = "crimson";
        var goodColor = "rgba(255,255,255,0.8)";
        var spaghetti = this.value.split(" ").join("");
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // Zerowy Etap Walidacji - do II Etapu Walidacji - Sprawdzenia czy długość wyrazenia jest równa 2: 
        // (Wynikiem "wyciannia globalnego wyrażenie nawiasowego" dla nawiasu głównego zawsze jest "",
        // bo tak działa algorytm... nieważne to nie wina algorytmu... co tu dużo gadać.., jakby człowiek
        // co kawałek coś opisywał to z 800 linijek zrobiłoby się 8000..., - po prostu mi jest to potrzebne!).
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        if (spaghetti.length <= 2) {
            console.log("Niepoprawna długość wyrażenia.");
            this.isValid = false;
            //this.screen_INFO.textContent = "Niepoprawna długość wyrażenia!";
            this.screen_VALUE.style.color = badColor;
            return;
        }
        // - - - - - - - - - - - - - - - - - - - - - - -
        // I Etap Walidacji - poprawna liczba nawiasów:
        // - - - - - - - - - - - - - - - - - - - - - - -
        var bracketLeft_AMOUNT = 0;
        var bracketRight_AMOUNT = 0;
        for (var i = 0; i < spaghetti.length; i++) {
            (spaghetti[i] === "(") ? bracketLeft_AMOUNT++ : bracketLeft_AMOUNT = bracketLeft_AMOUNT;
            (spaghetti[i] === ")") ? bracketRight_AMOUNT++ : bracketRight_AMOUNT = bracketRight_AMOUNT;
        }
        if (bracketLeft_AMOUNT !== bracketRight_AMOUNT) {
            console.log("Niepoprawna liczba nawiasów!");
            this.isValid = false;
            //this.screen_INFO.textContent = "Niepoprawna liczba nawiasów!";
            this.screen_VALUE.style.color = badColor;
            return;
        }
        console.log("Poprawna liczba nawiasów!");
        // Dodawanie nawiasu inicjalnego-najnadrzędniejszego do etapu II, aby pętla działała dobrze:
        if ((spaghetti[0] !== "(" && spaghetti[spaghetti.length - 1] !== ")") || (spaghetti[0] === "(" && spaghetti[spaghetti.length - 1] !== ")") || (spaghetti[0] !== "(" && spaghetti[spaghetti.length - 1] === ")")) {
            spaghetti = "(" + spaghetti + ")";
        }
        else if (spaghetti[0] === "(" && spaghetti[spaghetti.length - 1] === ")") {
            spaghetti = "(" + spaghetti + ")";
        }
        else {
            console.log("Niepoprawne wyrażenie!");
            this.isValid = false;
            //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
            this.screen_VALUE.style.color = badColor;
            return;
        }
        console.log(spaghetti);
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // II Etap Walidacji - Poprawna liczba określonych znaków w kolejno wycinanych nawiasach nadrzędnych: (nadrzędne -> potomne)
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // Rozkład całego wyrażenia nawiasowego na stopniowe nadrzędne wyrażenia nawiasowe:
        var expression = spaghetti;
        var stack = [];
        var bracketWord_AR = [];
        var startIndex_1 = 0;
        var subExpression = "";
        for (var i = 0; i < expression.length; i++) {
            if (expression[i] === "(") {
                stack.push(i.toString());
            }
            else if (expression[i] === ")") {
                startIndex_1 = parseInt(stack.pop()); // Operatora asercji (!) mogłem zastąpić IFem walidującym czy w tablicy w ogóle coś mamy... ale tak jest po prostu czytelniej.
                subExpression = expression.substring(startIndex_1, i + 1);
                bracketWord_AR.push(subExpression);
            }
        }
        console.log(bracketWord_AR);
        /*
        Ten algorytm służy do rozkładania wyrażeń zawierających nawiasy na ich składowe wyrażenia nadrzędne. Oto szczegółowe wyjaśnienie krok po kroku:

        1. Inicjalizacja zmiennych:
        expression przechowuje wyrażenie, które ma zostać rozłożone na składowe.
        stack jest stosu używanego do śledzenia otwierających nawiasów "(".
        bracketWord_AR to tablica, która będzie przechowywać składowe wyrażenia nadrzędnego.
        startIndex_1 to indeks początkowy aktualnie przetwarzanego podwyrażenia.
        subExpression to zmienna, która przechowuje aktualnie przetwarzane podwyrażenie.
        
        2. Iteracja po wyrażeniu:
        Pętla for iteruje po każdym znaku w expression.
        
        3.Sprawdzenie nawiasów:
        Jeśli aktualny znak to "(", to oznacza to, że napotkano otwierający nawias. Indeks tego nawiasu zostaje dodany do stosu stack.
        
        4.Rozpoznanie zamykającego nawiasu:
        Jeśli aktualny znak to ")", oznacza to, że napotkano zamykający nawias.
        Indeks otwierającego nawiasu jest pobierany ze stosu poprzez stack.pop() i zapisywany w startIndex_1.
        Następnie wyrażenie między otwierającym i zamykającym nawiasem jest wydzielane przy użyciu expression.substring(startIndex_1, i + 1) i zapisywane w subExpression.
        subExpression jest następnie dodawane do tablicy bracketWord_AR, reprezentującej składowe wyrażenia nadrzędnego.
        
        5.Kontynuacja przetwarzania:
        Pętla kontynuuje iterację po wyrażeniu, dopóki nie zostaną przeanalizowane wszystkie znaki.
        Po zakończeniu działania tego algorytmu, tablica bracketWord_AR zawiera wszystkie składowe wyrażenia nadrzędnego, które były otoczone nawiasami.
        Te składowe są uporządkowane w kolejności, w jakiej zostały napotkane w pierwotnym wyrażeniu.

        Operator ! w TypeScript to tzw. operator asercji typu, który informuje kompilator TypeScript, że pewna wartość nie jest typu null ani undefined, mimo że może tak wyglądać.
        
        Operator ! występuje po wywołaniu stack.pop(). Wywołanie stack.pop() zwraca ostatni element z tablicy stack i usuwa go z tej tablicy.
        Jednakże istnieje możliwość, że tablica stack jest pusta, a wywołanie pop() zwróci wartość undefined, co jest typową sytuacją,
        gdy tablica jest już pusta.
        
        Operator ! w tym kontekście mówi kompilatorowi, że wiemy, że wywołanie stack.pop() nie zwróci wartości
        undefined, ponieważ jesteśmy pewni, że tablica stack nie jest pusta. W związku z tym nie musi on uwzględniać możliwości,
        że wartość ta może być undefined, co pozwala uniknąć ostrzeżenia kompilatora o potencjalnie niebezpiecznej operacji.
        
        Jednakże należy używać operatora ! z rozwagą, ponieważ może to prowadzić do błędów wykonania w przypadku, gdy wartość rzeczywiście
        jest null lub undefined, a my mylnie zastosowaliśmy operator asercji typu. W przypadku pewności, że wartość nie będzie null ani undefined,
        można go użyć, ale zawsze należy sprawdzać, czy taka pewność jest uzasadniona.
        */
        // Usuwanie potomnych wyrażeń nawiasowych z nawiasów nadrzędnych:
        var expressions = bracketWord_AR;
        var result = [];
        var startIndex_2 = 0;
        var openCount = 0;
        var endIndex = 0;
        for (var i = 0; i < expressions.length; i++) {
            // Usunięcie nawiasów z prawej i lewej strony
            if (expressions[i][0] === "(" && expressions[i][expressions[i].length - 1] === ")") {
                expressions[i] = expressions[i].substring(1, expressions[i].length - 1);
            }
            // Usunięcie wyrażeń nawiasowych potomnych
            startIndex_2 = expressions[i].indexOf("(");
            while (startIndex_2 !== -1) {
                openCount = 1;
                endIndex = startIndex_2 + 1;
                while (openCount > 0 && endIndex < expressions[i].length) {
                    if (expressions[i][endIndex] === "(") {
                        openCount++;
                    }
                    else if (expressions[i][endIndex] === ")") {
                        openCount--;
                    }
                    endIndex++;
                }
                expressions[i] = expressions[i].substring(0, startIndex_2) + expressions[i].substring(endIndex);
                startIndex_2 = expressions[i].indexOf("(", startIndex_2);
            }
            result.push(expressions[i]);
        }
        // Sprawdzanie czy któryś z indeksów araja zawiera pusty string: (mankament wyrażenia wpisanego z globalnym nawiasem nadrzędny, tzn. wpisanie: np. (q|p)) )
        if (result[result.length - 1] === "") {
            result.pop();
        }
        // Sprawdzanie poprawności liczby znaków w nawiasach:
        var not_AMOUNT = 0;
        var conj_AMOUNT = 0;
        var word_AMOUNT = 0;
        for (var i = 0; i < result.length; i++) {
            not_AMOUNT = 0;
            conj_AMOUNT = 0;
            word_AMOUNT = 0;
            for (var j = 0; j < result[i].length; j++) {
                if (result[i].charCodeAt(j) === 172) {
                    not_AMOUNT++;
                }
                else if (result[i].charCodeAt(j) === 124 || result[i].charCodeAt(j) === 8897 || result[i].charCodeAt(j) === 8896 || result[i].charCodeAt(j) === 8658 || result[i].charCodeAt(j) === 8660) {
                    conj_AMOUNT++;
                }
                else if (result[i][j] === "p" || result[i][j] === "q" || result[i][j] === "r") {
                    word_AMOUNT++;
                }
            }
            if (not_AMOUNT > 1 || conj_AMOUNT > 1 || word_AMOUNT > 2) {
                console.log("Niepoprawne wyrażenie!");
                this.isValid = false;
                //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                this.screen_VALUE.style.color = badColor;
                return;
            }
        }
        console.log("Poprawna dopuszczalna liczba znaków w nawiasach");
        // - - - - - - - - - - - - - - - - - - - - - - - - - -
        // III Etap walidacji - Sąsiedztwo właściwych znaków:
        // - - - - - - - - - - - - - - - - - - - - - - - - - -
        var keyNum = 0;
        var keyNum_LOC = 0;
        var is_Bad_1_COUNTER = 0;
        var isBad_2 = false;
        console.log("\nIII Etap walidacji - Sąsiedztwo właściwych znaków:");
        console.log(result);
        for (var i = 0; i < result.length; i++) {
            for (var j = 0; j < result[i].length; j++) {
                keyNum = result[i].charCodeAt(j);
                if (keyNum === 124 || keyNum === 8897 || keyNum === 8896 || keyNum === 8658 || keyNum === 8660) {
                    // LEWA:
                    keyNum_LOC = j - 1;
                    is_Bad_1_COUNTER = 0; // Sytuacja kiedy z obu stron spójnika nie występuje żaden znak. Kiedy zaistnieje taka sytuacja, licznik wynosi 2.
                    isBad_2 = false; // Sytuacja kiedy wystepuje samo wyrażenie nawiasowetypu: "|p" lub "p|" i przed nim lub po nim w zależności od wyrażenia nawiasowego nie następuje kolejne.
                    if (result[i][keyNum_LOC] !== "p" && result[i][keyNum_LOC] !== "q" && result[i][keyNum_LOC] !== "r" && result[i][keyNum_LOC] !== ")") {
                        if (result[i][keyNum_LOC] === undefined) {
                            is_Bad_1_COUNTER++;
                            if (result.length < 1) {
                                isBad_2 = true;
                            }
                        }
                    }
                    // PRAWA:
                    keyNum_LOC = j + 1;
                    if (result[i][keyNum_LOC] !== "p" && result[i][keyNum_LOC] !== "q" && result[i][keyNum_LOC] !== "r" && result[i][keyNum_LOC] !== "(") {
                        if (result[i][keyNum_LOC] === undefined) {
                            is_Bad_1_COUNTER++;
                            if (result.length < 1) {
                                isBad_2 = true;
                            }
                        }
                    }
                    if (is_Bad_1_COUNTER === 2 && isBad_2 === true) {
                        console.log("PRAWY SPÓJNIK: " + result[i][keyNum_LOC]);
                        console.log("Wyrażenie NIE jest poprawne!");
                        this.isValid = false;
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                }
                else if (keyNum === 112 || keyNum === 113 || keyNum === 114) {
                    // LEWA:
                    keyNum_LOC = j - 1;
                    if (result[i].charCodeAt(keyNum_LOC) !== 172 && result[i].charCodeAt(keyNum_LOC) !== 124 && result[i].charCodeAt(keyNum_LOC) !== 8897 && result[i].charCodeAt(keyNum_LOC) !== 8896 && result[i].charCodeAt(keyNum_LOC) !== 8658 && result[i].charCodeAt(keyNum_LOC) !== 8660 && result[i][keyNum_LOC] !== "(" && result[i][keyNum_LOC] !== undefined) {
                        console.log("Wyrażenie NIE jest poprawne!");
                        this.isValid = false;
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                    // PRAWA:
                    keyNum_LOC = j + 1;
                    if (result[i].charCodeAt(keyNum_LOC) !== 124 && result[i].charCodeAt(keyNum_LOC) !== 8897 && result[i].charCodeAt(keyNum_LOC) !== 8896 && result[i].charCodeAt(keyNum_LOC) !== 8658 && result[i].charCodeAt(keyNum_LOC) !== 8660 && result[i][keyNum_LOC] !== ")" && result[i][keyNum_LOC] !== undefined) {
                        console.log("Wyrażenie NIE jest poprawne!");
                        this.isValid = false;
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                }
                else if (keyNum === 172) {
                    // LEWA:
                    keyNum_LOC = j - 1;
                    //if (result[i][keyNum_LOC] !== "(") {  // Nigdy nie będzie takiej sytuacji, gdyż nawiasy są kasowane...
                    if (result[i][keyNum_LOC] !== undefined) { // Pozbywając się nawiasu z LEWEJ strony zostaje na samo "". "" doskonale zastępuje "(", więc wpisane wyrażenia z NOT bez nawiasów jest błędne!
                        console.log("Wyrażenie NIE jest poprawne!");
                        this.isValid = false;
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                    // PRAWA:
                    keyNum_LOC = j + 1;
                    if (result[i][keyNum_LOC] !== "p" && result[i][keyNum_LOC] !== "q" && result[i][keyNum_LOC] !== "r" && result[i][keyNum_LOC] !== undefined) { // PAMIĘTAJ! Jak pozbywasz się nawiasów w Etapie II, to zamiast nawiasów "(" i ")" piszesz "undefined"!
                        console.log("Wyrażenie NIE jest poprawne!");
                        this.isValid = false;
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                }
                else if (keyNum === 40) {
                    // LEWA:
                    keyNum_LOC = j - 1;
                    if (result[i].charCodeAt(keyNum_LOC) !== 172 && result[i].charCodeAt(keyNum_LOC) !== 124 && result[i].charCodeAt(keyNum_LOC) !== 8897 && result[i].charCodeAt(keyNum_LOC) !== 8896 && result[i].charCodeAt(keyNum_LOC) !== 8658 && result[i].charCodeAt(keyNum_LOC) !== 8660 && result[i][keyNum_LOC] !== undefined) {
                        console.log("Wyrażenie NIE jest poprawne!");
                        this.isValid = false;
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                    // PRAWA:
                    keyNum_LOC = j + 1;
                    if (result[i].charCodeAt(keyNum_LOC) !== 172 && result[i][keyNum_LOC] !== "p" && result[i][keyNum_LOC] !== "q" && result[i][keyNum_LOC] !== "r") {
                        console.log("Wyrażenie NIE jest poprawne!");
                        this.isValid = false;
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                }
                else if (keyNum === 41) {
                    // LEWA:
                    keyNum_LOC = j - 1;
                    if (result[i][keyNum_LOC] !== "p" && result[i][keyNum_LOC] !== "q" && result[i][keyNum_LOC] !== "r") {
                        console.log("Wyrażenie NIE jest poprawne!");
                        this.isValid = false;
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                    // PRAWA:
                    keyNum_LOC = j + 1;
                    if (result[i].charCodeAt(keyNum_LOC) !== 124 && result[i].charCodeAt(keyNum_LOC) !== 8897 && result[i].charCodeAt(keyNum_LOC) !== 8896 && result[i].charCodeAt(keyNum_LOC) !== 8658 && result[i].charCodeAt(keyNum_LOC) !== 8660 && result[i][keyNum_LOC] !== undefined) {
                        console.log("Wyrażenie NIE jest poprawne!");
                        this.isValid = false;
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                }
            }
        }
        // IV Etap Walidacji - niepoprawne sytuacje: "q|" i "|q" i poprawne: "q|r", "(q|r)|p" i "p|(q|r)", uwzględniając NOT ("~").
        var isNOT = false;
        for (var i = 0; i < result.length; i++) {
            for (var j = 0; j < result[i].length; j++) {
                if (result[i].charCodeAt(j) === 172) {
                    isNOT = true;
                }
            }
            if (isNOT == true) {
                isNOT = false;
                if (result[i].length < 2 && result.length < 2) {
                    console.log("Wyrażenie NIE jest poprawne!");
                    this.isValid = false;
                    //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                    this.screen_VALUE.style.color = badColor;
                    return;
                }
            }
            else {
                if (result[i].length < 3 && result.length < 2) {
                    console.log("Wyrażenie NIE jest poprawne!");
                    this.isValid = false;
                    //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                    this.screen_VALUE.style.color = badColor;
                    return;
                }
            }
        }
        // Można się przyczepić do tego, że w IV Etapie Walidacji nie zrobiłem akceptowania wartości jednoznakowej - zmiennych "p", "q" i "r",
        // ale po jakiego grzyba ktoś chciałby obliczyć na kalkulatorze coś tak prostego... przepraszam, to nawet nie jest obliczenie, a
        // podłożenie za zmienną podanej wartości i tyle...
        // V Etap Walidacji - Sytuacje typu: "(qVp)|" (this.value)
        var sraczka = this.value.split(" ").join("");
        var kloc_LEWY = 0;
        var kloc_PRAWY = 0;
        console.log("V Etap Walidacji:");
        console.log(sraczka);
        console.log(sraczka.charCodeAt(sraczka.length - 1));
        for (var i = 0; i < sraczka.length; i++) {
            if (sraczka.charCodeAt(i) === 124 || sraczka.charCodeAt(i) == 8897 || sraczka.charCodeAt(i) === 8896 || sraczka.charCodeAt(i) === 8658 || sraczka.charCodeAt(i) === 8660) {
                kloc_LEWY = i - 1;
                kloc_PRAWY = i + 1;
                if (sraczka[kloc_LEWY] === undefined || sraczka[kloc_PRAWY] === undefined) {
                    console.log("Wyrażenie NIE jest poprawne!");
                    this.isValid = false;
                    //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                    this.screen_VALUE.style.color = badColor;
                    return;
                }
            }
        }
        // VI Etap Walidacji - Sprawdzenie czy NOT (~) znajduje się w nawiasie:
        for (var i = 0; i < this.value.length; i++) {
            if (this.value.charCodeAt(i) === 172) {
                if (this.value[i - 1] === "(" && (this.value[i + 1] === "p" || this.value[i + 1] === "q" || this.value[i + 1] === "r") && this.value[i + 2] === ")") {
                    alert("Warunek (~p)");
                }
                else if (this.value[i - 1] === "(" && this.value[i + 1] === "(") {
                    alert("Warunek (~(");
                }
                else {
                    this.isValid = false;
                    console.log("Wyrażenie NIE jest poprawne!");
                    this.screen_VALUE.style.color = badColor;
                    return;
                }
            }
        }
        // Koniec walidacji:
        console.log('Wyrażenie jest ostatecznie prawidłowe!');
        this.isValid = true;
        this.screen_VALUE.style.color = goodColor;
        this.value_MEMORY = this.screen_VALUE.textContent;
    },
    operation_CALCULATE_1: function () {
        var result = "";
        var result_AR = [];
        var is_p = false;
        var is_q = false;
        var is_r = false;
        var wordType_STR = [];
        var isTAU_COUNTER = 0;
        if (this.calc_MODE === "EVA") {
            // Zmiana ukadu kalkulatora: robi się to kiedy po wywołaniu "operation_TAU" kliknie się na kalkulatorze dowolny przycisk odpócz przycisku"=":
            this.screen_EL.classList.replace('screen_TAU', 'screen_EVA');
            this.screen_POS_2.classList.replace('screen-position_TAU', 'screen-position_EVA');
            this.screen_POS_3.classList.replace('screen-position_TAU', 'screen-position_EVA');
            this.butonGroup_EL.classList.replace('buttons-group_TAU', 'buttons-group_EVA');
            result = this.operation_CALCULATE_2(this.p01_VAL, this.q01_VAL, this.r01_VAL);
            (result === "0") ? this.screen_VALUE.textContent = "false" : this.screen_VALUE.textContent = this.screen_VALUE.textContent;
            (result === "1") ? this.screen_VALUE.textContent = "true" : this.screen_VALUE.textContent = this.screen_VALUE.textContent;
        }
        else if (this.calc_MODE === "TAU") {
            this.isResultTAU = true;
            this.screen_EL.classList.replace('screen_EVA', 'screen_TAU');
            this.screen_POS_2.classList.replace('screen-position_EVA', 'screen-position_TAU');
            this.screen_POS_3.classList.replace('screen-position_EVA', 'screen-position_TAU');
            this.butonGroup_EL.classList.replace('buttons-group_EVA', 'buttons-group_TAU');
            wordType_STR = [];
            for (var i = 0; i < this.value.length; i++) {
                if (is_p == false) {
                    if (this.value[i] === "p") {
                        wordType_STR.push("p");
                        is_p = true;
                    }
                }
                if (is_q == false) {
                    if (this.value[i] === "q") {
                        wordType_STR.push("q");
                        is_q = true;
                    }
                }
                if (is_r == false) {
                    if (this.value[i] === "r") {
                        wordType_STR.push("r");
                        is_r = true;
                    }
                }
            }
            result_AR = [];
            isTAU_COUNTER = 0;
            if (wordType_STR.length === 1) {
                if (wordType_STR[0] === "p") {
                    result_AR.push(this.operation_CALCULATE_2("0", undefined, undefined));
                    result_AR.push(this.operation_CALCULATE_2("1", undefined, undefined));
                }
                else if (wordType_STR[0] === "q") {
                    result_AR.push(this.operation_CALCULATE_2(undefined, "0", undefined));
                    result_AR.push(this.operation_CALCULATE_2(undefined, "1", undefined));
                }
                else if (wordType_STR[0] === "r") {
                    result_AR.push(this.operation_CALCULATE_2(undefined, undefined, "0"));
                    result_AR.push(this.operation_CALCULATE_2(undefined, undefined, "1"));
                }
            }
            else if (wordType_STR.length === 2) {
                if ((wordType_STR[0] === "p" && wordType_STR[1] === "q") || (wordType_STR[0] === "q" && wordType_STR[1] === "p")) {
                    result_AR.push(this.operation_CALCULATE_2("0", "0", undefined));
                    result_AR.push(this.operation_CALCULATE_2("1", "0", undefined));
                    result_AR.push(this.operation_CALCULATE_2("0", "1", undefined));
                    result_AR.push(this.operation_CALCULATE_2("1", "1", undefined));
                }
                else if ((wordType_STR[0] === "q" && wordType_STR[1] === "r") || (wordType_STR[0] === "r" && wordType_STR[1] === "q")) {
                    result_AR.push(this.operation_CALCULATE_2(undefined, "0", "0"));
                    result_AR.push(this.operation_CALCULATE_2(undefined, "1", "0"));
                    result_AR.push(this.operation_CALCULATE_2(undefined, "0", "1"));
                    result_AR.push(this.operation_CALCULATE_2(undefined, "1", "1"));
                }
                else if ((wordType_STR[0] === "p" && wordType_STR[1] === "r") || (wordType_STR[0] === "r" && wordType_STR[1] === "p")) {
                    result_AR.push(this.operation_CALCULATE_2("0", undefined, "0"));
                    result_AR.push(this.operation_CALCULATE_2("1", undefined, "0"));
                    result_AR.push(this.operation_CALCULATE_2("0", undefined, "1"));
                    result_AR.push(this.operation_CALCULATE_2("1", undefined, "1"));
                }
            }
            else if (wordType_STR.length === 3) {
                result_AR.push(this.operation_CALCULATE_2("0", "0", "0"));
                result_AR.push(this.operation_CALCULATE_2("0", "0", "1"));
                result_AR.push(this.operation_CALCULATE_2("0", "1", "1"));
                result_AR.push(this.operation_CALCULATE_2("0", "1", "0"));
                result_AR.push(this.operation_CALCULATE_2("1", "0", "1"));
                result_AR.push(this.operation_CALCULATE_2("1", "0", "0"));
                result_AR.push(this.operation_CALCULATE_2("1", "1", "1"));
                result_AR.push(this.operation_CALCULATE_2("1", "1", "0"));
            }
            for (var i = 0; i < result_AR.length; i++) {
                (result_AR[i] === "1") ? isTAU_COUNTER++ : isTAU_COUNTER = isTAU_COUNTER;
            }
            (isTAU_COUNTER === result_AR.length) ? this.screen_POS_3.textContent = "true" : this.screen_POS_3.textContent = "false";
            //alert(isTAU_COUNTER + " | " + result_AR.length);
            //this.operation_CALCULATE_2(this.p01_VAL, this.q01_VAL, this.r01_VAL);
        }
    },
    operation_CALCULATE_2: function (p01, q01, r01) {
        var hieroglif = "(" + this.value.split(" ").join("") + ")";
        var zagadka = "";
        for (var i = 0; i < hieroglif.length; i++) {
            if (hieroglif[i] !== "p" && hieroglif[i] !== "q" && hieroglif[i] !== "r") {
                zagadka += hieroglif[i];
            }
            else if (hieroglif[i] === "p") {
                zagadka += p01;
            }
            else if (hieroglif[i] === "q") {
                zagadka += q01;
            }
            else if (hieroglif[i] === "r") {
                zagadka += r01;
            }
        }
        // Rozkład wyrażenia nawiasowego na nadrzędne wyrażenia nawiasowe każdego poziomu, zaczynając od najbardziej zagnieżdżonych: ((5+(4-6))+5)
        var leftBracket_AR = [];
        var mostNestLeftBck = 0;
        var curExp = "";
        var isCalculate = false;
        var result = "";
        var cutExp_AR = [];
        var zagadka_COPY = "";
        var isADD = true;
        while (isCalculate == false) {
            // Szukanie najbardziej zagnieżdżonego nawiasu i obliczanie go: OK
            for (var i = 0; i < zagadka.length; i++) {
                if (zagadka[i] === "(") {
                    leftBracket_AR.push(String(i));
                }
                else if (zagadka[i] === ")") {
                    mostNestLeftBck = Number(leftBracket_AR.pop());
                    curExp = zagadka.slice(mostNestLeftBck, i + 1); // Kiedy nie masz zwalidowanych danych, po metodzie "pop()" musi pojawić się operator asercji (!) - "pop()!".
                    // Kiedy wpiszesz np. 4+(-5, to wczutując niestniejący indeks ze znakiem "(" otrzymamy undefined / null (w zależności od języka), a konwertując to na Number otrzymamy BŁĄD!
                    curExp = curExp.slice(1, (curExp.length - 1));
                    result = this.operation_CONJCALC(curExp);
                    // Indeksy potrzebne do zmodyfikowania stringa-zagadki:
                    cutExp_AR[0] = mostNestLeftBck;
                    cutExp_AR[1] = i;
                    break;
                }
            }
            // Aktualozowanie stringa-zagadki:
            zagadka_COPY = "";
            isADD = true;
            for (var i = 0; i < zagadka.length; i++) {
                if (i === cutExp_AR[0]) {
                    isADD = false;
                    zagadka_COPY += result;
                }
                if (isADD === true) {
                    zagadka_COPY += zagadka[i];
                }
                if (i === cutExp_AR[1]) {
                    isADD = true;
                }
            }
            zagadka = zagadka_COPY;
            // Sprawdzanie czy string-zagadka jest obliczony:
            if (zagadka.length === 1) {
                isCalculate = true;
            }
        }
        return zagadka;
    },
    operation_CONJCALC: function (expression) {
        var result = expression;
        if (expression.length === 3) { // "p|r"
            switch (expression.charCodeAt(1)) {
                case 8897:
                    { // /\
                        (expression[0] === "0" && expression[2] === "0") ? result = "0" : result = result;
                        (expression[0] === "1" && expression[2] === "0") ? result = "1" : result = result;
                        (expression[0] === "0" && expression[2] === "1") ? result = "1" : result = result;
                        (expression[0] === "1" && expression[2] === "1") ? result = "1" : result = result;
                    }
                    break;
                case 8896:
                    { // \/
                        (expression[0] === "0" && expression[2] === "0") ? result = "0" : result = result;
                        (expression[0] === "1" && expression[2] === "0") ? result = "0" : result = result;
                        (expression[0] === "0" && expression[2] === "1") ? result = "0" : result = result;
                        (expression[0] === "1" && expression[2] === "1") ? result = "1" : result = result;
                    }
                    break;
                case 8658:
                    { // =>
                        (expression[0] === "0" && expression[2] === "0") ? result = "1" : result = result;
                        (expression[0] === "1" && expression[2] === "0") ? result = "0" : result = result;
                        (expression[0] === "0" && expression[2] === "1") ? result = "1" : result = result;
                        (expression[0] === "1" && expression[2] === "1") ? result = "1" : result = result;
                    }
                    break;
                case 8660:
                    { // <=>
                        (expression[0] === "0" && expression[2] === "0") ? result = "1" : result = result;
                        (expression[0] === "1" && expression[2] === "0") ? result = "0" : result = result;
                        (expression[0] === "0" && expression[2] === "1") ? result = "0" : result = result;
                        (expression[0] === "1" && expression[2] === "1") ? result = "1" : result = result;
                    }
                    break;
                case 124:
                    { // |
                        (expression[0] === "0" && expression[2] === "0") ? result = "1" : result = result;
                        (expression[0] === "1" && expression[2] === "0") ? result = "1" : result = result;
                        (expression[0] === "0" && expression[2] === "1") ? result = "1" : result = result;
                        (expression[0] === "1" && expression[2] === "1") ? result = "0" : result = result;
                    }
                    break;
            }
        }
        else if (expression.length == 2) { // "~p"
            (expression[1] === "0") ? result = "1" : result = result;
            (expression[1] === "1") ? result = "0" : result = result;
        }
        return result;
    },
    operation_DEL: function () {
        // Skracanie wyrażenia:
        if (this.value[this.value.length - 1] === " ") {
            this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 3));
        }
        else {
            this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 1));
        }
        this.screen_VALUE.textContent = this.value;
        this.operation_VALID();
    },
    operation_AC: function () {
        console.clear();
        this.value = " ";
        this.screen_VALUE.textContent = this.value;
        this.screen_POS_3.textContent = this.value;
    },
    operation_SignValue: function (signValue) {
        if (this.calc_MODE === "EVA") {
            if (signValue === "p01") {
                if (this.p01_VAL === "0") {
                    this.p01_VAL = "1";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                }
                else if (this.p01_VAL === "1") {
                    this.p01_VAL = "0";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                }
            }
            else if (signValue === "q01") {
                if (this.q01_VAL === "0") {
                    this.q01_VAL = "1";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                }
                else if (this.q01_VAL === "1") {
                    this.q01_VAL = "0";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                }
            }
            else if (signValue === "r01") {
                if (this.r01_VAL === "0") {
                    this.r01_VAL = "1";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                }
                else if (this.r01_VAL === "1") {
                    this.r01_VAL = "0";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                }
            }
            this.screen_INFO.textContent = this.screen_INFO_EVA;
        }
    },
    operation_Sign: function (signKey) {
        if (signKey.charCodeAt(0) === 8896 || signKey.charCodeAt(0) === 8897 || signKey.charCodeAt(0) === 8658 || signKey.charCodeAt(0) === 8660 || signKey === "|") {
            this.value += " " + signKey + " ";
        }
        else {
            this.value += signKey;
        }
        this.screen_VALUE.textContent = this.value;
        this.operation_VALID();
    },
};
Calculator_MathLogic_FUNCTIONS.setButtons_AEL();
var Calculator_Euklides_FUNCTIONS = {
    bt_EVT: undefined,
    bt_DIV: null,
    bt_ID: "",
    value: "0",
    screen_INFO: document.querySelector('.ct-euklides > .screen > .screen-position > .screen-hanger > .info'),
    screen_VALUE: document.querySelector('.ct-euklides > .screen > .screen-position > .screen-hanger > .value'),
    setButtons_AEL: function () {
        var _this = this;
        var button_COLL = document.querySelector('.ct-euklides > .buttons-group').children;
        for (var i = 0; i < button_COLL.length; i++) {
            button_COLL[i].addEventListener("click", function (e) {
                _this.bt_EVT = e.currentTarget;
                _this.bt_DIV = _this.bt_EVT;
                _this.bt_ID = _this.bt_DIV.id;
                switch (_this.bt_ID) {
                    case "=":
                        _this.operation_EUK(_this.bt_ID); // OK
                        break;
                    case "DEL":
                        _this.operation_DEL(_this.bt_ID); // OK
                        break;
                    case "AC":
                        _this.operation_AC(_this.bt_ID); // OK
                        break;
                    case ",":
                        _this.operation_Comma(_this.bt_ID); // OK
                        break;
                    default:
                        _this.operation_Number(_this.bt_ID); // OK
                        break;
                }
            }, false);
        }
    },
    operation_EUK: function () {
        // Walidacja poprawności wpisanych danych:
        var baseNum_AR = this.value.split(", ");
        if (baseNum_AR.length !== 2) {
            if (this.value[this.value.length - 1] === " ") {
                this.screen_INFO.textContent = "Błąd! Nie wolno zostawić pustego pola";
            }
            else {
                this.screen_INFO.textContent = "Błąd! Wymagana ilość liczb wynosi: 2";
            }
            return;
        }
        else {
            if (this.value[this.value.length - 1] === " ") {
                this.screen_INFO.textContent = "Błąd! Nie wolno zostawić pustego pola";
                return;
            }
        }
        // Algorytm euklidesa:
        var fixed_A = baseNum_AR[0], fixed_B = baseNum_AR[1];
        var a_LEFT = baseNum_AR[0], b_RIGHT = baseNum_AR[1];
        while (a_LEFT !== b_RIGHT) {
            if (a_LEFT > b_RIGHT) {
                a_LEFT = a_LEFT - b_RIGHT;
            }
            else if (a_LEFT < b_RIGHT) {
                b_RIGHT = b_RIGHT - a_LEFT;
            }
            // Dodatkowy przypadek: Kiedy liczby są równe - jest potrebny w kontekście poniższego dodatkowego przypadku:
            if (a_LEFT === b_RIGHT) {
                this.value = String(a_LEFT);
                this.screen_VALUE.textContent = this.value;
                this.screen_INFO.textContent = "EUK | " + fixed_A + ", " + fixed_B + " | Wynik:";
            }
            // Dodatkowy przypadek: Kiedy liczby "a" i "b" mają ujemne wartości: (zapobiegnięcie nieskończonej teracji, kiedy liczby nigdy nie będą sobie równe)
            if (a_LEFT < 0 || b_RIGHT < 0) {
                this.value = "1";
                this.screen_VALUE.textContent = this.value;
                this.screen_INFO.textContent = "EUK | " + fixed_A + ", " + fixed_B + " | Wynik:";
                return;
            }
        }
    },
    operation_DEL: function () {
        if (this.value[this.value.length - 1] === " ") {
            this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 2));
        }
        else {
            this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 1));
        }
        if (this.value.length === 0) {
            this.value = "0";
        }
        this.screen_VALUE.textContent = this.value;
        this.screen_INFO.textContent = "Skrócono wartość";
    },
    operation_AC: function () {
        this.value = "0";
        this.screen_VALUE.textContent = this.value;
        this.screen_INFO.textContent = "Skasowano wartość";
    },
    operation_Comma: function () {
        if (this.value[this.value.length - 1] !== " ") {
            this.value += ", ";
            this.screen_INFO.textContent = "Utworzono pole na nową liczbę";
            this.screen_VALUE.textContent = this.value;
        }
        else {
            this.screen_INFO.textContent = "Błąd! Nie wolno zostawić pustego pola";
            return;
        }
    },
    operation_Number: function (numKey) {
        // Jeżeli długośc wyrazu wynosi 1 i ma on wartośc 0, skasuj 0, a wstaw cyfrę, w przeciwnym razie dodaj cyfrę do wyrażenia:
        if (this.screen_INFO.textContent[this.screen_INFO.textContent.length - 1] !== ":") {
            if (this.value.length === 1 && this.value === "0") {
                this.value = numKey;
            }
            else if (this.value.length > 1 || this.value !== "0") {
                this.value += numKey;
            }
            this.screen_VALUE.textContent = this.value;
            this.screen_INFO.textContent = "Wpisano cyfrę";
        }
    }
};
Calculator_Euklides_FUNCTIONS.setButtons_AEL();
var Calculator_NWD_NWW_Faction_FUNCTIONS = {
    bt_EVT: undefined,
    bt_DIV: null,
    bt_ID: "",
    value: "0",
    result: "",
    FAC_isNotComma: true,
    FAC_isDivided: false,
    FAC_dividedNumber: 0,
    FAC_factor: 2,
    Both_FAC_FractedNum: [][0],
    Both_FAC_InitialValues_STR: [],
    screen_INFO: document.querySelector('.ct-refactoring > .screen > .screen-position > .screen-hanger > .info'),
    screen_VALUE: document.querySelector('.ct-refactoring > .screen > .screen-position > .screen-hanger > .value'),
    setButtons_AEL: function () {
        var _this = this;
        var button_COLL = document.querySelector('.ct-refactoring > .buttons-group').children;
        for (var i = 0; i < button_COLL.length; i++) {
            button_COLL[i].addEventListener("click", function (e) {
                _this.bt_EVT = e.currentTarget;
                _this.bt_DIV = _this.bt_EVT;
                _this.bt_ID = _this.bt_DIV.id;
                switch (_this.bt_ID) {
                    case "NWD":
                        _this.operation_NWD(); // OK
                        break;
                    case "NWW":
                        _this.operation_NWW(); // OK
                        break;
                    case "FAC":
                        _this.operation_FAC(); // OK
                        break;
                    case "DEL":
                        _this.operation_DEL(); // OK
                        break;
                    case "AC":
                        _this.operation_AC(); // OK
                        break;
                    case ",":
                        _this.operation_Comma(); // OK
                        break;
                    default:
                        _this.operation_Number(_this.bt_ID); // OK
                        break;
                }
            }, false);
        }
    },
    operation_NWD: function () {
        // Jeżeli w wyrazie występuje znak [,], wyświetl błąd i zablokuj dalszą część operacji:
        this.FAC_isNotComma = true;
        for (var i = 0; i < this.value.length; i++) {
            if (this.value[i] === ",") {
                this.FAC_isNotComma = false;
            }
        }
        // Przygotowywanie liczba na faktoryzację:
        if (this.FAC_isNotComma === false) {
            if (this.value[this.value.length - 1] === " ") {
                this.screen_INFO.textContent = "Błąd! Nie możesz zostawić pustego pola";
                return;
            }
            else {
                this.Both_FAC_InitialValues_STR = this.value.split(", ");
            }
            if (this.Both_FAC_InitialValues_STR.length < 2) {
                this.screen_INFO.textContent = "Błąd! Potrzebujesz min 2 liczby";
                return;
            }
            // Sprawdzanie czy wszystkie liczby (na faktoryzację) są większe niż 1:
            for (var i = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                if (this.Both_FAC_InitialValues_STR[i] === "0" || this.Both_FAC_InitialValues_STR[i] === "1") {
                    this.screen_INFO.textContent = "Błąd! Liczby muszą być większe niż 1";
                    return;
                }
            }
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // PATRYKOWY algorytm na obliczanie NWD: (Algorytm EUKLIDESA działa tylko w przypadku dwóch liczba, a ja chciałem zrobić dla dowolnej ilości liczb!)
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            // Rozkład liczby na czynniki pierwsze (inna metoda, argument = 1 liczba):
            this.Both_FAC_FractedNum = [[], []];
            for (var i = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                this.Both_FAC_FractedNum[i] = this.operation_More_FAC(Number(this.Both_FAC_InitialValues_STR[i]));
            }
            // Obliczanie NWD:
            this.result = 1;
            var base_AR = this.Both_FAC_FractedNum[0];
            var compare_AR = [[]];
            for (var i = 1; i < this.Both_FAC_FractedNum.length; i++) {
                compare_AR[i - 1] = this.Both_FAC_FractedNum[i];
            }
            var compaseEqualBase_TARGET = compare_AR.length;
            var compaseEqualBase_COUNTER = 0;
            var properFactor_AR = [];
            var properFactor_VAL = 0;
            for (var i = 0; i < base_AR.length; i++) {
                compaseEqualBase_COUNTER = 0;
                for (var j = 0; j < compare_AR.length; j++) {
                    for (var k = 0; k < compare_AR[j].length; k++) {
                        if (base_AR[i] === compare_AR[j][k]) {
                            compaseEqualBase_COUNTER++;
                            properFactor_VAL = compare_AR[j][k];
                            compare_AR[j].splice(k, 1);
                            break;
                        }
                    }
                }
                if (compaseEqualBase_COUNTER === compaseEqualBase_TARGET) {
                    properFactor_AR.push(properFactor_VAL);
                }
            }
            for (var i = 0; i < properFactor_AR.length; i++) {
                this.result *= properFactor_AR[i];
            }
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            this.screen_VALUE.textContent = String(this.result);
            this.value = this.screen_VALUE.textContent;
            // Wyświetlanie informacji:
            this.screen_INFO.textContent = "NWD | ";
            for (var i = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                this.screen_INFO.textContent += this.Both_FAC_InitialValues_STR[i] + ", ";
            }
            this.screen_INFO.textContent = this.screen_INFO.textContent.slice(0, (this.screen_INFO.textContent.length - 2));
            this.screen_INFO.textContent += " | Wynik:";
        }
        else if (this.FAC_isNotComma === true) {
            this.screen_INFO.textContent = "Błąd! Przy NWD potrzeba min 2 liczb";
        }
    },
    operation_NWW: function () {
        // Jeżeli w wyrazie występuje znak [,], wyświetl błąd i zablokuj dalszą część operacji:
        this.FAC_isNotComma = true;
        for (var i = 0; i < this.value.length; i++) {
            if (this.value[i] === ",") {
                this.FAC_isNotComma = false;
            }
        }
        // Przygotowywanie liczba na faktoryzację:
        if (this.FAC_isNotComma === false) {
            if (this.value[this.value.length - 1] === " ") {
                this.screen_INFO.textContent = "Błąd! Nie możesz zostawić pustego pola";
                return;
            }
            else {
                this.Both_FAC_InitialValues_STR = this.value.split(", ");
            }
            if (this.Both_FAC_InitialValues_STR.length < 2) {
                this.screen_INFO.textContent = "Błąd! Potrzebujesz min 2 liczby";
                return;
            }
            // Sprawdzanie czy wszystkie liczby (na faktoryzację) są większe niż 1:
            for (var i = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                if (this.Both_FAC_InitialValues_STR[i] === "0" || this.Both_FAC_InitialValues_STR[i] === "1") {
                    this.screen_INFO.textContent = "Błąd! Liczby muszą być większe niż 1";
                    return;
                }
            }
            // Rozkład liczby na czynniki pierwsze (inna metoda, argument = 1 liczba):
            this.Both_FAC_FractedNum = [[], []];
            for (var i = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                this.Both_FAC_FractedNum[i] = this.operation_More_FAC(Number(this.Both_FAC_InitialValues_STR[i]));
            }
            // Kasownie liczb powtarzających się w "compare_AR" (tablicy dwuwymiarowej porównawczej):
            var base_AR = this.Both_FAC_FractedNum[0];
            var compare_AR = [[]];
            for (var i = 1; i < this.Both_FAC_FractedNum.length; i++) {
                compare_AR[i - 1] = this.Both_FAC_FractedNum[i];
            }
            for (var i = 0; i < base_AR.length; i++) {
                for (var j = 0; j < compare_AR.length; j++) {
                    for (var k = 0; k < compare_AR[j].length; k++) {
                        if (base_AR[i] === compare_AR[j][k]) {
                            compare_AR[j].splice(k, 1);
                            break;
                        }
                    }
                }
            }
            // Obliczanie NWW:
            this.result = 1;
            for (var i = 0; i < base_AR.length; i++) {
                this.result *= base_AR[i];
            }
            for (var i = 0; i < compare_AR.length; i++) {
                for (var j = 0; j < compare_AR[i].length; j++) {
                    this.result *= compare_AR[i][j];
                }
            }
            this.screen_VALUE.textContent = this.result;
            this.value = this.screen_VALUE.textContent;
            // Wyświeetlanie informacji:
            this.screen_INFO.textContent = "NWW | ";
            for (var i = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                this.screen_INFO.textContent += this.Both_FAC_InitialValues_STR[i] + ", ";
            }
            this.screen_INFO.textContent = this.screen_INFO.textContent.slice(0, (this.screen_INFO.textContent.length - 2));
            this.screen_INFO.textContent += " | Wynik:";
        }
        else if (this.FAC_isNotComma === true) {
            this.screen_INFO.textContent = "Błąd! Przy NWD potrzeba min 2 liczb";
        }
    },
    operation_More_FAC: function (toFacNum) {
        // Rozkład liczby całkowitej na czynniki pierwsze: (metoda samodzielna zwracająca wynik)
        console.clear();
        var result_AR = [];
        this.FAC_dividedNumber = toFacNum;
        while (this.FAC_dividedNumber > 1) {
            this.FAC_factor = 2;
            this.FAC_isDivided = false;
            while (this.FAC_isDivided === false) {
                if (this.FAC_dividedNumber % this.FAC_factor === 0) {
                    this.FAC_isDivided = true;
                    result_AR.push(this.FAC_factor);
                    this.FAC_dividedNumber = this.FAC_dividedNumber / this.FAC_factor;
                }
                else if (this.FAC_dividedNumber % this.FAC_factor !== 0) {
                    this.FAC_factor++;
                }
            }
        }
        // Zwrót wyniku:
        return result_AR;
    },
    operation_FAC: function () {
        // Jeżeli w wyrazie występuje znak [,], wyświetl błąd i zablokuj dalszą część operacji:
        this.FAC_isNotComma = true;
        for (var i = 0; i < this.value.length; i++) {
            if (this.value[i] === ",") {
                this.FAC_isNotComma = false;
            }
        }
        // Rozkład liczby całkowitej na czynniki pierwsze
        if (this.FAC_isNotComma === true) {
            this.result = "";
            this.FAC_dividedNumber = Number(this.value);
            while (this.FAC_dividedNumber > 1) {
                this.FAC_factor = 2;
                this.FAC_isDivided = false;
                while (this.FAC_isDivided === false) {
                    if (this.FAC_dividedNumber % this.FAC_factor === 0) {
                        this.FAC_isDivided = true;
                        this.result += String(this.FAC_factor) + ", ";
                        this.FAC_dividedNumber = this.FAC_dividedNumber / this.FAC_factor;
                        //alert("Czynniki: " + this.result + " | Pozostałość: " + this.FAC_dividedNumber + "| i: " + this.FAC_factor);
                    }
                    else if (this.FAC_dividedNumber % this.FAC_factor !== 0) {
                        this.FAC_factor++;
                    }
                }
            }
            this.screen_INFO.textContent = "FAC | " + this.value + " | Wynik:";
            this.result = this.result.slice(0, this.result.length - 2);
            this.FAC_isNotComma = true;
            // Wyznaczanie liczby pierwszej:
            for (var i = 0; i < this.result.length; i++) {
                if (this.result[i] === ",") {
                    this.FAC_isNotComma = false;
                }
            }
            // Przypadek z liczbą 0:
            if (this.FAC_isNotComma === false) {
            }
            else if (this.FAC_isNotComma === true) {
                (this.value === "0") ? this.result = "0" : this.result = "Liczba pierwsza";
                this.value = "0";
            }
            this.screen_VALUE.textContent = this.result;
            this.value = this.result; // OSTATNIA WAŻNA ZMIANA!
        }
        else if (this.FAC_isNotComma === false) {
            this.screen_INFO.textContent = "Błąd! Przy FAC nie można używać znaku (,)";
        }
    },
    operation_DEL: function () {
        if (this.screen_VALUE.textContent === "Liczba pierwsza") {
            this.value = "0";
            this.screen_INFO.textContent = "Wartość została skasowana";
        }
        else {
            // Jeżeli ostatni indeks ma wartość " " (" " za znakiem [,]), skasuj dwa miejsca, w przeciwnym razie 1:
            if (this.value[this.value.length - 1] === " ") {
                this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 2));
            }
            else {
                this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 1));
            }
            if (this.value.length === 0) {
                this.value = "0";
            }
            this.screen_INFO.textContent = "Skrócono wartość";
        }
        this.screen_VALUE.textContent = this.value;
    },
    operation_AC: function () {
        this.value = "0";
        this.screen_VALUE.textContent = this.value;
        this.screen_INFO.textContent = "Skasowano wartość";
    },
    operation_Comma: function () {
        if (this.value === "Liczba pierwsza") {
            this.value = "0";
            this.screen_INFO.textContent = "Wartość została skasowana";
        }
        else {
            if (this.value[this.value.length - 1] !== " ") {
                this.value += ", ";
                this.screen_INFO.textContent = "Utworzono pole na nową liczbę";
            }
            else {
                this.screen_INFO.textContent = "Błąd! Nie wolno zostawić pustego pola";
                return;
            }
        }
        this.screen_VALUE.textContent = this.value;
    },
    operation_Number: function (numKey) {
        // Jeżeli długośc wyrazu wynosi 1 i ma on wartośc 0, skasuj 0, a wstaw cyfrę, w przeciwnym razie dodaj cyfrę do wyrażenia:
        if (this.screen_INFO.textContent[this.screen_INFO.textContent.length - 1] !== ":") {
            if (this.value.length === 1 && this.value === "0") {
                this.value = numKey;
            }
            else if (this.value.length > 1 || this.value !== "0") {
                this.value += numKey;
            }
            this.screen_VALUE.textContent = this.value;
            this.screen_INFO.textContent = "Wpisano cyfrę";
        }
    },
};
Calculator_NWD_NWW_Faction_FUNCTIONS.setButtons_AEL();
