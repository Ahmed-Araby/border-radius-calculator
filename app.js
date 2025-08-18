console.log("init Border Radius Calculator App");


const CSS_SELECTORS = {
    MEASUREMENT_UNIT_RADIO_BUTTONS: "input[name='unit'][type='radio']",
    ELLIPSE_SEMI_AXIS_UNIT: ".semi-axis-unit",
    RECT_DIMENSION_WIDTH: "#rect-width-input",
    RECT_DIMENSIONS_FORM: ".rect-dimensions-form",
    RECT: "#rect",
    HORIZONTAL_SEMI_AXIS_SLIDER_CLASS_NAME: "h-semi-axis-slider",
    VERTICAL_SEMI_AXIS_SLIDER_CLASS_NAME: "v-semi-axis-slider"
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
    measurementUnit: "px",
    topLeftEllipse: new Ellipse(0, 0),
    topRightEllipse: new Ellipse(0, 0),
    bottomRightEllipse: new Ellipse(0, 0),
    bottomLeftEllipse: new Ellipse(0, 0),
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    console.log("register event listeners");
    listenOnMeasurementUnitRadioButtonsSelection();
    listenOnRectDimensionsChange()
});


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
        setRectDimensions(formData.get("width"), formData.get("height"));
        setSemiAxisSliderInputMaxValue(formData.get("width"), formData.get("height"));
    });
}

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