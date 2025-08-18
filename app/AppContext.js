class AppContext {
    static context = {
        rect: new Rectangle(100, 100),
        semiAxismeasurementCssUnit: "px",
        topLeftEllipse: new Ellipse(0, 0),
        topRightEllipse: new Ellipse(0, 0),
        bottomRightEllipse: new Ellipse(0, 0),
        bottomLeftEllipse: new Ellipse(0, 0),
    };


    static setSemiAxismeasurementCssUnit(cssUnit) {
        AppContext.context.semiAxismeasurementCssUnit = cssUnit;
    }
}