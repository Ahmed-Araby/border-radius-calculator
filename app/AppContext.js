class AppContext {
    static context = {
        rect: new Rectangle(600, 600), // dimensions always in pixels
        semiAxisMeasurementCssUnit: "px",
        ellipseInputSlider: new InputSlider(0, 300, 1),
        topLeftEllipse: new Ellipse(0, 0),
        topRightEllipse: new Ellipse(0, 0),
        bottomRightEllipse: new Ellipse(0, 0),
        bottomLeftEllipse: new Ellipse(0, 0),
    };


    static getSemiAxisMeasurementCssUnit() {
        return AppContext.context.semiAxisMeasurementCssUnit;
    }

    static getRectWidth() {
        return AppContext.context.rect.width;
    }

    static getRectHeight() {
        return AppContext.context.rect.height;
    }

    static setSemiAxismeasurementCssUnit(cssUnit) {
        AppContext.context.semiAxisMeasurementCssUnit = cssUnit;
    }
}