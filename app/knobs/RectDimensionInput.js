import { CSSSelectors } from "../CSSSelectors.js";

export class RectDimensionInput {

    static restrictDimensionInput(maxWidthPX, maxHeightPX) {
        console.log("restrict maximum dimensions to", maxWidthPX, "x", maxHeightPX);
        this.setMaximumWidthAndClampValue(maxWidthPX);
        this.setMaximumHeightAndClampValue(maxHeightPX);
    }

    static setMaximumWidthAndClampValue(widthPX) {
        const elem = /** @type HTMLInputElement */(document.getElementById(CSSSelectors.ids.RECT_DIMENSION_WIDTH));
        elem.max = widthPX;
        if(parseFloat(elem.value) > widthPX) {
            elem.value = widthPX;
        }
    }


    static setMaximumHeightAndClampValue(heightPX) {
        const elem = /** @type HTMLInputElement */(document.getElementById(CSSSelectors.ids.RECT_DIMENSION_HEIGHT));
        elem.max = heightPX;
        if(parseFloat(elem.value) > heightPX) {
            elem.value = heightPX;
        }
    }

}