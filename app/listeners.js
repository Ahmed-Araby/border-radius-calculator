function listenOnMeasurementUnitChange() {
    document.querySelectorAll(CSSSelectors.attributes.MEASUREMENT_UNIT_RADIO_BUTTONS).forEach((radioButton) => {
        radioButton.addEventListener('change', (event) => {
            console.log("Measurement Unit Change event = ", event.target.value);
            
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