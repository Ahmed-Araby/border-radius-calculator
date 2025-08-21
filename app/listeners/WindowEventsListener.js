import { RectDimensionInput } from "../knobs/RectDimensionInput.js";
import { CSSSelectors } from "../CSSSelectors.js";
import { MathUtil } from "../utils/MathUtil.js";

export class WindowEventListenrs {

    static listenOnWindowResize() {
        window.addEventListener("resize", (event) => {
            const canvas = document.getElementById(CSSSelectors.ids.CANVAS);
            const canvasCompStyle = window.getComputedStyle(canvas);

            const canvasW = parseFloat(canvasCompStyle.width);
            const canvasH = parseFloat(canvasCompStyle.height);

            // rect can be at most 80% of the canvas size
            const maxRectWidth = MathUtil.restrictDecimalDigits(canvasW * 0.8, 3);
            const maxRectHeight = MathUtil.restrictDecimalDigits(canvasH * 0.8, 3);
            
            RectDimensionInput.restrictDimensionInput(maxRectWidth, maxRectHeight); 
            RectDimensionInput.handleRectDimensionsInputChange(maxRectWidth, maxRectHeight);
        });
    }
}