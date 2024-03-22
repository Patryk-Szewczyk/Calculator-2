var Layout_ALL = {
    setAppBody_Height_AEL: function () {
        var appBody_EL = document.querySelector('div.app-body');
        ['load', 'resize'].forEach(function (ev) {
            addEventListener(ev, function () {
                appBody_EL.style.height = window.innerHeight + 'px';
            }, false);
        });
    }
};
Layout_ALL.setAppBody_Height_AEL();
var Layout_DESKTOP = {
    setMenuButton_AEL: function () {
        var menuButton_EL = document.querySelector('svg.dsk-menu-arrow');
        var isShow = false;
        menuButton_EL.addEventListener('click', function () {
            var sidebar = document.querySelector('nav.dsk-nav-menu');
            switch (isShow) {
                case false:
                    {
                        isShow = true;
                        setTimeout(function () {
                            sidebar.style.left = '0px';
                            menuButton_EL.style.transform = 'rotateZ(0deg)';
                            sidebar.style.transitionDuration = '0.35s';
                        }, 1);
                    }
                    break;
                case true:
                    {
                        isShow = false;
                        setTimeout(function () {
                            sidebar.style.left = '-300px';
                            menuButton_EL.style.transform = 'rotateZ(180deg)';
                            sidebar.style.transitionDuration = '0.35s';
                        }, 1);
                    }
                    break;
            }
        }, false);
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
    //localStorage_AR: [],
    clcBt_EVT: undefined,
    clcBt_DIV: null,
    clcBt_ID: 0,
    clcType_EL: null,
    setPageOpenCalc_AEL: function () {
        var _this = this;
        //this.localStorage_AR.push([{ calculator: "00", history: "none" }]);
        var calcButton_COLL = document.querySelector('div.nav-button-box').children;
        var titleArea_EL = document.querySelector('div.cb-title');
        var calcType_EL = document.querySelectorAll('div[class^="ct-"]');
        for (var i = 0; i < calcButton_COLL.length; i++) {
            calcButton_COLL[i].addEventListener('click', function (e) {
                _this.clcBt_EVT = e.currentTarget;
                _this.clcBt_DIV = _this.clcBt_EVT;
                _this.clcBt_ID = Number(_this.clcBt_DIV.id.slice(4, 6));
                switch (_this.clcBt_ID) {
                    case 0:
                        titleArea_EL.textContent = 'Kalkulator podstawowy';
                        for (var i_1 = 0; i_1 < calcType_EL.length; i_1++) {
                            if (i_1 === _this.clcBt_ID) {
                                _this.clcType_EL = calcType_EL[i_1];
                                _this.clcType_EL.style.display = 'block';
                            }
                            else {
                                _this.clcType_EL = calcType_EL[i_1];
                                _this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', '0');
                        break;
                    case 1:
                        titleArea_EL.textContent = 'Kalkulator binarny';
                        //this.clcType_EL.style.display = "none";
                        for (var i_2 = 0; i_2 < calcType_EL.length; i_2++) {
                            if (i_2 === _this.clcBt_ID) {
                                _this.clcType_EL = calcType_EL[i_2];
                                _this.clcType_EL.style.display = 'block';
                            }
                            else {
                                _this.clcType_EL = calcType_EL[i_2];
                                _this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', '1');
                        break;
                    case 2:
                        titleArea_EL.textContent = 'Logika matematyczna';
                        //this.clcType_EL.style.display = "none";
                        for (var i_3 = 0; i_3 < calcType_EL.length; i_3++) {
                            if (i_3 === _this.clcBt_ID) {
                                _this.clcType_EL = calcType_EL[i_3];
                                _this.clcType_EL.style.display = 'block';
                            }
                            else {
                                _this.clcType_EL = calcType_EL[i_3];
                                _this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', '2');
                        break;
                    case 3:
                        titleArea_EL.textContent = 'NWD NWW Faktoryzacja';
                        //this.clcType_EL.style.display = "none";
                        for (var i_4 = 0; i_4 < calcType_EL.length; i_4++) {
                            if (i_4 === _this.clcBt_ID) {
                                _this.clcType_EL = calcType_EL[i_4];
                                _this.clcType_EL.style.display = 'block';
                            }
                            else {
                                _this.clcType_EL = calcType_EL[i_4];
                                _this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', '3');
                        break;
                }
            }, false);
        }
    },
    getLocalStorage: function () {
        var titleArea_EL = document.querySelector('div.cb-title');
        var calcType_EL = document.querySelectorAll('div[class^="ct-"]');
        var calcType = localStorage.getItem('calculator');
        (calcType === undefined || calcType === null) ? calcType = '0' : calcType;
        if (calcType) {
            switch (Number(calcType)) {
                case 0:
                    titleArea_EL.textContent = 'Kalkulator podstawowy';
                    for (var i = 0; i < calcType_EL.length; i++) {
                        if (i === Number(calcType)) {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'block';
                        }
                        else {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'none';
                        }
                    }
                    break;
                case 1:
                    titleArea_EL.textContent = 'Kalkulator binarny';
                    for (var i = 0; i < calcType_EL.length; i++) {
                        if (i === Number(calcType)) {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'block';
                        }
                        else {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'none';
                        }
                    }
                    break;
                case 2:
                    titleArea_EL.textContent = 'Logika matematyczna';
                    for (var i = 0; i < calcType_EL.length; i++) {
                        if (i === Number(calcType)) {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'block';
                        }
                        else {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'none';
                        }
                    }
                    break;
                case 3:
                    titleArea_EL.textContent = 'NWD NWW Faktoryzacja';
                    for (var i = 0; i < calcType_EL.length; i++) {
                        if (i === Number(calcType)) {
                            this.clcType_EL = calcType_EL[i];
                            this.clcType_EL.style.display = 'block';
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
//console.log(LocalStorage_ALL.localStorage_AR);
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
                //console.log(this.bt_ID);
                switch (_this.bt_ID) {
                    case "NWD":
                        _this.operation_NWD(_this.bt_ID);
                        break;
                    case "NWW":
                        _this.operation_NWW();
                        break;
                    case "FAC":
                        _this.operation_FAC();
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
    operation_NWD: function (mode) {
        console.log(mode);
        // Jeżeli w wyrazie występuje znak [,], wyświetl błąd i zablokuj dalszą część operacji:
        this.FAC_isNotComma = true;
        for (var i = 0; i < this.value.length; i++) {
            if (this.value[i] === ",") {
                this.FAC_isNotComma = false;
            }
        }
        // Rozkład liczby całkowitej na czynniki pierwsze:
        if (this.FAC_isNotComma === false) {
            if (this.value[this.value.length - 1] === " ") {
                this.value = this.value.slice(0, (this.value.length - 2));
                this.Both_FAC_InitialValues_STR = this.value.split(", ");
                // Powrót usuniętych dwóch stringowych indeksów, aby kiedy będę dodawał liczby, pojawiały się po przecinku.
                // Bez tej linijki przecinek znika, tzn. jest usuwany, ale nie jest ponownie wstawiany:
                this.value = this.value += ", ";
                //console.log(this.Both_FAC_InitialValues_STR);
            }
            else {
                this.Both_FAC_InitialValues_STR = this.value.split(", ");
                //console.log(this.Both_FAC_InitialValues_STR);
            }
            //this.Both_FAC_InitialValues_STR = this.value.split(", ");
            // Wkładanie kolejno każdej liczby w metodę obliczającą rozkład liczby na czynniki pierwsze:
            for (var i = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                this.Both_FAC_FractedNum = this.operation_More_FAC(Number(this.Both_FAC_InitialValues_STR[i]));
            }
        }
        else if (this.FAC_isNotComma === true) {
            this.screen_INFO.textContent = "Błąd! Przy NWD potrzeba min 2 liczb";
        }
    },
    operation_NWW: function () {
        //console.log(mode);
    },
    operation_More_FAC: function (toFacNum) {
        // Rozkład liczby całkowitej na czynniki pierwsze:
        console.log(toFacNum);
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
        this.value += ", ";
        this.screen_VALUE.textContent = this.value;
        this.screen_INFO.textContent = "Utworzono pole na nową wartość";
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
// Błąd! Przy NWW nie można używać [,]
// Błąd! Przy FAC nie można używać [,]
// Błąd! Muszisz podać minimum 2 liczby   // NWD i NWW
// [liczba] | NWD | Wynik:   // [liczba]
// [liczba] | NWW | Wynik:   // [liczba]
// [liczba] | FAC | Wynik:   // [liczby], ["liczba pierwsza"]
// Błąd! Wprowadź poprawne dane
