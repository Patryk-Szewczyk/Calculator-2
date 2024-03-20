const LocalStorage_ALL: {
    setPageOpenCalc_AEL: Function,
    clcBt_EVT: EventTarget,
    clcBt_DIV: HTMLDivElement,
    clcBt_ID: number,
    getLocalStorage: Function,
    //localStorage_AR: [{ calculator: string, history: string }][]
} = {
    //localStorage_AR: [],
    clcBt_EVT: null,
    clcBt_DIV: null,
    clcBt_ID: 0,
    setPageOpenCalc_AEL(): void {
        //this.localStorage_AR.push([{ calculator: "00", history: "none" }]);
        const calcButton_AR: HTMLCollection = document.querySelector("div.nav-button-box").children;
        const titleArea_DIV: HTMLDivElement = document.querySelector("div.cb-title");
        for (let i: number = 0; i < calcButton_AR.length; i++){
            calcButton_AR[i].addEventListener('click', (e) => {
                this.clcBt_EVT = e.currentTarget;
                this.clcBt_DIV = this.clcBt_EVT as HTMLDivElement;
                this.clcBt_ID = Number(this.clcBt_DIV.id.slice(4, 6));
                switch (this.clcBt_ID) {
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
                        localStorage.setItem('calculator', '2')
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
    getLocalStorage(): void {
        const titleArea_DIV: HTMLDivElement = document.querySelector("div.cb-title");
        let calcType = localStorage.getItem('calculator');
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
}
LocalStorage_ALL.getLocalStorage();
LocalStorage_ALL.setPageOpenCalc_AEL();
//console.log(LocalStorage_ALL.localStorage_AR);



const Layout_DESKTOP: {
    setMenuButton_AEL: Function,
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
                        sidebar.style.left = '-270px';
                        menuButton_EL.style.transform = 'rotateZ(180deg)';
                        sidebar.style.transitionDuration = '0.35s';
                    }, 1);
                } break;
            }
        }, false);
    }
}
Layout_DESKTOP.setMenuButton_AEL();



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
