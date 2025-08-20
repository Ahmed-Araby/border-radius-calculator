import { CSSSelectors } from "./CSSSelectors.js";

export class MeasurementUnitSpan {

    static updateAllMeasurementUnitSpans(newMeasurementUnit) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.ELLIPSE_SEMI_AXIS_UNIT);
        for(const slider of sliders) {
            slider.textContent = newMeasurementUnit;    
        }
    }
}