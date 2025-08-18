const rect = new Rectangle(600, 600);

const hSemiAxisInputSliders = {
    topLeftHSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    topRightHSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    bottomRightHSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
}
const vSemiAxisInputSliders = {
    topLeftVSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    topRightVSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    bottomRightVSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
};

function listenOnMeasurementUnitRadioButtonsSelection() {
    document.querySelectorAll(CSS_SELECTORS.MEASUREMENT_UNIT_RADIO_BUTTONS).forEach((radioButton) => {
        radioButton.addEventListener('change', (event) => {
            console.log("MEasurement Unit Radio Button Selection event = ", event)
            handleMeasurementUnitSelection(event);
        });
    });
}

function listenOnRectDimensionsChange() {
    document.querySelector(CSS_SELECTORS.RECT_DIMENSIONS_FORM).addEventListener('submit', (event) => {
        console.log("Rectangle Dimensions Fomr Submitation event = ", event);
        event.preventDefault();

        const formData = new FormData(event.target);
        const widthPX = formData.get("width");
        const heightPX = formData.get("height");

        rect.setDimensions(widthPX, heightPX);

        // [TODO] change the selected unit to the one selected in the radio buttons
        const widthInSelectedUnit = Util.pxToSelectedUnit(widthPX, widthPX, "px");
        Object.entries(hSemiAxisInputSliders).forEach(([key, inputSlider]) => {
            inputSlider.setMax(widthInSelectedUnit / 2);
            inputSlider.clampValue();
        });

        // [TODO] change the selected unit to the one selected in the radio buttons
        const heightInSelectedUnit = Util.pxToSelectedUnit(heightPX, heightPX, "px");
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
    const semiAxisSliders = document.getElementsByClassName(CSS_SELECTORS.SEMI_AXIS_SLIDER_CLASS_NAME);
    for(slider of semiAxisSliders) {
        slider.addEventListener('input', (event) => {
            const sliderValueUIElementId = semiAxisSliderInputIdToSemiAxisValueId.get(event.target.id);
            document.getElementById(sliderValueUIElementId).textContent = event.target.value;
        });
    }
}