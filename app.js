console.log("init Border Radius Calculator App");


const CSS_SELECTORS = {
    MEASUREMENT_UNIT_RADIO_BUTTONS: "input[name='unit'][type='radio']",
    ELLIPSE_SEMI_AXIS_UNIT: ".semi-axis-unit",
};

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}

class Ellipse {
    constructor(hAxis, vAxis) {
        this.hAxis = hAxis;
        this.vAxis = vAxis;
    }
}

appState = {
    rect: new Rectangle(100, 100),
    measurementUnit: "Pixels",
    topLeftEllipse: new Ellipse(0, 0),
    topRightEllipse: new Ellipse(0, 0),
    bottomRightEllipse: new Ellipse(0, 0),
    bottomLeftEllipse: new Ellipse(0, 0),
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    console.log("register event listeners");
    listenOnMeasurementUnitRadioButtonsSelection();
});


function listenOnMeasurementUnitRadioButtonsSelection() {
    document.querySelectorAll(CSS_SELECTORS.MEASUREMENT_UNIT_RADIO_BUTTONS).forEach((radioButton) => {
        radioButton.addEventListener('change', (event) => {
            console.log("event = ", event)
            handleMeasurementUnitSelection(event);
        });
    });
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