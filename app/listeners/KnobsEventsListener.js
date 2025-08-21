import { CSSSelectors } from "../CSSSelectors.js";
import { Operations } from "../operations.js";
import { AppContext } from "../AppContext.js";
import { semiAxisSlider } from "../knobs/SemiAxisSlider.js";
import { MeasurementUnitSpan } from "../MeasurementUnitSpan.js";

export class KnobsEventsListener {

    static listenOnMeasurementUnitChange() {
        document.querySelectorAll(CSSSelectors.attributes.MEASUREMENT_UNIT_RADIO_BUTTONS).forEach((radioButton) => {
            radioButton.addEventListener('change', (event) => {
                console.log("Measurement Unit Change event = ", event);
                const newMeasurementUnit = /** @type {HTMLInputElement} */(event.target).value;

                semiAxisSlider.adaptToMeasurementUnit(newMeasurementUnit);

                AppContext.measurementUnit = newMeasurementUnit;
                MeasurementUnitSpan.updateAllMeasurementUnitSpans(newMeasurementUnit);
                const sliders = document.getElementsByClassName(CSSSelectors.classes.SEMI_AXIS_SLIDER);
                for(const slider of sliders) {
                    const sliderId = /** @type {HTMLInputElement} */(slider).id;
                    const value = /** @type {HTMLInputElement} */(slider).value;
                    Operations.reflectSemiAxisSliderChange(sliderId, value);
                }
            });
        });
    }
    
    static listenOnRectDimensionsChange() {
        document.getElementsByClassName(CSSSelectors.classes.RECT_DIMENSIONS_FORM)[0].addEventListener('submit', (event) => {
            console.log("Rectangle Dimensions form Submitation event = ", event);
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
                console.log("Semi Axis Slider Input event = ", event);
                const sliderId = /** @type {HTMLInputElement} */(event.target).id;
                const value = /** @type {HTMLInputElement} */(event.target).value;
                Operations.reflectSemiAxisSliderChange(sliderId, value);
            })
        }
    }
}

