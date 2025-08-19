import { AppContext } from "app";
import { Util } from "app/Util.js";

export class Operations {
    static adaptHAxisInputSlidersToNewUnit(newMeasurementUnit) {
        Object.entries(AppContext.hSemiAxisInputSliders).forEach(([key, inputSlider]) => {
            const valueInSelectedUnit = Util.toSelectedUnit(inputSlider.getValue(), AppContext.rect.getWidth(), AppContext.measurementUnit, newMeasurementUnit);
            inputSlider.setValue(valueInSelectedUnit);
    
            const maxInSelectedUnit = Util.toSelectedUnit(inputSlider.getMax(), AppContext.rect.getWidth(), AppContext.measurementUnit, newMeasurementUnit);
            inputSlider.setMax(maxInSelectedUnit);
    
            inputSlider.setCssUnit(newMeasurementUnit);
            console.log("hSemiAxisInputSliders = ", AppContext.hSemiAxisInputSliders);
        });
    }
    
    static adaptvAxisInputSlidersToNewUnit(newMeasurementUnit) {
        Object.entries(AppContext.vSemiAxisInputSliders).forEach(([key, inputSlider]) => {
            const currValueInSelectedUnit = Util.toSelectedUnit(inputSlider.getValue(), AppContext.rect.getHeight(), AppContext.measurementUnit, newMeasurementUnit);
            inputSlider.setValue(currValueInSelectedUnit);
    
            const maxInSelectedUnit = Util.toSelectedUnit(inputSlider.getMax(), AppContext.rect.getHeight(), AppContext.measurementUnit, newMeasurementUnit);
            inputSlider.setMax(maxInSelectedUnit);
    
            inputSlider.setCssUnit(newMeasurementUnit);
    
            console.log("vSemiAxisInputSliders = ", AppContext.vSemiAxisInputSliders);
        });
    } 
}
