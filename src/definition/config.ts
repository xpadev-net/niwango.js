import { fonts } from "@/definition/fonts";
import type { platform } from "@/@types/fonts";
import { baseConfig } from "@/@types/config";

let config: baseConfig;
const initConfig = () => {
  const platform: platform = (function (ua) {
    if (ua.match(/windows nt 6\.[12]/i)) return "win7";
    else if (ua.match(/windows nt (6\.3|10\.\d+)/i)) return "win8_1";
    else if (ua.match(/windows nt/i)) return "win";
    else if (ua.match(/mac os x 10(.|_)(9|10)/i)) return "mac10_9";
    else if (ua.match(/mac os x 10(.|_)\d{2}/i)) return "mac10_11";
    else if (ua.match(/mac os x/i)) return "mac";
    return "other";
  })(navigator.userAgent);
  config = {
    stageWidth: 672,
    stageHeight: 384,
    canvasWidth: 683,
    canvasHeight: 385,

    /**
     * Flash版のフォント変化文字
     * todo: ゴシック保護文字を探す
     */
    flashChar: {
      gulim:
        "[\u0126\u0127\u0132\u0133\u0138\u013f\u0140\u0149-\u014b\u0166\u0167\u02d0\u02da\u2074\u207f\u2081-\u2084\u2113\u2153\u2154\u215c-\u215e\u2194\u2195\u223c\u249c-\u24b5\u24d0-\u24e9\u25a3-\u25a9\u25b6\u25b7\u25c0\u25c1\u25c8\u25d0\u25d1\u260e\u260f\u261c\u261e\u2660\u2661\u2663-\u2665\u2667-\u2669\u266c\u3131-\u316e\u3200-\u321c\u3260-\u327b\u3380-\u3384\u3388-\u338d\u3390-\u339b\u339f\u33a0\u33a2-\u33ca\u33cf\u33d0\u33d3\u33d6\u33d8\u33db-\u33dd\uf900-\uf928\uf92a-\uf994\uf996\ufa0b\uffe6]",
      simsunStrong:
        "[\u01ce\u01d0\u01d2\u01d4\u01d6\u01d8\u01da\u01dc\u0251\u0261\u02ca\u02cb\u2016\u2035\u216a\u216b\u2223\u2236\u2237\u224c\u226e\u226f\u2295\u2483-\u249b\u2504-\u250b\u256d-\u2573\u2581-\u2583\u2585-\u2587\u2589-\u258b\u258d-\u258f\u2594\u2595\u25e2-\u25e5\u2609\u3016\u3017\u301e\u3021-\u3029\u3105-\u3129\u3220-\u3229\u32a3\u33ce\u33d1\u33d2\u33d5\ue758-\ue864\ufa0c\ufa0d\ufe30\ufe31\ufe33-\ufe44\ufe49-\ufe52\ufe54-\ufe57\ufe59-\ufe66\ufe68-\ufe6b]",
      simsunWeak:
        "[\u02c9\u2105\u2109\u2196-\u2199\u220f\u2215\u2248\u2264\u2265\u2299\u2474-\u2482\u250d\u250e\u2511\u2512\u2515\u2516\u2519\u251a\u251e\u251f\u2521\u2522\u2526\u2527\u2529\u252a\u252d\u252e\u2531\u2532\u2535\u2536\u2539\u253a\u253d\u253e\u2540\u2541\u2543-\u254a\u2550-\u256c\u2584\u2588\u258c\u2593]",
      gothic: "[\u03fb\uff9f]",
    },

    /**
     * Flash版の文字変化規則を設定
     * xp -> フォント変化文字全て適用
     * vista -> 1又は2種類のみに制限
     * 参考: https://w.atwiki.jp/commentart/pages/44.html
     */
    flashMode: "vista",

    /**
     * Flash版の上付き・下付き文字
     * super: 上付き sub: 下付き
     * todo: 対象文字を探す
     */
    flashScriptChar: {
      super:
        "[\u00aa\u00b2\u00b3\u00b9\u00ba\u02b0\u02b2\u02b3\u02b7\u02b8\u02e1-\u02e3\u0304\u1d2c-\u1d43\u1d45-\u1d61\u1d9b-\u1da1\u1da3-\u1dbf\u2070\u2071\u2074-\u207f\u2c7d]",
      sub: "[\u0320\u1d62-\u1d6a\u2080-\u208e\u2090-\u209c\u2c7c]",
    },
    /**
     * 描画に使うフォント
     * [size]に数値が入る
     */
    font: {
      gulim:
        'normal 600 [size]px gulim, "Microsoft JhengHei UI", Arial, "ＭＳ Ｐゴシック", "MS PGothic", MSPGothic, MS-PGothic',
      simsun:
        'normal 400 [size]px simsun, "游明朝体", "游明朝", "Yu Mincho", YuMincho, yumincho, YuMin-Medium',
    },
    /**
     * フォント @html5?
     */
    fonts: fonts[platform],
    scriptCharOffset: 0.12,
    lineHeight: 1.22,
    commentYPaddingTop: 4,
    commentYOffset: -0.2,
    letterSpacing: 0,
  };
};

export { config, initConfig };
