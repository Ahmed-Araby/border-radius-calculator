console.log("init Border Radius Calculator App");


const CSS_SELECTORS = {
    MEASUREMENT_UNIT_RADIO_BUTTONS: "input[name='unit'][type='radio']",
    ELLIPSE_SEMI_AXIS_UNIT: ".semi-axis-unit",
    RECT_DIMENSION_WIDTH: "#rect-width-input",
    RECT_DIMENSIONS_FORM: ".rect-dimensions-form",
    RECT: "#rect",
    SEMI_AXIS_SLIDER_CLASS_NAME: "semi-axis-slider",
    HORIZONTAL_SEMI_AXIS_SLIDER_CLASS_NAME: "h-semi-axis-slider",
    VERTICAL_SEMI_AXIS_SLIDER_CLASS_NAME: "v-semi-axis-slider"
};

const semiAxisSliderInputIdToSemiAxisValueId = new Map([
    ["top-left-ellipse-horizontal-sami-axis-slider", "top-left-ellipse-horizontal-sami-axis-value"],
    ["top-left-ellipse-vertical-sami-axis-slider", "top-left-ellipse-vertical-sami-axis-value"],
    ["top-right-ellipse-horizontal-sami-axis-slider", "top-right-ellipse-horizontal-sami-axis-value"],
    ["top-right-ellipse-vertical-sami-axis-slider", "top-right-ellipse-vertical-sami-axis-value"],
    ["bottom-left-ellipse-horizontal-sami-axis-slider", "bottom-left-ellipse-horizontal-sami-axis-value"],
    ["bottom-left-ellipse-vertical-sami-axis-slider", "bottom-left-ellipse-vertical-sami-axis-value"],
    ["bottom-right-ellipse-horizontal-sami-axis-slider", "bottom-right-ellipse-horizontal-sami-axis-value"],
    ["bottom-right-ellipse-vertical-sami-axis-slider", "bottom-right-ellipse-vertical-sami-axis-value"]
]);


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
    listenOnHSemiAxisInputSliderChange();
});




