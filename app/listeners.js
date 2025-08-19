import { CSSSelectors } from "./CSSSelectors.js";
import { Operations } from "./operations.js";
import { AppContext } from "./AppContext.js";

export class Listeners {

    static listenOnMeasurementUnitChange() {
        document.querySelectorAll(CSSSelectors.attributes.MEASUREMENT_UNIT_RADIO_BUTTONS).forEach((radioButton) => {
    
            radioButton.addEventListener('change', (event) => {
                const newMeasurementUnit = /** @type {HTMLInputElement} */(event.target).value;
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

