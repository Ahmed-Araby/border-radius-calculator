function adaptHAxisInputSlidersToNewUnit(newMeasurementUnit) {
    Object.entries(hSemiAxisInputSliders).forEach(([key, inputSlider]) => {
        const valueInSelectedUnit = Util.toSelectedUnit(inputSlider.getValue(), rect.getWidth(), measurementUnit, newMeasurementUnit);
        inputSlider.setValue(valueInSelectedUnit);

        const maxInSelectedUnit = Util.toSelectedUnit(inputSlider.getMax(), rect.getWidth(), measurementUnit, newMeasurementUnit);
        inputSlider.setMax(maxInSelectedUnit);

        inputSlider.setCssUnit(newMeasurementUnit);
        console.log("hSemiAxisInputSliders = ", hSemiAxisInputSliders);
    });
}

function adaptvAxisInputSlidersToNewUnit(newMeasurementUnit) {
    Object.entries(vSemiAxisInputSliders).forEach(([key, inputSlider]) => {
        const currValueInSelectedUnit = Util.toSelectedUnit(inputSlider.getValue(), rect.getHeight(), measurementUnit, newMeasurementUnit);
        inputSlider.setValue(currValueInSelectedUnit);

        const maxInSelectedUnit = Util.toSelectedUnit(inputSlider.getMax(), rect.getHeight(), measurementUnit, newMeasurementUnit);
        inputSlider.setMax(maxInSelectedUnit);

        inputSlider.setCssUnit(newMeasurementUnit);

        console.log("vSemiAxisInputSliders = ", vSemiAxisInputSliders);
    });
}