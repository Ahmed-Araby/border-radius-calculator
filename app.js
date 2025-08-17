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
