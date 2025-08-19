import { ValueSpan } from "./ValueSpan.js";
import { AppContext } from "./AppContext.js";
import { Util } from "./Util.js";
import { CssDeclarationSnippet } from "./CssDeclarationSnippet.js";
import { CSSSelectors } from "./CSSSelectors.js";

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
    
    
    static handleSemiAxisSliderChange(sliderId, newValue) {
        ValueSpan.setValueSpan(sliderId, newValue);
        CssDeclarationSnippet.setCssInividualDeclarationSnippet(sliderId, newValue);
        CssDeclarationSnippet.updateCssShorthandDeclarationSnippet();
    }

    static handleRectDimensionsChange(widthPX, heightPX) {
        console.log("handleRectDimensionsChange called with widthPX = ", widthPX, " and heightPX = ", heightPX);
        const widthInSelectedUnit = Util.pxToSelectedUnit(widthPX, widthPX, AppContext.measurementUnit);
        const heightInSelectedUnit = Util.pxToSelectedUnit(heightPX, heightPX, AppContext.measurementUnit);

        this.handleRectWidthChange(widthInSelectedUnit);
        this.handleRectHeightChange(heightInSelectedUnit);
    }

    static handleRectWidthChange(newWidthInSelectedUnit) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.HORIZONTAL_SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            const newMax = newWidthInSelectedUnit / 2;
            
            const valueBeforeApplyingNewMax = /** @type {HTMLInputElement} */(slider).value;
            /** @type {HTMLInputElement} */(slider).max = newMax.toString();
            const valueAfterApplyingNewMax = /** @type {HTMLInputElement} */(slider).value;

            if(valueBeforeApplyingNewMax != valueAfterApplyingNewMax) {
                // value has been clamped
                Operations.handleSemiAxisSliderChange(slider.id, newMax);
            }
        }
    }

    static handleRectHeightChange(newHeightInSelectedUnit) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.VERTICAL_SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            const newMax = newHeightInSelectedUnit / 2;
            
            const valueBeforeApplyingNewMax = /** @type {HTMLInputElement} */(slider).value;
            /** @type {HTMLInputElement} */(slider).max = newMax.toString();
            const valueAfterApplyingNewMax = /** @type {HTMLInputElement} */(slider).value;

            if(valueBeforeApplyingNewMax != valueAfterApplyingNewMax) {
                // value has been clamped
                Operations.handleSemiAxisSliderChange(slider.id, newMax);
            }
        }
    }
}
