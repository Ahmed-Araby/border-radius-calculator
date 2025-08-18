function handleMeasurementUnitSelection(event) {
    const measurementUnit = event.target.value;
    console.log("selected measurement unit = ", measurementUnit);

    AppContext.setSemiAxismeasurementCssUnit(measurementUnit);
    EllipseSemiAxis.setMeasurementUnits(measurementUnit);

}