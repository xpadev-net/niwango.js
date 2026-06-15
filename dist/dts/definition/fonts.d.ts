import type { platform, platformFont } from "./../@types/fonts";
declare const fontTemplates: {
    arial: {
        font: string;
        offset: number;
        weight: number;
    };
    macGothicPro6: {
        font: string;
        offset: number;
        weight: number;
    };
    macGothic1: {
        font: string;
        offset: number;
        weight: number;
    };
    sansSerif600: {
        font: string;
        offset: number;
        weight: number;
    };
};
declare const fonts: {
    [key in platform]: platformFont;
};
export { fonts, fontTemplates };
