import { RectDimensionInput } from "./control-panel/RectDimensionInput.js";
import { SemiAxisSlider } from "./control-panel/SemiAxisSlider.js";
import { AppContext } from "./AppContext.js";
import { CanvasRectangle } from "./canvas/CanvasRectangle.js";
import { CSSSelectors } from "./CSSSelectors.js";
import { MathUtil } from "./utils/MathUtil.js";

export class Initialize {

    static init() {
        const canvas = document.getElementById(CSSSelectors.ids.CANVAS);
        const canvasWPX = parseFloat(window.getComputedStyle(canvas).width);
        const canvasHPX = parseFloat(window.getComputedStyle(canvas).height);

        const rectWPX = Math.max(490, MathUtil.restrictDecimalDigits(0.8 * canvasWPX, 3));
        const rectHPX = Math.max(490, MathUtil.restrictDecimalDigits(0.8 * canvasHPX, 3));

        AppContext.init(rectWPX, rectHPX, "px");

        RectDimensionInput.setDimensionsMaxAndValue(rectWPX, rectHPX);
        
        CanvasRectangle.setDimensions(rectWPX, rectHPX);
        
        const hSemiAxisMax = MathUtil.restrictDecimalDigits(0.5 * rectWPX, 3);
        const vSemiAxisMax = MathUtil.restrictDecimalDigits(0.5 * rectHPX, 3);
        SemiAxisSlider.setSemiAxesMaxAndValue(hSemiAxisMax, 0, vSemiAxisMax, 0);


    }
}