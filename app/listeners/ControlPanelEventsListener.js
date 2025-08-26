import { CSSSelectors } from "../CSSSelectors.js";
import { AppContext } from "../AppContext.js";
import { RectDimensionInput } from "../control-panel/RectDimensionInput.js";
import { SemiAxisMeasurement } from "../control-panel/SemiAxisMeasurement.js";
import { SemiAxisSlider } from "../control-panel/SemiAxisSlider.js";
import { HideEllipsesCheckbox } from "../control-panel/HideEllipsesCheckbox.js";

export class ControlPanelEventsListener {

    static listenOnMeasurementUnitChange() {
        document.querySelectorAll(CSSSelectors.attributes.MEASUREMENT_UNIT_RADIO_BUTTONS).forEach((radioButton) => {
            radioButton.addEventListener('change', (event) => {
                console.log("Measurement Unit Change event = ", event);
                const newMeasurementUnit = /** @type {HTMLInputElement} */(event.target).value;

                SemiAxisSlider.adaptToMeasurementUnit(newMeasurementUnit);

                AppContext.measurementUnit = newMeasurementUnit;
                SemiAxisMeasurement.updateAllMeasurementsUnit(newMeasurementUnit);
                const sliders = document.getElementsByClassName(CSSSelectors.classes.SEMI_AXIS_SLIDER);
                for(const slider of sliders) {
                    SemiAxisSlider.handleSemiAxisSliderValueChange(slider);
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
            RectDimensionInput.handleRectDimensionsInputChange(widthPX, heightPX);
        });
    }

    static listenOnSemiAxisSliderInput() {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            slider.addEventListener("input", (event)=> {
                console.log("Semi Axis Slider Input event = ", event);
                SemiAxisSlider.handleSemiAxisSliderValueChange(slider);
            })
        }
    }

    static listenOnHideEllipsesCheckboxChange() {
        document.getElementById(CSSSelectors.ids.CORNER_ELLIPSES_VISIBILITY_CHECKBOX).addEventListener("change", (event)=> {
            HideEllipsesCheckbox.changeEllipsesVisibility(event);
        })
    }
}

