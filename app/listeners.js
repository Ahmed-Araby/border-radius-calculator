import { CSSSelectors } from "./CSSSelectors.js";
import { HtmlIdToMapKey } from "./HtmlIdToMapKey.js";
import { Util } from "./Util.js";
import { Operations } from "./operations.js";
import { AppContext } from "./AppContext.js";
import { ValueSpan } from "./ValueSpan.js";
import { CssDeclarationSnippet } from "./CssDeclarationSnippet.js";

export class Listeners {

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
            Operations.handleRectDimensionsChange(widthPX, heightPX);
        });
    }
    
    // [TODO] delete this method
    static listenOnHSemiAxisInputSliderChange() {
        const semiAxisSliders = document.getElementsByClassName(CSSSelectors.classes.HORIZONTAL_SEMI_AXIS_SLIDER);
        for(const slider of semiAxisSliders) {
            slider.addEventListener('input', (event) => {
                const key = HtmlIdToMapKey.hSemiAxisSliderInputIdToHSemiAxisInputSliderKey.get( /** @type {HTMLInputElement} */(event.target).id);
                AppContext.hSemiAxisInputSliders[key].setValue(  /** @type {HTMLInputElement} */(event.target).value);
            });
        }
    }
    
    // [TODO] delete this method
    static listenOnVSemiAxisInputSliderChange() {
        const semiAxisSliders = document.getElementsByClassName(CSSSelectors.classes.VERTICAL_SEMI_AXIS_SLIDER);
        for(const slider of semiAxisSliders) {
            slider.addEventListener('input', (event) => {
                const key = HtmlIdToMapKey.vSemiAxisSliderInputIdToVSemiAxisInputSliderKey.get( /** @type {HTMLInputElement} */(event.target).id);
                AppContext.vSemiAxisInputSliders[key].setValue( /** @type {HTMLInputElement} */(event.target).value);
            });
        }
    }

    static listenOnSemiAxisSliderInput() {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            slider.addEventListener("input", (event)=> {
                const sliderId = /** @type {HTMLInputElement} */(event.target).id;
                const value = /** @type {HTMLInputElement} */(event.target).value;
                Operations.handleSemiAxisSliderChange(sliderId, value);
            })
        }
    }
}

