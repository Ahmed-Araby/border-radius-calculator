import { CSSSelectors } from "./CSSSelectors";
import { HtmlIdToMapKey } from "./HtmlIdToMapKey";
import { Util } from "./Util";
import { Operations } from "operations";
import { AppContext } from "app";

export class listeners {

    static listenOnMeasurementUnitChange() {
        document.querySelectorAll(CSSSelectors.attributes.MEASUREMENT_UNIT_RADIO_BUTTONS).forEach((radioButton) => {
    
            radioButton.addEventListener('change', (event) => {
                const newMeasurementUnit = /** @type {HTMLInputElement} */(event.target).value;
                Operations.adaptHAxisInputSlidersToNewUnit(newMeasurementUnit);
                Operations.adaptvAxisInputSlidersToNewUnit(newMeasurementUnit);
                AppContext.measurementUnit = newMeasurementUnit;
            });
        });
    }
    
    static listenOnRectDimensionsChange() {
        document.getElementsByClassName(CSSSelectors.classes.RECT_DIMENSIONS_FORM)[0].addEventListener('submit', (event) => {
            console.log("Rectangle Dimensions Fomr Submitation event = ", event);
            event.preventDefault();
    
            const formData = new FormData(/** @type {HTMLFormElement} */ (event.target));
            const widthPX = formData.get("width");
            const heightPX = formData.get("height");
    
            AppContext.rect.setDimensions(widthPX, heightPX);
    
            const widthInSelectedUnit = Util.pxToSelectedUnit(widthPX, widthPX, AppContext.measurementUnit);
            Object.entries(AppContext.hSemiAxisInputSliders).forEach(([key, inputSlider]) => {
                inputSlider.setMax(widthInSelectedUnit / 2);
                inputSlider.clampValue();
            });
    
            const heightInSelectedUnit = Util.pxToSelectedUnit(heightPX, heightPX, AppContext.measurementUnit);
            Object.entries(AppContext.vSemiAxisInputSliders).forEach(([key, inputSlider]) => {
                inputSlider.setMax(heightInSelectedUnit / 2);
                inputSlider.clampValue();
            });
    
            console.log("rect = ", AppContext.rect);
            console.log("hSemiAxisInputSliders = ", AppContext.hSemiAxisInputSliders);
            console.log("vSemiAxisInputSliders = ", AppContext.vSemiAxisInputSliders);
        });
    }
    
    static listenOnHSemiAxisInputSliderChange() {
        const semiAxisSliders = document.getElementsByClassName(CSSSelectors.classes.HORIZONTAL_SEMI_AXIS_SLIDER);
        for(const slider of semiAxisSliders) {
            slider.addEventListener('input', (event) => {
                const key = HtmlIdToMapKey.hSemiAxisSliderInputIdToHSemiAxisInputSliderKey.get( /** @type {HTMLInputElement} */(event.target).id);
                AppContext.hSemiAxisInputSliders[key].setValue(  /** @type {HTMLInputElement} */(event.target).value);
            });
        }
    }
    
    static listenOnVSemiAxisInputSliderChange() {
        const semiAxisSliders = document.getElementsByClassName(CSSSelectors.classes.VERTICAL_SEMI_AXIS_SLIDER);
        for(const slider of semiAxisSliders) {
            slider.addEventListener('input', (event) => {
                const key = HtmlIdToMapKey.vSemiAxisSliderInputIdToVSemiAxisInputSliderKey.get( /** @type {HTMLInputElement} */(event.target).id);
                AppContext.vSemiAxisInputSliders[key].setValue( /** @type {HTMLInputElement} */(event.target).value);
            });
        }
    }
}

