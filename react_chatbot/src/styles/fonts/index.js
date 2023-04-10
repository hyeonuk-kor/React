import { createGlobalStyle } from "styled-components";
import GmarketSansTTFBold from "./GmarketSansTTFBold.ttf";
import GmarketSansTTFLight from "./GmarketSansTTFLight.ttf";
import GmarketSansTTFMedium from "./GmarketSansTTFMedium.ttf";
import KBFGDisplayB from "./KBFGDisplayB.ttf";
import KBFGDisplayL from "./KBFGDisplayL.ttf";
import KBFGDisplayM from "./KBFGDisplayM.ttf";
import KBFGDisplayMI from "./KBFGDisplayMI.ttf";
import KBFGTextB from "./KBFGTextB.ttf";
import KBFGTextL from "./KBFGTextL.ttf";
import KBFGTextM from "./KBFGTextM.ttf";
export default createGlobalStyle`
    // @font-face {
    //     font-family: "GmarketSans";
    //     src: url(${GmarketSansTTFBold}) format('truetype");
    //     src: url(${GmarketSansTTFLight}) format('truetype");
    //     src: url(${GmarketSansTTFMedium}) format('truetype");
    // }
    @font-face {
        font-family: "KBFG";
        src: url(${KBFGDisplayB}) format('truetype");
        src: url(${KBFGDisplayL}) format('truetype");
        src: url(${KBFGDisplayM}) format('truetype");
        src: url(${KBFGTextM}) format('truetype");
        src: url(${KBFGTextL}) format('truetype");
        src: url(${KBFGTextB}) format('truetype");
        src: url(${KBFGDisplayMI}) format('truetype");
    }

`;
