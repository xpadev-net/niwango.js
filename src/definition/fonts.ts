import type { FontItem, platform, platformFont } from "@/@types/fonts";

const build = (fonts: FontItem[]): FontItem => {
  return fonts.reduce(
    (pv, val, index) => {
      if (index === 0) {
        return { ...val };
      }
      pv.font += `, ${val.font}`;
      return pv;
    },
    { font: "", offset: 0, weight: 600 },
  );
};

const fontTemplates = {
  arial: {
    font: 'Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic',
    offset: 0.01,
    weight: 600,
  },
  macGothicPro6: {
    font: '"ヒラギノ角ゴ ProN W6", HiraKakuProN-W6, "ヒラギノ角ゴ ProN", HiraKakuProN, "Hiragino Kaku Gothic ProN"',
    offset: -0.05,
    weight: 600,
  },
  macGothic1: {
    font: '"ヒラギノ角ゴシック", "Hiragino Sans", HiraginoSans',
    offset: -0.05,
    weight: 600,
  },
  sansSerif600: {
    font: "sans-serif",
    offset: 0,
    weight: 600,
  },
};

const fonts: { [key in platform]: platformFont } = {
  win7: {
    //win8
    defont: build([fontTemplates.arial]),
  },
  win8_1: {
    //win10
    defont: build([fontTemplates.arial]),
  },
  win: {
    defont: build([fontTemplates.arial]),
  },
  mac10_9: {
    //mac10_10
    defont: build([fontTemplates.macGothicPro6]),
  },
  mac10_11: {
    //mac10_12-19
    defont: build([fontTemplates.macGothic1]),
  },
  mac: {
    defont: build([fontTemplates.macGothicPro6]),
  },
  other: {
    //android,ios,other
    defont: build([fontTemplates.sansSerif600]),
  },
};
export { fonts, fontTemplates };
