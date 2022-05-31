import { createGlobalStyle } from "styled-components";

import PoppinsBold from "./Poppins/Poppins-Bold.ttf";
import PoppinsBlack from "./Poppins/Poppins-Black.ttf";
import PoppinsExtraBold from "./Poppins/Poppins-ExtraBold.ttf";
import PoppinsExtraLight from "./Poppins/Poppins-ExtraLight.ttf";
import PoppinsLight from "./Poppins/Poppins-Light.ttf";
import PoppinsMedium from "./Poppins/Poppins-Medium.ttf";
import PoppinsRegular from "./Poppins/Poppins-Regular.ttf";
import PoppinsSemiBold from "./Poppins/Poppins-SemiBold.ttf";
import PoppinsThin from "./Poppins/Poppins-Thin.ttf";


import SFProDisplayBold from "./SF Pro Display/SFPRODISPLAYBOLD.OTF";
import SFProDisplayMedium from "./SF Pro Display/SFPRODISPLAYMEDIUM.OTF";
import SFProDisplayRegular from "./SF Pro Display/SFPRODISPLAYREGULAR.OTF";

export default createGlobalStyle`
     @font-face {
         font-family: 'SF Pro Display';
         src: url(${SFProDisplayMedium}) format('opentype');
         font-weight: 500;
         font-style: normal;
     }
     @font-face {
       font-family: 'Poppins';
       src: url(${PoppinsBold}) format('ttf');
       font-weight: 700;
       font-style: normal;
     }
`;