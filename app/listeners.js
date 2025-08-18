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
        const width = formData.get("width");
        const height = formData.get("height");
        
        setRectDimensions(width, height);

        EllipseSemiAxis.setHAxisMax(width / 2);
        EllipseSemiAxis.setVAxisMax(height / 2);
        EllipseSemiAxis.dispatchInputEvents();
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