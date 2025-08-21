import { CanvasRectangle } from "./canvas/CanvasRectangle.js";
import { CSSSelectors } from "./CSSSelectors.js";
import { RectDimensionInput } from "./knobs/RectDimensionInput.js";
import { semiAxisSlider } from "./knobs/SemiAxisSlider.js";
import { MathUtil } from "./utils/MathUtil.js";

export class Initialize {

    static init() {
        const canvas = document.getElementById(CSSSelectors.ids.CANVAS);
        const canvasWPX = parseFloat(window.getComputedStyle(canvas).width);
        const canvasHPX = parseFloat(window.getComputedStyle(canvas).height);

        // initialie the rect dimension input
        const rectWPX = MathUtil.restrictDecimalDigits(0.8 * canvasWPX, 3);
        const rectHPX = MathUtil.restrictDecimalDigits(0.8 * canvasHPX, 3);
        RectDimensionInput.setDimensionsMaxAndValue(rectWPX, rectHPX);

        // initialize the canvas's rect
        CanvasRectangle.setDimensions(rectWPX, rectHPX);
        
        // initilaize semi axis sliders
        const hSemiAxisMax = MathUtil.restrictDecimalDigits(0.5 * rectWPX, 3);
        const vSemiAxisMax = MathUtil.restrictDecimalDigits(0.5 * rectHPX, 3);
        semiAxisSlider.setSemiAxesMaxAndValue(hSemiAxisMax, 0, vSemiAxisMax, 0);
    }
}