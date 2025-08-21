import { AppContext } from "../AppContext.js";
import { MeasurementUnitUtil } from "../utils/MeasurementUnitUtil.js";
import { CSSSelectors } from "../CSSSelectors.js";
import { SemiAxisSlider } from "./SemiAxisSlider.js";
import { MathUtil } from "../utils/MathUtil.js";
import { Operations } from "../operations.js";
import { CanvasRectangle } from "../canvas/CanvasRectangle.js";

export class RectDimensionInput {

    static setDimensionsMaxAndClampValue(maxWidthPX, maxHeightPX) {
        console.log("restrict maximum dimensions to", maxWidthPX, "x", maxHeightPX);
        this.setWidthMaxAndClampValue(maxWidthPX);
        this.setHeightMaxAndClampValue(maxHeightPX);
    }
    static setWidthMaxAndClampValue(widthPX) {
        const elem = /** @type HTMLInputElement */(document.getElementById(CSSSelectors.ids.RECT_WIDTH_INPUT));
        elem.max = widthPX;
        if(parseFloat(elem.value) > widthPX) {
            elem.value = widthPX;
        }
    }
    static setHeightMaxAndClampValue(heightPX) {
        const elem = /** @type HTMLInputElement */(document.getElementById(CSSSelectors.ids.RECT_HEIGHT_INPUT));
        elem.max = heightPX;
        if(parseFloat(elem.value) > heightPX) {
            elem.value = heightPX;
        }
    }

    static setDimensionsMaxAndValue(rectWPX, rectHWPX) {
        this.setWidthMaxAndValue(rectWPX);
        this.setHeightMaxAndValue(rectHWPX);
    }
    static setWidthMaxAndValue(rectWPX) {
        const rectWInput = /** @type HTMLInputElement */ (document.getElementById(CSSSelectors.ids.RECT_WIDTH_INPUT));
        rectWInput.max = rectWPX.toString();
        rectWInput.value = rectWPX.toString();
    }
    static setHeightMaxAndValue(rectHPX) {
        const rectHInput = /** @type HTMLInputElement */ (document.getElementById(CSSSelectors.ids.RECT_HEIGHT_INPUT));
        rectHInput.max = rectHPX.toString();
        rectHInput.value = rectHPX.toString();
    }
    

    static handleRectDimensionsInputChange(widthPX, heightPX) {
        console.log("handleRectDimensionsChange called with widthPX = ", widthPX, " and heightPX = ", heightPX);
        AppContext.rect.setDimensions(widthPX, heightPX);
        const widthInSelectedUnit = MeasurementUnitUtil.pxToSelectedUnit(widthPX, widthPX, AppContext.measurementUnit);
        const heightInSelectedUnit = MeasurementUnitUtil.pxToSelectedUnit(heightPX, heightPX, AppContext.measurementUnit);

        const hSemiAxisMax = MathUtil.restrictDecimalDigits(0.5 * widthInSelectedUnit, 3);
        const vSemiAxisMax = MathUtil.restrictDecimalDigits(0.5 * heightInSelectedUnit, 3);

        SemiAxisSlider.setAllSemiAxesMax(hSemiAxisMax, vSemiAxisMax);
        // [TODO] optimization: only reflect for the sliders that has value changed.
        Operations.reflectAllSemiAxesSliderValueChange();
        CanvasRectangle.setDimensions(widthPX, heightPX);
    }

}