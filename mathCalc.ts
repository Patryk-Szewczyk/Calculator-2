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
    getLocalStorage: Function
} = {
    clcBt_EVT: undefined,
    clcBt_DIV: null,
    clcBt_ID: 0,
    clcType_EL: null,
    setPageOpenCalc_AEL(): void {
        const calcButton_COLL: HTMLCollection = document.querySelector('div.nav-button-box').children;
        const calcType_EL: NodeList = document.querySelectorAll('div[class^="ct-"]');
        for (let i: number = 0; i < calcButton_COLL.length; i++){
            calcButton_COLL[i].addEventListener('click', (e) => {
                this.clcBt_EVT = e.currentTarget;
                this.clcBt_DIV = this.clcBt_EVT as HTMLDivElement;
                this.clcBt_ID = Number(this.clcBt_DIV.id.slice(4, 6));
                switch (this.clcBt_ID) {
                    case 0:
                        for (let i: number = 0; i < calcType_EL.length; i++) {
                            if (i === this.clcBt_ID) {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'block';
                            } else {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', String(this.clcBt_ID));
                        break;
                    case 1:
                        for (let i: number = 0; i < calcType_EL.length; i++) {
                            if (i === this.clcBt_ID) {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'block';
                            } else {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', String(this.clcBt_ID))
                        break;
                    case 2:
                        for (let i: number = 0; i < calcType_EL.length; i++) {
                            if (i === this.clcBt_ID) {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'block';
                            } else {
                                this.clcType_EL = calcType_EL[i] as HTMLDivElement;
                                this.clcType_EL.style.display = 'none';
                            }
                        }
                        localStorage.setItem('calculator', String(this.clcBt_ID));
                        break;
                }
            }, false);
        }
    },
    getLocalStorage(): void {
        const calcType_EL: NodeList = document.querySelectorAll('div[class^="ct-"]');
        let calcType = localStorage.getItem('calculator');
        (calcType === undefined || calcType === null) ? calcType = '0' : calcType;
        if (calcType) {
            switch (Number(calcType)) {
                case 0:
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



const Calculator_MathLogic_FUNCTIONS: {
    setButtons_AEL: Function,
    bt_EVT: EventTarget,
    bt_DIV: HTMLDivElement,
    bt_ID: string,
    value: string,
    /*availableNUM_PQR: number,
    availableNUM_BRACKET: number,
    availableNUM_NOT: number,
    availableNUM_CONJ: number,
    availableNUM_CONJ_COUNT: number,*/
    p01_VAL: string,
    q01_VAL: string,
    r01_VAL: string,
    screen_EL: HTMLElement,
    screen_POS_2: HTMLElement,
    screen_POS_3: HTMLElement,
    butonGroup_EL: HTMLElement,
    screen_INFO: HTMLDivElement,
    screen_VALUE: HTMLDivElement,
    operation_MODE: Function,
    operation_VALID: Function,
    operation_DEL: Function,
    operation_AC: Function,
    operation_SignValue: Function,
    operation_Sign: Function,
    /*isEqual: boolean,*/
    mode_EL: HTMLElement,
    calc_MODE: string,
    isResultTAU: boolean,
    screen_INFO_EVA: string,
    screen_INFO_TAU: string,
} = {
    bt_EVT: undefined,
    bt_DIV: null,
    bt_ID: "",
    value: " ",
    /*availableNUM_PQR: 1,
    availableNUM_BRACKET: 0,
    availableNUM_NOT: 0,
    availableNUM_CONJ: 0,
    availableNUM_CONJ_COUNT: 1,
    isEqual: false,*/
    p01_VAL: "0",
    q01_VAL: "0",
    r01_VAL: "0",
    calc_MODE: "EVA",
    isResultTAU: false,
    screen_INFO_EVA: "Mode: EVA | p = 0, q = 0, r = 0",
    screen_INFO_TAU: "Mode: TAU",
    screen_EL: document.getElementById('screen_TRANSFORM'),
    screen_POS_2: document.getElementById('screen-position-1_TRANSFORM'),
    screen_POS_3: document.getElementById('screen-position-2_TRANSFORM'),
    butonGroup_EL: document.getElementById('buttons-group_TRANSFORM'),
    mode_EL: document.getElementById("MODE"),
    screen_INFO:  document.querySelector('.ct-logic > .screen > .screen-position > .screen-hanger > .info'),
    screen_VALUE: document.querySelector('.ct-logic > .screen > .screen-position > .screen-hanger > .value'),
    setButtons_AEL(): void {
        /*console.log("availableNUM_PQR:         " + this.availableNUM_PQR);
        console.log("availableNUM_NOT:         " + this.availableNUM_NOT);
        console.log("availableNUM_CONJ:        " + this.availableNUM_CONJ);
        console.log("availableNUM_CONJ_COUNT:  " + this.availableNUM_CONJ_COUNT);
        console.log("availableNUM_BRACKET:     " + this.availableNUM_BRACKET);*/
        const button_COLL: HTMLCollection = document.querySelector('.ct-logic > .buttons-group').children;
        for (let i: number = 0; i < button_COLL.length; i++) {
            button_COLL[i].addEventListener("click", (e) => {
                this.bt_EVT = e.currentTarget;
                this.bt_DIV = this.bt_EVT as HTMLDivElement;
                this.bt_ID = this.bt_DIV.id;
                switch(this.bt_ID) {
                    case "MODE":
                        this.operation_MODE(this.bt_ID);  // OK
                        break;
                    case "=":
                        this.operation_VALID(this.bt_ID);
                        break;
                    case "BACK":
                        this.operation_DEL(this.bt_ID);  // OK
                        break;
                    case "AC":
                        this.operation_AC(this.bt_ID);  // OK
                        break;
                    case "p01":
                        this.operation_SignValue(this.bt_ID);  // OK
                        break;
                    case "q01":
                        this.operation_SignValue(this.bt_ID);  // OK
                        break;
                    case "r01":
                        this.operation_SignValue(this.bt_ID);  // OK
                        break;
                    default:  // p, q, r, ~, /\, \/, =>, <=>, |, (, )
                        this.operation_Sign(this.bt_ID);  // OK
                        break;
                }
                // Po wywołaniu funkji operacji TAU, przywróć układ EVA:
                if (this.bt_ID !== "=" && this.isResultTAU === true) {
                    this.isResultTAU = false;
                    this.screen_EL.classList.replace('screen_TAU', 'screen_EVA');
                    this.screen_POS_2.classList.replace('screen-position_TAU', 'screen-position_EVA');
                    this.screen_POS_3.classList.replace('screen-position_TAU', 'screen-position_EVA');
                    this.butonGroup_EL.classList.replace('buttons-group_TAU', 'buttons-group_EVA');
                }
            }, false);
        }
        //this.operation_EVA();  // Wytołanie: EVA
    },
    operation_MODE(): void {
        if (this.calc_MODE === "EVA") {
            this.calc_MODE = "TAU";
            this.mode_EL.textContent = "EVA";
            this.screen_INFO.textContent = this.screen_INFO_TAU;
        } else if (this.calc_MODE === "TAU") {
            this.calc_MODE = "EVA";
            this.mode_EL.textContent = "TAU";
            this.screen_INFO.textContent = this.screen_INFO_EVA;
        }
    },
    operation_VALID(): void {
        // Walidacja danych:
        let badColor = "crimson";
        let goodColor = "rgba(255,255,255,0.8)";
        let spaghetti: string = this.value.split(" ").join("");
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // Zerowy Etap Walidacji - do II Etapu Walidacji - Sprawdzenia czy długość wyrazenia jest równa 2: 
        // (Wynikiem "wyciannia globalnego wyrażenie nawiasowego" dla nawiasu głównego zawsze jest "",
        // bo tak działa algorytm... nieważne to nie wina algorytmu... co tu dużo gadać.., jakby człowiek
        // co kawałek coś opisywał to z 800 linijek zrobiłoby się 8000..., - po prostu mi jest to potrzebne!).
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        if (spaghetti.length <= 2) {
            console.log("Niepoprawna długość wyrażenia.");
            //this.screen_INFO.textContent = "Niepoprawna długość wyrażenia!";
            this.screen_VALUE.style.color = badColor;
            return;
        }
        // - - - - - - - - - - - - - - - - - - - - - - -
        // I Etap Walidacji - poprawna liczba nawiasów:
        // - - - - - - - - - - - - - - - - - - - - - - -
        let bracketLeft_AMOUNT: number = 0;
        let bracketRight_AMOUNT: number = 0;
        for (let i: number = 0; i < spaghetti.length; i++) {
            (spaghetti[i] === "(") ? bracketLeft_AMOUNT++ : bracketLeft_AMOUNT = bracketLeft_AMOUNT;
            (spaghetti[i] === ")") ? bracketRight_AMOUNT++ : bracketRight_AMOUNT = bracketRight_AMOUNT;
        }
        if (bracketLeft_AMOUNT !== bracketRight_AMOUNT) {
            console.log("Niepoprawna liczba nawiasów!");
            //this.screen_INFO.textContent = "Niepoprawna liczba nawiasów!";
            this.screen_VALUE.style.color = badColor;
            return;
        }
        console.log("Poprawna liczba nawiasów!");
        // Dodawanie nawiasu inicjalnego-najnadrzędniejszego do etapu II, aby pętla działała dobrze:
        if ((spaghetti[0] !== "(" && spaghetti[spaghetti.length - 1] !== ")") || (spaghetti[0] === "(" && spaghetti[spaghetti.length - 1] !== ")") || (spaghetti[0] !== "(" && spaghetti[spaghetti.length - 1] === ")")) {
            spaghetti = "(" + spaghetti + ")";
        } else if (spaghetti[0] === "(" && spaghetti[spaghetti.length - 1] === ")") {
            spaghetti = "(" + spaghetti + ")";
        } else {
            console.log("Niepoprawne wyrażenie!");
            //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
            this.screen_VALUE.style.color = badColor;
            return;
        }
        console.log(spaghetti);


        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // II Etap Walidacji - Poprawna liczba określonych znaków w kolejno wycinanych nawiasach nadrzędnych: (nadrzędne -> potomne)
        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        // Rozkład wyrażenia na stopniowe wyrażenia nadrzędne:





        // Przypomnij sobie działanie tego algorytmu:


        const expression = spaghetti;
        const stack: string[] = [];
        const bracketWord_AR: string[] = [];
        for (let i = 0; i < expression.length; i++) {
            if (expression[i] === '(') {
                stack.push(i.toString());
            } else if (expression[i] === ')') {
                const startIndex = parseInt(stack.pop()!);
                const subExpression = expression.substring(startIndex, i + 1);
                bracketWord_AR.push(subExpression);
            }
        }
        console.log(bracketWord_AR);

        let expressions = bracketWord_AR;
        const result: string[] = [];
        for (let i: number = 0; i < expressions.length; i++) {
            // Usunięcie nawiasów z prawej i lewej strony
            if (expressions[i][0] === "(" && expressions[i][expressions[i].length - 1] === ")") {
                expressions[i] = expressions[i].substring(1, expressions[i].length - 1);
            }
            // Usunięcie wyrażeń nawiasowych potomnych
            let startIndex = expressions[i].indexOf("(");
            while (startIndex !== -1) {
                let openCount = 1;
                let endIndex = startIndex + 1;
                while (openCount > 0 && endIndex < expressions[i].length) {
                    if (expressions[i][endIndex] === "(") {
                        openCount++;
                    } else if (expressions[i][endIndex] === ")") {
                        openCount--;
                    }
                    endIndex++;
                }
                expressions[i] = expressions[i].substring(0, startIndex) + expressions[i].substring(endIndex);
                startIndex = expressions[i].indexOf("(", startIndex);
            }
            result.push(expressions[i]);
        }
        // Sprawdzanie czy któryś z indeksów araja zawiera pusty string: (mankament wyrażenia wpisanego z globalnym nawiasem nadrzędny, tzn. wpisanie: np. (q|p)) )
        if (result[result.length - 1] === "") {
            result.pop();
        }
        // Sprawdzanie poprawności liczby znaków w nawiasach:
        let not_AMOUNT: number = 0;
        let conj_AMOUNT: number = 0;
        let word_AMOUNT: number = 0;
        for (let i: number = 0; i < result.length; i++) {
            not_AMOUNT = 0;
            conj_AMOUNT = 0;
            word_AMOUNT = 0;
            for (let j: number = 0; j < result[i].length; j++) {
                if (result[i].charCodeAt(j) === 172) {
                    not_AMOUNT++;
                } else if (result[i].charCodeAt(j) === 124 || result[i].charCodeAt(j) === 8897 || result[i].charCodeAt(j) === 8896 || result[i].charCodeAt(j) === 8658 || result[i].charCodeAt(j) === 8660) {
                    conj_AMOUNT++;
                } else if (result[i][j] === "p" || result[i][j] === "q" || result[i][j] === "r") {
                    word_AMOUNT++;
                }
            }
            if (not_AMOUNT > 1 || conj_AMOUNT > 1 || word_AMOUNT > 2) {
                console.log("Niepoprawne wyrażenie!");
                //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                this.screen_VALUE.style.color = badColor;
                return;
            }
        }
        console.log("Poprawna dopuszczalna liczba znaków w nawiasach");


        // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -


        

        // - - - - - - - - - - - - - - - - - - - - - - - - - -
        // III Etap walidacji - Sąsiedztwo właściwych znaków:
        // - - - - - - - - - - - - - - - - - - - - - - - - - -
        let keyNum: number = 0;
        let keyNum_LOC: number = 0;
        let is_Bad_1_COUNTER: number = 0;
        let isBad_2: boolean = false;
        console.log("\nIII Etap walidacji - Sąsiedztwo właściwych znaków:");
        console.log(result);
        for (let i: number = 0; i < result.length; i++) {
            for (let j: number = 0; j < result[i].length; j++) {
                keyNum = result[i].charCodeAt(j);
                if (keyNum === 124 || keyNum === 8897 || keyNum === 8896 || keyNum === 8658 || keyNum === 8660) {
                    // LEWA:
                    keyNum_LOC = j - 1;
                    is_Bad_1_COUNTER = 0;  // Sytuacja kiedy z obu stron spójnika nie występuje żaden znak. Kiedy zaistnieje taka sytuacja, licznik wynosi 2.
                    isBad_2 = false;  // Sytuacja kiedy wystepuje samo wyrażenie nawiasowetypu: "|p" lub "p|" i przed nim lub po nim w zależności od wyrażenia nawiasowego nie następuje kolejne.
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
                    if (is_Bad_1_COUNTER === 2  || isBad_2 === true) {
                        console.log("PRAWY SPÓJNIK: " + result[i][keyNum_LOC]);
                        console.log("Wyrażenie NIE jest poprawne!");
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                } else if (keyNum === 112 || keyNum === 113 || keyNum === 114) {
                    // LEWA:
                    keyNum_LOC = j - 1;
                    if (result[i].charCodeAt(keyNum_LOC) !== 124 && result[i].charCodeAt(keyNum_LOC) !== 8897 && result[i].charCodeAt(keyNum_LOC) !== 8896 && result[i].charCodeAt(keyNum_LOC) !== 8658 && result[i].charCodeAt(keyNum_LOC) !== 8660 && result[i][keyNum_LOC] !== "(" && result[i][keyNum_LOC] !== undefined) {
                        console.log("Wyrażenie NIE jest poprawne!");
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                    // PRAWA:
                    keyNum_LOC = j + 1;
                    if (result[i].charCodeAt(keyNum_LOC) !== 124 && result[i].charCodeAt(keyNum_LOC) !== 8897 && result[i].charCodeAt(keyNum_LOC) !== 8896 && result[i].charCodeAt(keyNum_LOC) !== 8658 && result[i].charCodeAt(keyNum_LOC) !== 8660 && result[i][keyNum_LOC] !== ")" && result[i][keyNum_LOC] !== undefined) {
                        console.log("Wyrażenie NIE jest poprawne!");
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                } else if (keyNum === 172) {
                    // LEWA:
                    keyNum_LOC = j - 1;
                    if (result[i][keyNum_LOC] !== "(") {
                        console.log("Wyrażenie NIE jest poprawne!");
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                    // PRAWA:
                    keyNum_LOC = j + 1;
                    if (result[i][keyNum_LOC] !== "p" && result[i][keyNum_LOC] !== "q" && result[i][keyNum_LOC] !== "r") {
                        console.log("Wyrażenie NIE jest poprawne!");
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                } else if (keyNum === 40) {
                    // LEWA:
                    keyNum_LOC = j - 1;
                    if (result[i].charCodeAt(keyNum_LOC) !== 124 && result[i].charCodeAt(keyNum_LOC) !== 8897 && result[i].charCodeAt(keyNum_LOC) !== 8896 && result[i].charCodeAt(keyNum_LOC) !== 8658 && result[i].charCodeAt(keyNum_LOC) !== 8660 && result[i][keyNum_LOC] !== undefined) {
                        console.log("Wyrażenie NIE jest poprawne!");
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                    // PRAWA:
                    keyNum_LOC = j + 1;
                    if (result[i][keyNum_LOC] !== "p" && result[i][keyNum_LOC] !== "q" && result[i][keyNum_LOC] !== "r" && result[i].charCodeAt(keyNum_LOC) !== 172) {
                        console.log("Wyrażenie NIE jest poprawne!");
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                } else if (keyNum === 41) {
                    // LEWA:
                    keyNum_LOC = j - 1;
                    if (result[i][keyNum_LOC] !== "p" && result[i][keyNum_LOC] !== "q" && result[i][keyNum_LOC] !== "r") {
                        console.log("Wyrażenie NIE jest poprawne!");
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                    // PRAWA:
                    keyNum_LOC = j + 1;
                    if (result[i].charCodeAt(keyNum_LOC) !== 124 && result[i].charCodeAt(keyNum_LOC) !== 8897 && result[i].charCodeAt(keyNum_LOC) !== 8896 && result[i].charCodeAt(keyNum_LOC) !== 8658 && result[i].charCodeAt(keyNum_LOC) !== 8660 && result[i][keyNum_LOC] !== undefined) {
                        console.log("Wyrażenie NIE jest poprawne!");
                        //this.screen_INFO.textContent = "Wyrażenie NIE jest poprawne!";
                        this.screen_VALUE.style.color = badColor;
                        return;
                    }
                }
            }
        }
        console.log('Wyrażenie jest ostatecznie prawidłowe!');
        //this.screen_INFO.textContent = "Wyrażenie jest ostatecznie prawidłowe!";
        this.screen_VALUE.style.color = goodColor;
        

        // Wykonywanie operacji:
        if (this.calc_MODE === "EVA") {
            console.log("Operacja: ewaluacja");
            this.screen_EL.classList.replace('screen_TAU', 'screen_EVA');
            this.screen_POS_2.classList.replace('screen-position_TAU', 'screen-position_EVA');
            this.screen_POS_3.classList.replace('screen-position_TAU', 'screen-position_EVA');
            this.butonGroup_EL.classList.replace('buttons-group_TAU', 'buttons-group_EVA');
        } else if (this.calc_MODE === "TAU") {
            this.isResultTAU = true;
            console.log("Operacja: tautologia");
            this.screen_EL.classList.replace('screen_EVA', 'screen_TAU');
            this.screen_POS_2.classList.replace('screen-position_EVA', 'screen-position_TAU');
            this.screen_POS_3.classList.replace('screen-position_EVA', 'screen-position_TAU');
            this.butonGroup_EL.classList.replace('buttons-group_EVA', 'buttons-group_TAU');
        }
    },
    //operation_EVA(): void {
        //
    //},
    //operation_TAU(): void {
        /*this.screen_EL.classList.replace('screen_EVA', 'screen_TAU');
        this.screen_POS_2.classList.replace('screen-position_EVA', 'screen-position_TAU');
        this.screen_POS_3.classList.replace('screen-position_EVA', 'screen-position_TAU');
        this.butonGroup_EL.classList.replace('buttons-group_EVA', 'buttons-group_TAU');
        this.screen_INFO.textContent = "TAU | " + this.value;*/
    //},
    operation_DEL(): void {
        // Skracanie wyrażenia:
        if (this.value[this.value.length - 1] === " ") {
            this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 3));
        } else {
            this.value = this.screen_VALUE.textContent.slice(0, (this.screen_VALUE.textContent.length - 1));
        }
        this.screen_VALUE.textContent = this.value;
        // TESTOWE: ===============================================================================TESTOWE
        this.operation_VALID();
    },
    operation_AC(): void {
        console.clear();
        this.value = " ";
        this.screen_VALUE.textContent = this.value;
        // TESTOWE: ===============================================================================TESTOWE
        //this.screen_INFO.textContent = "";
    },
    operation_SignValue(signValue: string): void {
        if (this.calc_MODE === "EVA") {
            if (signValue === "p01") {
                if (this.p01_VAL === "0") {
                    this.p01_VAL = "1";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                } else if (this.p01_VAL === "1") {
                    this.p01_VAL = "0";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                }
            } else if (signValue === "q01") {
                if (this.q01_VAL === "0") {
                    this.q01_VAL = "1";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                } else if (this.q01_VAL === "1") {
                    this.q01_VAL = "0";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                }
            } else if (signValue === "r01") {
                if (this.r01_VAL === "0") {
                    this.r01_VAL = "1";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                } else if (this.r01_VAL === "1") {
                    this.r01_VAL = "0";
                    this.screen_INFO_EVA = "EVA | p = " + this.p01_VAL + ", q = " + this.q01_VAL + ", r = " + this.r01_VAL;
                }
            }
            this.screen_INFO.textContent = "Mode: " + this.screen_INFO_EVA;
        }
    },
    operation_Sign(signKey: string): void {
        if (signKey.charCodeAt(0) === 8896 || signKey.charCodeAt(0) === 8897 || signKey.charCodeAt(0) === 8658 || signKey.charCodeAt(0) === 8660 || signKey === "|") {
            this.value += " " + signKey + " ";
        } else {
            this.value += signKey;
        }
        this.screen_VALUE.textContent = this.value;
        // TESTOWE: ===============================================================================TESTOWE
        this.operation_VALID();
    },
}
Calculator_MathLogic_FUNCTIONS.setButtons_AEL();



const Calculator_Euklides_FUNCTIONS: {
    setButtons_AEL: Function,
    bt_EVT: EventTarget,
    bt_DIV: HTMLDivElement,
    bt_ID: string,
    value: string,
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
        const fixed_A: number = baseNum_AR[0], fixed_B: number = baseNum_AR[1];
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
                this.screen_INFO.textContent = "EUK | " + fixed_A + ", " + fixed_B + " | Wynik:";
            }
            // Dodatkowy przypadek: Kiedy liczby "a" i "b" mają ujemne wartości: (zapobiegnięcie nieskończonej teracji, kiedy liczby nigdy nie będą sobie równe)
            if (a_LEFT < 0 && b_RIGHT < 0) {
                this.value = "1";
                this.screen_VALUE.textContent = this.value;
                this.screen_INFO.textContent = "EUK | " + fixed_A + ", " + fixed_B + " | Wynik:";
                return;
            }
        }
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
            this.screen_INFO.textContent = "NWW | ";
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
