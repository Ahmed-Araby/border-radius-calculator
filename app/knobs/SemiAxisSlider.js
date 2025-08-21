import { AppContext } from "../AppContext.js";
import { CSSSelectors } from "../CSSSelectors.js";
import { MeasurementUnitUtil } from "../utils/MeasurementUnitUtil.js";

// [TODO] capatilize the first letter
export class semiAxisSlider {

    static getSliderValue(sliderId) {
        return /** @type {HTMLInputElement} */(document.getElementById(sliderId)).value;
    }

    static adaptToMeasurementUnit(newMeasurementUnit) {
        this.adaptHSlidersToMeasurementUnit(newMeasurementUnit);
        this.adaptVSlidersToMeasurementUnit(newMeasurementUnit);
    }

    static adaptHSlidersToMeasurementUnit(newMeasurementUnit) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.HORIZONTAL_SEMI_AXIS_SLIDER);
        for (const slider of sliders) {
            const currMax = /** @type HTMLInputElement */ (slider).max;
            const currValue = /** @type HTMLInputElement */ (slider).value;

            const maxInNewUnit = MeasurementUnitUtil.toSelectedUnit(currMax, AppContext.rect.getWidth(), AppContext.measurementUnit, newMeasurementUnit);
            const valueInNewUnit = MeasurementUnitUtil.toSelectedUnit(currValue, AppContext.rect.getWidth(), AppContext.measurementUnit, newMeasurementUnit);

            console.log("maxInNewUnit = ", maxInNewUnit);
            console.log("valueInNewUnit = ", valueInNewUnit);
            
            // max must be set first, otherwise the value set can be clapped by the browser if coverting the value to the new measurement unit scaled it beyound the current max.
            /** @type HTMLInputElement */ (slider).max = maxInNewUnit;
            /** @type HTMLInputElement */ (slider).value = valueInNewUnit;
        }
    }

    static adaptVSlidersToMeasurementUnit(newMeasurementUnit) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.VERTICAL_SEMI_AXIS_SLIDER);
        for (const slider of sliders) {
            const currMax = /** @type HTMLInputElement */ (slider).max;
            const currValue = /** @type HTMLInputElement */ (slider).value;

            const maxInNewUnit = MeasurementUnitUtil.toSelectedUnit(currMax, AppContext.rect.getHeight(), AppContext.measurementUnit, newMeasurementUnit);
            const valueInNewUnit = MeasurementUnitUtil.toSelectedUnit(currValue, AppContext.rect.getHeight(), AppContext.measurementUnit, newMeasurementUnit);

            // max must be set first, otherwise the value set can be clapped by the browser if coverting the value to the new measurement unit scaled it beyound the current max.
            /** @type HTMLInputElement */ (slider).max = maxInNewUnit;
            /** @type HTMLInputElement */ (slider).value = valueInNewUnit;
        }
    }
}