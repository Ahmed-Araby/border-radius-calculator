import { CSSSelectors } from "../CSSSelectors.js";
import { IdUtil } from "../utils/IdUtil.js";

export class SemiAxisMeasurement {

    static setCorrespondingValue(slider) {
        const spanId = IdUtil.getCorrespondingSemiAxisMeasurementValueSpanId(slider.id);
        document.getElementById(spanId).innerText = slider.value;
    }

    static updateAllMeasurementsUnit(newMeasurementUnit) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.ELLIPSE_SEMI_AXIS_UNIT);
        for(const slider of sliders) {
            slider.textContent = newMeasurementUnit;    
        }
    }
}