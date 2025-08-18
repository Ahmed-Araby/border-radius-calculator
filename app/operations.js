function setRectDimensions(width, height) {
    const rectHtmlElem = document.querySelector(CSS_SELECTORS.RECT);
    rectHtmlElem.style.width = width + "px";
    rectHtmlElem.style.height = height + "px";
}

function setSemiAxisSliderInputMaxValue(rectWidth, rectHeight) {
    const hSliders = document.getElementsByClassName(CSS_SELECTORS.HORIZONTAL_SEMI_AXIS_SLIDER_CLASS_NAME);
    for (slider of hSliders) {
        slider.max = rectWidth / 2;
    }

    const vSlider = document.getElementsByClassName(CSS_SELECTORS.VERTICAL_SEMI_AXIS_SLIDER_CLASS_NAME);
    for (slider of vSlider) {
        slider.max = rectHeight / 2;
    }
}


function handleMeasurementUnitSelection(event) {
    const measurementUnit = event.target.value;
    console.log("selected measurement unit = ", measurementUnit);

    appState.measurementUnit = measurementUnit;
    
    updateEllipseMeasurmentUnits(measurementUnit);

}

function updateEllipseMeasurmentUnits(measurementUnit) {
    const measurementUIValue = getMeasurementUIValue(measurementUnit);
    document.querySelectorAll(CSS_SELECTORS.ELLIPSE_SEMI_AXIS_UNIT).forEach((ellipseUnitElement) => {
        ellipseUnitElement.textContent = measurementUIValue;
    });
}

function getMeasurementUIValue(measurementUnit) {
    switch (measurementUnit) {
        case "px":
            return "Pixels";
        case "rem":
            return "REM";
        case "percentage":
            return "Percentage";
        default:
            throw new Error(`Unknown measurement unit: ${measurementUnit}`);
    }
}