import { AppContext } from "../AppContext.js";
import { MeasurementUnitUtil } from "../utils/MeasurementUnitUtil.js";
import { CSSSelectors } from "../CSSSelectors.js";
import { semiAxisSlider } from "./SemiAxisSlider.js";

export class RectDimensionInput {

    static restrictDimensionInput(maxWidthPX, maxHeightPX) {
        console.log("restrict maximum dimensions to", maxWidthPX, "x", maxHeightPX);
        this.setMaximumWidthAndClampValue(maxWidthPX);
        this.setMaximumHeightAndClampValue(maxHeightPX);
    }

    static setMaximumWidthAndClampValue(widthPX) {
        const elem = /** @type HTMLInputElement */(document.getElementById(CSSSelectors.ids.RECT_WIDTH_INPUT));
        elem.max = widthPX;
        if(parseFloat(elem.value) > widthPX) {
            elem.value = widthPX;
        }
    }


    static setMaximumHeightAndClampValue(heightPX) {
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

        semiAxisSlider.handleRectWidthInputChange(widthInSelectedUnit);
        semiAxisSlider.handleRectHeightInputChange(heightInSelectedUnit);
    }

}