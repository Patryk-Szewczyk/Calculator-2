var LocalStorage_ALL = {
    //localStorage_AR: [],
    clcBt_EVT: null,
    clcBt_DIV: null,
    clcBt_ID: 0,
    clcType_EL: null,
    setPageOpenCalc_AEL: function () {
        var _this = this;
        //this.localStorage_AR.push([{ calculator: "00", history: "none" }]);
        var calcButton_AR = document.querySelector('div.nav-button-box').children;
        var titleArea_EL = document.querySelector('div.cb-title');
        var calcType_EL = document.querySelectorAll('div[class^="ct-"]');
        console.log(calcType_EL);
        for (var i = 0; i < calcButton_AR.length; i++) {
            calcButton_AR[i].addEventListener('click', function (e) {
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
    }
};
Layout_DESKTOP.setMenuButton_AEL();
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
// Błąd! Przy NWW nie można używać [,]
// Błąd! Przy FAC nie można używać [,]
// Błąd! Muszisz podać minimum 2 liczby   // NWD i NWW
// [liczba] | NWD | Wynik:   // [liczba]
// [liczba] | NWW | Wynik:   // [liczba]
// [liczba] | FAC | Wynik:   // [liczby], ["liczba pierwsza"]
// Błąd! Wprowadź poprawne dane
// Ustawienie pozycji scrollbaru na właściwym miejscu (ekran kalkulatora)
window.addEventListener("load", function () {
    var container = document.querySelectorAll('.ct-refactoring > .screen > .screen-position > .screen-hanger > .info, .ct-refactoring > .screen > .screen-position > .screen-hanger > .value');
    for (var i = 0; i < container.length; i++) {
        container[i].scrollLeft = container[i].scrollWidth;
    }
}, false);
