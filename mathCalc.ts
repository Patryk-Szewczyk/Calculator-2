@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');

* {
    box-sizing: border-box;
}

body {
    margin: 0px;
    padding: 0px;
}

:root {
    --bg-veryLightBlue: hsl(219, 54%, 92%);   /*OLD: hsl(219, 54%, 90%)*/
    --bg-lightBlue: hsl(222, 69%, 87%);
    --bg-dark: rgb(77,77,77);
    --bg-lightDark: rgb(50,50,50);
    --dark-font: hsl(0, 0%, 12%);
}

.app-body {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--bg-lightBlue);
}

.app-mobile, .app-desktop {
    width: 100%;
    height: 100%;
    display: flex;
}

@media only screen and (min-width: 0px) {  /* MOBILE */
    .app-mobile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .app-desktop {
        display: none;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
    }
}

@media only screen and (min-width: 900px) {  /* DESKTOP */  /*OLD: 1120*/
    .app-mobile {
        display: none;
    }
    .app-desktop {
        display: flex;
    }
        nav {
            width: 300px;
            height: 100%;
            position: absolute;
            top: 0px;
            left: -300px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            /*background-image: linear-gradient(to right, rgb(62, 62, 62) 20%, rgb(83, 83, 83) 80%);*/
            background-image: linear-gradient(to right, rgb(47, 93, 177) 20%, rgb(70, 116, 200) 80%);
            box-shadow: 0px 0px 5px 1px black;
            z-index: 2;
        }
            .dsk-menu-button-box {
                width: 60px;
                height: 60px;
                position: absolute;
                top: 30px;
                right: -60px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                background-color: rgb(70, 116, 200);
                border-radius: 0px 12px 12px 0px;
                box-shadow: 0px 0px 5px 1px black;
                border: 0px solid red;  /*TEST*/
            }
            .dsk-menu-button-box::before {
                content: '';
                width: 30px;
                height: 30px;
                position: absolute;
                top: -30px;
                left: 0px;
                background-color: transparent;
                border-radius: 0px 0px 0px 12px;
                box-shadow: -6px 6px 0px 0px rgb(70, 116, 200);
            }
            .dsk-menu-button-box::after {
                content: '';
                width: 30px;
                height: 30px;
                position: absolute;
                bottom: -30px;
                left: 0px;
                background-color: transparent;
                border-radius: 12px 0px 0px 0px;
                box-shadow: -6px -6px 0px 0px hsl(219, 54%, 53%);
            }
                .dsk-menu-button-box > .dsk-mbb-shadowhidder {
                    position: absolute;
                    top: auto;
                    left: -7px;
                    width: 10px;
                    height: 100%;
                    background-color: inherit;
                    z-index: 1;
                }
                .dsk-menu-arrow {
                    width: 35px;
                    height: 35px;
                    color: white;
                    transform: rotateZ(180deg);
                }
                .dsk-menu-arrow:hover {
                    cursor: pointer;
                    background-color: hsl(219, 54%, 59%);
                }
                .dsk-menu-arrow:active {
                    background-color: hsl(219, 54%, 66%);
                }
            .title-box {
                width: auto;
                height: 120px;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                border: 0px solid greenyellow;  /*TEST*/
            }
                .title-prp {
                    width: auto;
                    height: auto;
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    background-color: inherit;
                    color: white;
                    font-family: 'Outfit', sans-serif;
                    font-size: 45px;
                    font-weight: 400;
                    letter-spacing: 1px;
                    border: 0px solid red;  /*TEST*/
                }
                    .t-value {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .t-value::selection {
                        background-color: transparent;
                    }
                    .t-value:hover {
                        cursor: default;
                    }
            .nav-button-box {
                width: 100%;
                height: 400px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                border: 0px solid red;  /*TEST*/
            }
                .nav-button-box div {
                    width: 100%;
                    position: relative;
                    top: -12px;
                    left: 0px;
                    padding: 15px 30px 15px 30px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                    align-items: center;
                    background-color: inherit;
                    color: white;
                    /*font-family: 'Roboto', sans-serif;*/
                    font-family: 'Outfit', sans-serif;
                    font-size: 130%;
                    font-weight: 400;
                }
                .nav-button-box div:hover {
                    cursor: pointer;
                    background-color: hsl(219, 54%, 59%);
                }
                .nav-button-box div:active {
                    background-color: hsl(219, 54%, 66%);
                }
                .nav-button-box div::selection {
                    background-color: transparent;
                    color: white;
                }
        .calc-space {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            position: relative;
            background-color: var(--bg-lightBlue);
            border: 0px solid crimson;  /*TEST*/
        }
            .calc-box {
                width: 100%;
                height: 100%;
                padding: 0px 50px 50px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: flex-start;
                border: 0px solid red;  /*TEST*/
            }
                .cb-header {
                    width: 100%;
                    height: 120px;
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    border: 0px solid green;  /*TEST*/
                }
                    .cb-title {
                        width: 100%;
                        position: relative;
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: flex-start;
                        color: var(--dark-font);  /*OLD hsl(219, 54%, 50%)*/
                        font-family: 'Outfit', sans-serif;
                        font-size: 45px;  /*OLD: 45px*/
                        font-weight: 600;
                        border: 0px solid green;  /*TEST*/
                    }
                    .cb-title::selection {
                        background-color: transparent;
                        color: var(--dark-font);
                    }
                    .cb-title:hover {
                        cursor: default;
                    }
        .calcType-box {
            width: 500px;
            height: 100%;
            position: relative;
            background-image: linear-gradient(to right, rgb(70, 116, 200) 20%, rgb(47, 93, 177) 80%);
        }
            div[class^="ct-"] {
                width: 100%;
                height: 100%;
                background-color: hsl(219, 48%, 34%);
            }
            /*- - - - - - - - - - - - - - - - - - -*/
            /*KALKULATOR: NDW | NWW | Faktoryzacja*/
            /*- - - - - - - - - - - - - - - - - - -*/
            .ct-refactoring > .screen,
            .ct-euklides > .screen,
            .ct-logic > .screen {
                width: 100%;
                height: 25%;
                padding: 0px 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: flex-end;
                gap: 5px;
                background-color: hsl(219, 48%, 68%);
                border-style: solid;
                border-width: 6px 6px 3px 6px;
                border-color: hsl(219, 48%, 34%);
            }
                .ct-refactoring > .screen > .screen-position,
                .ct-euklides > .screen > .screen-position,
                .ct-logic > .screen > .screen-position {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    overflow: hidden;
                }
                    .screen-hanger {
                        width: 100%;
                        display: flex;
                        justify-content: flex-end;
                    }
                    .ct-refactoring > .screen > .screen-position > .screen-hanger:nth-child(1),
                    .ct-euklides > .screen > .screen-position > .screen-hanger:nth-child(1),
                    .ct-logic > .screen > .screen-position > .screen-hanger:nth-child(1) {
                        margin-top: 13px;
                    }
                        .ct-refactoring > .screen > .screen-position > .screen-hanger > .info,
                        .ct-euklides > .screen > .screen-position > .screen-hanger > .info,
                        .ct-logic > .screen > .screen-position > .screen-hanger > .info {
                            width: auto;
                            display: flex;
                            align-items: flex-end;
                            color: rgba(255,255,255,0.8);
                            font-family: 'Outfit', sans-serif;
                            font-size: 1.5em;
                            font-weight: 200;
                            text-wrap: nowrap;
                            overflow-x: auto;
                        }
                        .ct-refactoring > .screen > .screen-position > .screen-hanger > .value,
                        .ct-euklides > .screen > .screen-position > .screen-hanger > .value,
                        .ct-logic > .screen > .screen-position > .screen-hanger > .value {
                            width: auto;
                            display: flex;
                            align-items: center;
                            color: white;
                            font-family: 'Outfit', sans-serif;
                            font-size: 4em;
                            font-weight: 200;
                            text-wrap: nowrap;
                            overflow-x: auto;
                        }
                        .ct-refactoring > .screen > .screen-position > .screen-hanger > .info::-webkit-scrollbar, .ct-refactoring > .screen > .screen-position > .screen-hanger > .value::-webkit-scrollbar,
                        .ct-euklides > .screen > .screen-position > .screen-hanger > .info::-webkit-scrollbar, .ct-euklides > .screen > .screen-position > .screen-hanger > .value::-webkit-scrollbar,
                        .ct-logic > .screen > .screen-position > .screen-hanger > .info::-webkit-scrollbar, .ct-logic > .screen > .screen-position > .screen-hanger > .value::-webkit-scrollbar
                         {
                            width: 100%;
                            height: 0px;
                        }
            .ct-refactoring > .buttons-group,
            .ct-euklides > .buttons-group,
            .ct-logic > .buttons-group {
                width: 100%;
                height: 75%;
                display: grid;
                grid-template-columns: repeat(4, 25%);
                background-color: hsl(219, 54%, 53%);
                border-style: solid;
                border-width: 0px 6px 6px 6px;
                border-color: hsl(219, 48%, 34%);
            }
            .ct-refactoring > .buttons-group > div,
            .ct-euklides > .buttons-group > div,
            .ct-logic > .buttons-group > div {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                font-family: 'Outfit', sans-serif;
                font-size: 2em;
                font-weight: 400;
            }
            .ct-refactoring > .buttons-group > div::selection,
            .ct-euklides > .buttons-group > div::selection,
            .ct-logic > .buttons-group > div::selection {
                background-color: transparent;
                color: white;
            }
            .ct-refactoring > .buttons-group > div:not(:nth-child(4n)) {
                border-right-style: solid;
                border-right-width: 3px;
                border-right-color: hsl(219, 48%, 34%);
                /*background-color: rgba(255,0,0,0.5);*/
            }
            .ct-refactoring > .buttons-group > div:not(:nth-child(-n+4)) {
                border-top-style: solid;
                border-top-width: 3px;
                border-top-color: hsl(219, 48%, 34%);
                /*background-color: rgba(0,255,0,0.5);*/
            }
            .ct-refactoring > .buttons-group > div:nth-child(4n) {
                background-color: hsl(219, 54%, 47%);
            }
            .ct-refactoring > .buttons-group > div:not(:nth-child(-n+14)) {
                background-color: hsl(219, 54%, 47%);
            }
                .ct-refactoring > .buttons-group > div > div,
                .ct-euklides > .buttons-group > div > div,
                .ct-logic > .buttons-group > div > div {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    background-color: rgba(255,255,255,0.0);
                    transition-duration: 0.1s;
                }
                .ct-refactoring > .buttons-group > div > div:hover,
                .ct-euklides > .buttons-group > div > div:hover,
                .ct-logic > .buttons-group > div > div:hover {
                    cursor: pointer;
                    background-color: rgba(255,255,255,0.1);
                    transition-duration: 0.1s;
                }
                .ct-refactoring > .buttons-group > div > div:active,
                .ct-euklides > .buttons-group > div > div:active,
                .ct-logic > .buttons-group > div > div:active {
                    cursor: pointer;
                    background-color: rgba(255,255,255,0.2);
                    transition-duration: 0.0s;
                }
            /*- - - - - - - - - - - - - - - - - - -*/
            /*KALKULATOR: Algorytm Euklidesa*/
            /*- - - - - - - - - - - - - - - - - - -*/
            .ct-euklides > .buttons-group > div:nth-child(-n+8) {
                border-bottom-style: solid;
                border-bottom-width: 3px;
                border-bottom-color: hsl(219, 48%, 34%);
            }
            .ct-euklides > .buttons-group > div:nth-child(4n) {
                background-color: hsl(219, 54%, 47%);
            }
            .ct-euklides > .buttons-group > div:nth-child(12) {
                grid-column: 4;
                grid-row-start: 3;
                grid-row-end: 5;
            }
            .ct-euklides > .buttons-group > div:nth-child(13) {
                grid-column: 1 / span 2;
                grid-row: 4;
            }
            .ct-euklides > .buttons-group > div:not(:nth-child(14)):not(:nth-child(13)):not(:nth-child(12)):not(:nth-child(11)):not(:nth-child(8)):not(:nth-child(4)) {
                border-bottom-style: solid;
                border-bottom-width: 3px;
                border-bottom-color: hsl(219, 48%, 34%);
                border-right-style: solid;
                border-right-width: 3px;
                border-right-color: hsl(219, 48%, 34%);
            }
            .ct-euklides > .buttons-group > div:nth-child(11) {
                border-bottom-style: solid;
                border-bottom-width: 3px;
                border-bottom-color: hsl(219, 48%, 34%);
            }
            .ct-euklides > .buttons-group > div:nth-child(13),
            .ct-euklides > .buttons-group > div:nth-child(14),
            .ct-euklides > .buttons-group > div:nth-child(11) {
                border-right-style: solid;
                border-right-width: 3px;
                border-right-color: hsl(219, 48%, 34%);
            }
            /*- - - - - - - - - - - - - - - - - - -*/
            /*KALKULATOR: Logika Matematyczna*/
            /*- - - - - - - - - - - - - - - - - - -*/
            sub {
                margin-left: 4px;
                font-size: 0.6em !important;
            }
            .ct-logic > .buttons-group > div:nth-child(1) {
                grid-column: 1 / span 2;
                grid-row: 0;
            }
            .ct-logic > .buttons-group > div:nth-child(2) {
                grid-column: 3 / span 2;
                grid-row: 0;
            }
            .ct-logic > .buttons-group > div:nth-child(1),
            .ct-logic > .buttons-group > div:nth-child(2),
            .ct-logic > .buttons-group > div:nth-child(6),
            .ct-logic > .buttons-group > div:nth-child(10),
            .ct-logic > .buttons-group > div:nth-child(14),
            .ct-logic > .buttons-group > div:nth-child(18) {
                
                background-color: hsl(219, 54%, 47%);
            }
            .ct-logic > .buttons-group > div:nth-child(1) {
                border-right-style: solid;
                border-right-width: 3px;
                border-right-color: hsl(219, 48%, 34%);
            }
            .ct-logic > .buttons-group > div:nth-child(n+3) {
                border-top-style: solid;
                border-top-width: 3px;
                border-top-color: hsl(219, 48%, 34%);
            }
            .ct-logic > .buttons-group > div:not(:nth-child(4n+2)):not(:nth-child(-n+2)) {
                border-right-style: solid;
                border-right-width: 3px;
                border-right-color: hsl(219, 48%, 34%);
            }
            .ct-logic > .screen > .screen-position:nth-child(1) {
                height: 50px;
            }
            .ct-logic > .screen > .screen-position:nth-child(2) {
                height: 70px;
            }
            /**/
            /* screen_VALUE "font-size" */
            .ct-logic > .screen > .screen-position > .screen-hanger > .value {
                font-size: 3em;  /*PREV: 4em*/
            }
            /* Scroll: */
            .ct-logic > .screen > .screen-position:nth-child(3) > .info-tau {
                color: white;
                font-family: 'Outfit', sans-serif;
                font-size: 1.3em;
                font-weight: 200;
                text-wrap: nowrap;
                overflow: scroll;
            }
            .ct-logic > .screen > .screen-position:nth-child(3) > .info-tau::-webkit-scrollbar {
                width: 0px;
                height: 0px;
            }
            /*Ruchome: EVA - - - - - - - - - - - - - - - - - - - - */
            .ct-logic > .screen_EVA {
                padding: 10px 20px 20px;
                height: 25%;
                gap: 15px;
                justify-content: flex-start;
            }
            .ct-logic > .buttons-group_EVA {
                height: 75%;
                grid-template-rows: 14% 21.5% 21.5% 21.5% 21.5%;
            }
            .ct-logic > .screen > .screen-position_EVA:nth-child(2) {
                display: flex;
            }
            .ct-logic > .screen > .screen-position_EVA:nth-child(3) {
                display: none;
            }
            .ct-logic > .screen > .screen-position_EVA:nth-child(3) {
                height: calc(100% - 40px);
            }
            /*Ruchome: TAU - - - - - - - - - - - - - - - - - - - - */
            .ct-logic > .screen_TAU {
                height: 45%;
                padding: 10px 20px 20px;
                gap: 10px;
                justify-content: flex-start;
            }
            .ct-logic > .buttons-group_TAU {
                height: 55%;
                grid-template-rows: 14% 21.5% 21.5% 21.5% 21.5%;
            }
            .ct-logic > .screen > .screen-position_TAU:nth-child(2) {
                display: none;
            }
            .ct-logic > .screen > .screen-position_TAU:nth-child(3) {
                display: flex;
            }
            .ct-logic > .screen > .screen-position_TAU:nth-child(3) {
                height: calc(100% - 40px);
            }
            /*- - - - - - - - - - - - - - - - - - - - - - - - - -*/
            /*.ct-logic > .screen > .screen-position:nth-child(3){
                outline: 2px solid red;
            }*/
    }
