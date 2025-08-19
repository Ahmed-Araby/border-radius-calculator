import { CSSSelectors } from "./CSSSelectors";
import { HtmlIdToMapKey } from "./HtmlIdToMapKey";
import { Util } from "./Util";

function listenOnMeasurementUnitChange() {
    document.querySelectorAll(CSSSelectors.attributes.MEASUREMENT_UNIT_RADIO_BUTTONS).forEach((radioButton) => {

        radioButton.addEventListener('change', (event) => {
            newMeasurementUnit = event.target.value;
            adaptHAxisInputSlidersToNewUnit(newMeasurementUnit);
            adaptvAxisInputSlidersToNewUnit(newMeasurementUnit);
            measurementUnit = newMeasurementUnit;
        });
    });
}

function listenOnRectDimensionsChange() {
    document.getElementsByClassName(CSSSelectors.classes.RECT_DIMENSIONS_FORM)[0].addEventListener('submit', (event) => {
        console.log("Rectangle Dimensions Fomr Submitation event = ", event);
        event.preventDefault();

        const formData = new FormData(event.target);
        const widthPX = formData.get("width");
        const heightPX = formData.get("height");

        rect.setDimensions(widthPX, heightPX);

        const widthInSelectedUnit = Util.pxToSelectedUnit(widthPX, widthPX, measurementUnit);
        Object.entries(hSemiAxisInputSliders).forEach(([key, inputSlider]) => {
            inputSlider.setMax(widthInSelectedUnit / 2);
            inputSlider.clampValue();
        });

        const heightInSelectedUnit = Util.pxToSelectedUnit(heightPX, heightPX, measurementUnit);
        Object.entries(vSemiAxisInputSliders).forEach(([key, inputSlider]) => {
            inputSlider.setMax(heightInSelectedUnit / 2);
            inputSlider.clampValue();
        });

        console.log("rect = ", rect);
        console.log("hSemiAxisInputSliders = ", hSemiAxisInputSliders);
        console.log("vSemiAxisInputSliders = ", vSemiAxisInputSliders);
    });
}

function listenOnHSemiAxisInputSliderChange() {
    const semiAxisSliders = document.getElementsByClassName(CSSSelectors.classes.HORIZONTAL_SEMI_AXIS_SLIDER);
    for(slider of semiAxisSliders) {
        slider.addEventListener('input', (event) => {
            const key = HtmlIdToMapKey.hSemiAxisSliderInputIdToHSemiAxisInputSliderKey.get(event.target.id);
            hSemiAxisInputSliders[key].setValue(event.target.value);
        });
    }
}

function listenOnVSemiAxisInputSliderChange() {
    const semiAxisSliders = document.getElementsByClassName(CSSSelectors.classes.VERTICAL_SEMI_AXIS_SLIDER);
    for(slider of semiAxisSliders) {
        slider.addEventListener('input', (event) => {
            const key = HtmlIdToMapKey.vSemiAxisSliderInputIdToVSemiAxisInputSliderKey.get(event.target.id);
            vSemiAxisInputSliders[key].setValue(event.target.value);
        });
    }
}