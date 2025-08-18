function setRectDimensions(width, height) {
    const rectHtmlElem = document.querySelector(CSS_SELECTORS.RECT);
    rectHtmlElem.style.width = width + "px";
    rectHtmlElem.style.height = height + "px";
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