var LocalStorage_ALL = {
    //localStorage_AR: [],
    clcBt_EVT: null,
    clcBt_DIV: null,
    clcBt_ID: 0,
    setPageOpenCalc_AEL: function () {
        var _this = this;
        //this.localStorage_AR.push([{ calculator: "00", history: "none" }]);
        var calcButton_AR = document.querySelector("div.nav-button-box").children;
        var titleArea_DIV = document.querySelector("div.cb-title");
        for (var i = 0; i < calcButton_AR.length; i++) {
            calcButton_AR[i].addEventListener('click', function (e) {
                _this.clcBt_EVT = e.currentTarget;
                _this.clcBt_DIV = _this.clcBt_EVT;
                _this.clcBt_ID = Number(_this.clcBt_DIV.id.slice(4, 6));
                switch (_this.clcBt_ID) {
                    case 0:
                        titleArea_DIV.textContent = "Kalkulator podstawowy";
                        localStorage.setItem('calculator', '0');
                        break;
                    case 1:
                        titleArea_DIV.textContent = "Kalkulator binarny";
                        localStorage.setItem('calculator', '1');
                        break;
                    case 2:
                        titleArea_DIV.textContent = "Logika matematyczna";
                        localStorage.setItem('calculator', '2');
                        break;
                    case 3:
                        titleArea_DIV.textContent = "NWD";
                        localStorage.setItem('calculator', '3');
                        break;
                    case 4:
                        titleArea_DIV.textContent = "NWW";
                        localStorage.setItem('calculator', '4');
                        break;
                    case 5:
                        titleArea_DIV.textContent = "Rozkład liczby na czynniki pierwsze";
                        localStorage.setItem('calculator', '5');
                        break;
                }
            }, false);
        }
    },
    getLocalStorage: function () {
        var titleArea_DIV = document.querySelector("div.cb-title");
        var calcType = localStorage.getItem('calculator');
        (calcType === undefined || calcType === null) ? calcType = "0" : calcType;
        if (calcType) {
            switch (Number(calcType)) {
                case 0:
                    titleArea_DIV.textContent = "Kalkulator podstawowy";
                    break;
                case 1:
                    titleArea_DIV.textContent = "Kalkulator binarny";
                    break;
                case 2:
                    titleArea_DIV.textContent = "Logika matematyczna";
                    break;
                case 3:
                    titleArea_DIV.textContent = "NWD";
                    break;
                case 4:
                    titleArea_DIV.textContent = "NWW";
                    break;
                case 5:
                    titleArea_DIV.textContent = "Rozkład liczby na czynniki pierwsze";
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
                            sidebar.style.left = '-270px';
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
