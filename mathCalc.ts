const Layout_ALL: {
    setAppBody_Height_AEL: Function,
} = {
    setAppBody_Height_AEL(): void {
        const appBody_EL: HTMLDivElement = document.querySelector('div.app-body');
        ['load', 'resize'].forEach((ev) => {
            addEventListener(ev, () => {
                appBody_EL.style.height = window.innerHeight + 'px';
            }, false);
        });
    }
}
Layout_ALL.setAppBody_Height_AEL();



const Layout_DESKTOP: {
    setMenuButton_AEL: Function,
    setScrollBarPosition: Function  // Ustawienie pozycji scrollbaru na właściwym miejscu (ekran kalkulatora)
} = {
    setMenuButton_AEL(): void {
        const menuButton_EL: HTMLDivElement = document.querySelector('svg.dsk-menu-arrow');
        let isShow: boolean = false;
        menuButton_EL.addEventListener('click', () => {
            const sidebar: HTMLElement = document.querySelector('nav.dsk-nav-menu');
            switch (isShow){
                case false: {
                    isShow = true;
                    setTimeout(() => {
                        sidebar.style.left = '0px';
                        menuButton_EL.style.transform = 'rotateZ(0deg)';
                        sidebar.style.transitionDuration = '0.35s';
                    }, 1);
                } break;
                case true: {
                    isShow = false;
                    setTimeout(() => {
                        sidebar.style.left = '-300px';
                        menuButton_EL.style.transform = 'rotateZ(180deg)';
                        sidebar.style.transitionDuration = '0.35s';
                    }, 1);
                } break;
            }
        }, false);
    },
    setScrollBarPosition() {
        window.addEventListener("DOMContentLoaded", () => {
            const container: NodeListOf<Element> = document.querySelectorAll('.ct-refactoring > .screen > .screen-position > .screen-hanger > .info, .ct-refactoring > .screen > .screen-position > .screen-hanger > .value');
            for (let i: number = 0; i < container.length; i++) {
                container[i].scrollLeft = container[i].scrollWidth;
            }
        }, false);
    }
}
Layout_DESKTOP.setMenuButton_AEL();
Layout_DESKTOP.setScrollBarPosition();



const LocalStorage_ALL: {
    setPageOpenCalc_AEL: Function,
    clcBt_EVT: EventTarget,
    clcBt_DIV: HTMLDivElement,
    clcBt_ID: number,
    clcType_EL: HTMLDivElement,
    getLocalStorage: Function,
    //localStorage_AR: [{ calculator: string, history: string }][]
} = {
    //localStorage_AR: [],
    clcBt_EVT: undefined,
    clcBt_DIV: null,
    clcBt_ID: 0,
    clcType_EL: null,
    setPageOpenCalc_AEL(): void {
        //this.localStorage_AR.push([{ calculator: "00", history: "none" }]);
        const calcButton_COLL: HTMLCollection = document.querySelector('div.nav-button-box').children;
        //const titleArea_EL: HTMLDivElement = document.querySelector('div.cb-title');
        const calcType_EL: NodeList = document.querySelectorAll('div[class^="ct-"]');
        for (let i: number = 0; i < calcButton_COLL.length; i++){
            calcButton_COLL[i].addEventListener('click', (e) => {
                this.clcBt_EVT = e.currentTarget;
                this.clcBt_DIV = this.clcBt_EVT as HTMLDivElement;
                this.clcBt_ID = Number(this.clcBt_DIV.id.slice(4, 6));
                switch (this.clcBt_ID) {
                    case 0:
                        //titleArea_EL.textContent = 'Kalkulator podstawowy';
                        for (let i: number = 0; i < calcType_EL.length; i++) {
                            if (i === this.clcBt_ID) {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'block';
                            } else {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', '0');
                        break;
                    case 1:
                        //titleArea_EL.textContent = 'Logika matematyczna';
                        //this.clcType_EL.style.display = "none";
                        for (let i: number = 0; i < calcType_EL.length; i++) {
                            if (i === this.clcBt_ID) {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'block';
                            } else {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', '1');
                        break;
                    case 2:
                        //titleArea_EL.textContent = 'Algorytm euklidesa';
                        //this.clcType_EL.style.display = "none";
                        for (let i: number = 0; i < calcType_EL.length; i++) {
                            if (i === this.clcBt_ID) {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'block';
                            } else {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', '2')
                        break;
                    case 3:
                        //titleArea_EL.textContent = 'NWD NWW Faktoryzacja';
                        //this.clcType_EL.style.display = "none";
                        for (let i: number = 0; i < calcType_EL.length; i++) {
                            if (i === this.clcBt_ID) {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'block';
                            } else {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', '3');
                        break;
                }
            }, false);
        }
    },
    getLocalStorage(): void {
        //const titleArea_EL: HTMLDivElement = document.querySelector('div.cb-title');
        const calcType_EL: NodeList = document.querySelectorAll('div[class^="ct-"]');
        let calcType = localStorage.getItem('calculator');
        (calcType === undefined || calcType === null) ? calcType = '0' : calcType;
        if (calcType) {
            switch (Number(calcType)) {
                case 0:
                    //titleArea_EL.textContent = 'Kalkulator podstawowy';
                    for (let i: number = 0; i < calcType_EL.length; i++) {
                        if (i === Number(calcType)) {
                            this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                            this.clcType_EL.style.display = 'block';
                        } else {
                            this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                            this.clcType_EL.style.display = 'none';
                        }
                    }
                    break;
                case 1:
                    //titleArea_EL.textContent = 'Logika matematyczna';
                    for (let i: number = 0; i < calcType_EL.length; i++) {
                        if (i === Number(calcType)) {
                            this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                            this.clcType_EL.style.display = 'block';
                        } else {
                            this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                            this.clcType_EL.style.display = 'none';
                        }
                    }
                    break;
                case 2:
                    //titleArea_EL.textContent = 'Algorytm Euklidesa';
                    for (let i: number = 0; i < calcType_EL.length; i++) {
                        if (i === Number(calcType)) {
                            this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                            this.clcType_EL.style.display = 'block';
                        } else {
                            this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                            this.clcType_EL.style.display = 'none';
                        }
                    }
                    break;
                case 3:
                    //titleArea_EL.textContent = 'NWD NWW Faktoryzacja';
                    for (let i: number = 0; i < calcType_EL.length; i++) {
                        if (i === Number(calcType)) {
                            this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                            this.clcType_EL.style.display = 'block';
                        } else {
                            this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                            this.clcType_EL.style.display = 'none';
                        }
                    }
                    break;
            }
        }
    }
}
LocalStorage_ALL.getLocalStorage();
LocalStorage_ALL.setPageOpenCalc_AEL();



const Calculator_Basic_FUNCTIONS: {
    //
} = {
    //
}



const Calculator_MathLogic_FUNCTIONS: {
    //
} = {
    //
}



const Calculator_Euklides_FUNCTIONS: {
    setButtons_AEL: Function,
    bt_EVT: EventTarget,
    bt_DIV: HTMLDivElement,
    bt_ID: string,
    value: string,
    result: string,
    screen_INFO: HTMLDivElement,
    screen_VALUE: HTMLDivElement,
    operation_EUK: Function,
    operation_DEL: Function,
    operation_AC: Function,
    operation_Comma: Function,
    operation_Number: Function
} = {
    bt_EVT: undefined,
    bt_DIV: null,
    bt_ID: "",
    value: "0",
    result: "",
    screen_INFO:  document.querySelector('.ct-euklides > .screen > .screen-position > .screen-hanger > .info'),
    screen_VALUE: document.querySelector('.ct-euklides > .screen > .screen-position > .screen-hanger > .value'),
    setButtons_AEL(): void {
        const button_COLL: HTMLCollection = document.querySelector('.ct-euklides > .buttons-group').children;
        for (let i: number = 0; i < button_COLL.length; i++) {
            button_COLL[i].addEventListener("click", (e) => {
                this.bt_EVT = e.currentTarget;
                this.bt_DIV = this.bt_EVT as HTMLDivElement;
                this.bt_ID = this.bt_DIV.id;
                switch(this.bt_ID) {
                    case "=":
                        this.operation_EUK(this.bt_ID);  // OK
                        break;
                    case "DEL":
                        this.operation_DEL(this.bt_ID);  // OK
                        break;
                    case "AC":
                        this.operation_AC(this.bt_ID);  // OK
                        break;
                    case ",":
                        this.operation_Comma(this.bt_ID);  // OK
                        break;
                    default:
                        this.operation_Number(this.bt_ID);  // OK
                        break;
                }
            }, false);
        }
    },
    operation_EUK(id: string): void {
        // Walidacja poprawności wpisanych danych:
        let baseNum_AR: number[] = this.value.split(", ");
        if (baseNum_AR.length !== 2) {
            if (this.value[this.value.length - 1] === " ") {
                this.screen_INFO.textContent = "Błąd! Nie wolno zostawić pustego pola";
            } else {
                this.screen_INFO.textContent = "Błąd! Wymagana ilość liczb wynosi: 2";
            }
            return;
        } else {
            if (this.value[this.value.length - 1] === " ") {
                this.screen_INFO.textContent = "Błąd! Nie wolno zostawić pustego pola";
                return;
            }
        }
        // Algorytm euklidesa:
        let a_LEFT: number = baseNum_AR[0], b_RIGHT: number = baseNum_AR[1];
        while(a_LEFT !== b_RIGHT) {
            if (a_LEFT > b_RIGHT) {
                a_LEFT = a_LEFT - b_RIGHT;
            } else if (a_LEFT < b_RIGHT) {
                b_RIGHT = b_RIGHT - a_LEFT;
            }
            // Dodatkowy przypadek: Kiedy liczby są równe - jest potrebny w kontekście poniższego dodatkowego przypadku:
            if (a_LEFT === b_RIGHT) {
                this.value = String(a_LEFT);
                this.screen_VALUE.textContent = this.value;
            }
            // Dodatkowy przypadek: Kiedy liczby "a" i "b" mają ujemne wartości: (zapobiegnięcie nieskończonej teracji, kiedy liczby nigdy nie będą sobie równe)
            if (a_LEFT < 0 && b_RIGHT < 0) {
                this.value = "1";
                this.screen_VALUE.textContent = this.value;
                return;
            }
        }
        //alert("Wynik: " + this.result);
    },
    operation_DEL(id: string): void {
        if (this.value[this.value.length - 1] === " ") {
            this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 2));
        } else {
            this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 1));
        }
        if (this.value.length === 0) {
            this.value = "0";
        }
        this.screen_VALUE.textContent = this.value;
        this.screen_INFO.textContent = "Skrócono wartość";
    },
    operation_AC(id: string): void {
        this.value = "0";
        this.screen_VALUE.textContent = this.value;
        this.screen_INFO.textContent = "Skasowano wartość";
    },
    operation_Comma(id: string): void {
        if (this.value[this.value.length - 1] !== " ") {
            this.value += ", ";
            this.screen_INFO.textContent = "Utworzono pole na nową liczbę";
            this.screen_VALUE.textContent = this.value;
        } else {
            this.screen_INFO.textContent = "Błąd! Nie wolno zostawić pustego pola";
            return;
        }
    },
    operation_Number(numKey: string): void {
        // Jeżeli długośc wyrazu wynosi 1 i ma on wartośc 0, skasuj 0, a wstaw cyfrę, w przeciwnym razie dodaj cyfrę do wyrażenia:
        if (this.screen_INFO.textContent[this.screen_INFO.textContent.length - 1] !== ":") {
            if (this.value.length === 1 && this.value === "0") {
                this.value = numKey;
            } else if (this.value.length > 1 || this.value !== "0") {
                this.value += numKey;
            }
            this.screen_VALUE.textContent = this.value;
            this.screen_INFO.textContent = "Wpisano cyfrę";
        }
    }
}
Calculator_Euklides_FUNCTIONS.setButtons_AEL();



const Calculator_NWD_NWW_Faction_FUNCTIONS: {
    setButtons_AEL: Function
    bt_EVT: EventTarget,
    bt_DIV: HTMLDivElement,
    bt_ID: string,
    value: string,
    result: string,
    screen_INFO: HTMLDivElement,
    screen_VALUE: HTMLDivElement,
    operation_NWD: Function,
    operation_NWW: Function,
    operation_More_FAC: Function,
    Both_FAC_FractedNum: number[][],
    Both_FAC_InitialValues_STR: string[],
    operation_FAC: Function,
    FAC_isNotComma: boolean,
    FAC_isDivided: boolean,
    FAC_dividedNumber: number,
    FAC_factor: number,
    operation_DEL: Function,
    operation_AC: Function,
    operation_Comma: Function,
    operation_Number: Function
} = {
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
    screen_INFO:  document.querySelector('.ct-refactoring > .screen > .screen-position > .screen-hanger > .info'),
    screen_VALUE: document.querySelector('.ct-refactoring > .screen > .screen-position > .screen-hanger > .value'),
    setButtons_AEL(): void {
        const button_COLL: HTMLCollection = document.querySelector('.ct-refactoring > .buttons-group').children;
        for (let i: number = 0; i < button_COLL.length; i++) {
            button_COLL[i].addEventListener("click", (e) => {
                this.bt_EVT = e.currentTarget;
                this.bt_DIV = this.bt_EVT as HTMLDivElement;
                this.bt_ID = this.bt_DIV.id;
                switch(this.bt_ID) {
                    case "NWD":
                        this.operation_NWD();  // OK
                        break;
                    case "NWW":
                        this.operation_NWW();  // OK
                        break;
                    case "FAC":
                        this.operation_FAC();  // OK
                        break;
                    case "DEL":
                        this.operation_DEL();  // OK
                        break;
                    case "AC":
                        this.operation_AC();  // OK
                        break;
                    case ",":
                        this.operation_Comma();  // OK
                        break;
                    default:
                        this.operation_Number(this.bt_ID);  // OK
                        break;
                }
            }, false);
        }
    },
    operation_NWD(): void {
        // Jeżeli w wyrazie występuje znak [,], wyświetl błąd i zablokuj dalszą część operacji:
        this.FAC_isNotComma = true;
        for (let i: number = 0; i < this.value.length; i++) {
            if (this.value[i] === ",") {
                this.FAC_isNotComma = false;
            }
        }
        // Przygotowywanie liczba na faktoryzację:
        if (this.FAC_isNotComma === false) {
            if (this.value[this.value.length - 1] === " ") {
                this.screen_INFO.textContent = "Błąd! Nie możesz zostawić pustego pola";
                return;
            } else {
                this.Both_FAC_InitialValues_STR = this.value.split(", ");
            }
            if (this.Both_FAC_InitialValues_STR.length < 2) {
                this.screen_INFO.textContent = "Błąd! Potrzebujesz min 2 liczby";
                return;
            }
            // Sprawdzanie czy wszystkie liczby (na faktoryzację) są większe niż 1:
            for (let i: number = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
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
            for (let i: number = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                this.Both_FAC_FractedNum[i] = this.operation_More_FAC(Number(this.Both_FAC_InitialValues_STR[i]));
            }
            // Obliczanie NWD:
            this.result = 1;
            let base_AR: number[] = this.Both_FAC_FractedNum[0];
            let compare_AR: number[][] = [[]];
            for (let i: number = 1; i < this.Both_FAC_FractedNum.length; i++) {
                compare_AR[i - 1] = this.Both_FAC_FractedNum[i];
            }
            let compaseEqualBase_TARGET: number = compare_AR.length;
            let compaseEqualBase_COUNTER: number = 0;
            let properFactor_AR: number[] = [];
            let properFactor_VAL: number = 0;
            for (let i: number = 0; i < base_AR.length; i++) {
                compaseEqualBase_COUNTER = 0;
                for (let j: number = 0; j < compare_AR.length; j++) {
                    for (let k: number = 0; k < compare_AR[j].length; k++) {
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
            for (let i: number = 0; i < properFactor_AR.length; i++) {
                this.result *= properFactor_AR[i];
            }
            // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            this.screen_VALUE.textContent = String(this.result);
            this.value = this.screen_VALUE.textContent;
            // Wyświeetlanie informacji:
            this.screen_INFO.textContent = "NWD | ";
            for (let i: number = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                this.screen_INFO.textContent += this.Both_FAC_InitialValues_STR[i] + ", ";
            }
            this.screen_INFO.textContent = this.screen_INFO.textContent.slice(0, (this.screen_INFO.textContent.length - 2));
            this.screen_INFO.textContent += " | Wynik:";
        }
        else if (this.FAC_isNotComma === true) {
            this.screen_INFO.textContent = "Błąd! Przy NWD potrzeba min 2 liczb";
        }
    },
    operation_NWW(): void {
        // Jeżeli w wyrazie występuje znak [,], wyświetl błąd i zablokuj dalszą część operacji:
        this.FAC_isNotComma = true;
        for (let i: number = 0; i < this.value.length; i++) {
            if (this.value[i] === ",") {
                this.FAC_isNotComma = false;
            }
        }
        // Przygotowywanie liczba na faktoryzację:
        if (this.FAC_isNotComma === false) {
            if (this.value[this.value.length - 1] === " ") {
                this.screen_INFO.textContent = "Błąd! Nie możesz zostawić pustego pola";
                return;
            } else {
                this.Both_FAC_InitialValues_STR = this.value.split(", ");
            }
            if (this.Both_FAC_InitialValues_STR.length < 2) {
                this.screen_INFO.textContent = "Błąd! Potrzebujesz min 2 liczby";
                return;
            }
            // Sprawdzanie czy wszystkie liczby (na faktoryzację) są większe niż 1:
            for (let i: number = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                if (this.Both_FAC_InitialValues_STR[i] === "0" || this.Both_FAC_InitialValues_STR[i] === "1") {
                    this.screen_INFO.textContent = "Błąd! Liczby muszą być większe niż 1";
                    return;
                }
            }
            // Rozkład liczby na czynniki pierwsze (inna metoda, argument = 1 liczba):
            this.Both_FAC_FractedNum = [[], []];
            for (let i: number = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                this.Both_FAC_FractedNum[i] = this.operation_More_FAC(Number(this.Both_FAC_InitialValues_STR[i]));
            }
            // Kasownie liczb powtarzających się w "compare_AR" (tablicy dwuwymiarowej porównawczej):
            let base_AR: number[] = this.Both_FAC_FractedNum[0];
            let compare_AR: number[][] = [[]];
            for (let i: number = 1; i < this.Both_FAC_FractedNum.length; i++) {
                compare_AR[i - 1] = this.Both_FAC_FractedNum[i];
            }
            for (let i: number = 0; i < base_AR.length; i++) {
                for (let j: number = 0; j < compare_AR.length; j++) {
                    for (let k: number = 0; k < compare_AR[j].length; k++) {
                        if (base_AR[i] === compare_AR[j][k]) {
                            compare_AR[j].splice(k, 1);
                            break;
                        }
                    }
                }
            }
            // Obliczanie NWW:
            this.result = 1;
            for (let i: number = 0; i < base_AR.length; i++) {
                this.result *= base_AR[i];
            }
            for (let i: number = 0; i < compare_AR.length; i++) {
                for (let j: number = 0; j < compare_AR[i].length; j++) {
                    this.result *= compare_AR[i][j];
                }
            }
            this.screen_VALUE.textContent = this.result;
            this.value = this.screen_VALUE.textContent;
            // Wyświeetlanie informacji:
            this.screen_INFO.textContent = "NWD | ";
            for (let i: number = 0; i < this.Both_FAC_InitialValues_STR.length; i++) {
                this.screen_INFO.textContent += this.Both_FAC_InitialValues_STR[i] + ", ";
            }
            this.screen_INFO.textContent = this.screen_INFO.textContent.slice(0, (this.screen_INFO.textContent.length - 2));
            this.screen_INFO.textContent += " | Wynik:";
        }
        else if (this.FAC_isNotComma === true) {
            this.screen_INFO.textContent = "Błąd! Przy NWD potrzeba min 2 liczb";
        }
    },
    operation_More_FAC(toFacNum: number): number[] {
        // Rozkład liczby całkowitej na czynniki pierwsze: (metoda samodzielna zwracająca wynik)
        console.clear();
        let result_AR: number[] = [];
        this.FAC_dividedNumber = toFacNum;
        while (this.FAC_dividedNumber > 1) {
            this.FAC_factor = 2;
            this.FAC_isDivided = false;
            while (this.FAC_isDivided === false) {
                if (this.FAC_dividedNumber % this.FAC_factor === 0) {
                    this.FAC_isDivided = true;
                    result_AR.push(this.FAC_factor);
                    this.FAC_dividedNumber = this.FAC_dividedNumber / this.FAC_factor;
                } else if (this.FAC_dividedNumber % this.FAC_factor !== 0) {
                    this.FAC_factor++;
                }
            }
        }
        // Zwrót wyniku:
        return result_AR;
    },
    operation_FAC(): void {
        // Jeżeli w wyrazie występuje znak [,], wyświetl błąd i zablokuj dalszą część operacji:
        this.FAC_isNotComma = true;
        for (let i: number = 0; i < this.value.length; i++) {
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
                    } else if (this.FAC_dividedNumber % this.FAC_factor !== 0) {
                        this.FAC_factor++;
                    }
                }
            }
            this.screen_INFO.textContent = "FAC | " + this.value + " | Wynik:";
            this.result = this.result.slice(0, this.result.length - 2);
            this.FAC_isNotComma = true;



            // Wyznaczanie liczby pierwszej:
            for (let i: number = 0; i < this.result.length; i++) {
                if (this.result[i] === ",") {
                    this.FAC_isNotComma = false;
                }
            }
            // Przypadek z liczbą 0:
            if (this.FAC_isNotComma === false) {
            } else if (this.FAC_isNotComma === true) {
                (this.value === "0") ? this.result = "0" : this.result = "Liczba pierwsza";
                this.value = "0";
            }
            this.screen_VALUE.textContent = this.result;
            this.value = this.result;   // OSTATNIA WAŻNA ZMIANA!
        }
        else if (this.FAC_isNotComma === false) {
            this.screen_INFO.textContent = "Błąd! Przy FAC nie można używać znaku (,)";
        }
    },
    operation_DEL(): void {
        if (this.screen_VALUE.textContent === "Liczba pierwsza") {
            this.value = "0";
            this.screen_INFO.textContent = "Wartość została skasowana";
        } else {
            // Jeżeli ostatni indeks ma wartość " " (" " za znakiem [,]), skasuj dwa miejsca, w przeciwnym razie 1:
            if (this.value[this.value.length - 1] === " ") {
                this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 2));
            } else {
                this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 1));
            }
            if (this.value.length === 0) {
                this.value = "0";
            }
            this.screen_INFO.textContent = "Skrócono wartość";
        }
        this.screen_VALUE.textContent = this.value;
    },
    operation_AC(): void {
        this.value = "0";
        this.screen_VALUE.textContent = this.value;
        this.screen_INFO.textContent = "Skasowano wartość";
    },
    operation_Comma(): void {
        if (this.value === "Liczba pierwsza") {
            this.value = "0";
            this.screen_INFO.textContent = "Wartość została skasowana";
        } else {
            if (this.value[this.value.length - 1] !== " ") {
                this.value += ", ";
                this.screen_INFO.textContent = "Utworzono pole na nową liczbę";
            } else {
                this.screen_INFO.textContent = "Błąd! Nie wolno zostawić pustego pola";
                return;
            }
        }
        this.screen_VALUE.textContent = this.value;
    },
    operation_Number(numKey: string): void {
        // Jeżeli długośc wyrazu wynosi 1 i ma on wartośc 0, skasuj 0, a wstaw cyfrę, w przeciwnym razie dodaj cyfrę do wyrażenia:
        if (this.screen_INFO.textContent[this.screen_INFO.textContent.length - 1] !== ":") {
            if (this.value.length === 1 && this.value === "0") {
                this.value = numKey;
            } else if (this.value.length > 1 || this.value !== "0") {
                this.value += numKey;
            }
            this.screen_VALUE.textContent = this.value;
            this.screen_INFO.textContent = "Wpisano cyfrę";
        }
    },
}
Calculator_NWD_NWW_Faction_FUNCTIONS.setButtons_AEL();



// Błąd! Przy NWW nie można używać [,]
// Błąd! Przy FAC nie można używać [,]
// Błąd! Muszisz podać minimum 2 liczby   // NWD i NWW
// [liczba] | NWD | Wynik:   // [liczba]
// [liczba] | NWW | Wynik:   // [liczba]
// [liczba] | FAC | Wynik:   // [liczby], ["liczba pierwsza"]
// Błąd! Wprowadź poprawne dane
