import { RectDimensionInput } from "../knobs/RectDimensionInput.js";
import { CSSSelectors } from "../CSSSelectors.js";
import { MathUtil } from "../utils/MathUtil.js";
import { CanvasRectangle } from "../canvas/CanvasRectangle.js";
import { AppContext } from "../AppContext.js";

export class WindowEventListenrs {

    static listenOnWindowResize() {
        window.addEventListener("resize", (event) => {
            const canvas = document.getElementById(CSSSelectors.ids.CANVAS);
            const canvasCompStyle = window.getComputedStyle(canvas);

            const canvasW = parseFloat(canvasCompStyle.width);
            const canvasH = parseFloat(canvasCompStyle.height);

            // rect can be at most 80% of the canvas size
            const rectWidth = MathUtil.restrictDecimalDigits(canvasW * 0.8, 3);
            const rectHeight = MathUtil.restrictDecimalDigits(canvasH * 0.8, 3);
            
            RectDimensionInput.setDimensionsMaxAndClampValue(rectWidth, rectHeight); 
            if(AppContext.rect.getWidth() > rectWidth || AppContext.rect.getHeight() > rectHeight) {
                RectDimensionInput.handleRectDimensionsInputChange(Math.min(rectWidth, AppContext.rect.getWidth()), Math.min(rectHeight, AppContext.rect.getHeight()));
            }
            CanvasRectangle.clampDimensions(rectWidth, rectHeight);
        });
    }
}