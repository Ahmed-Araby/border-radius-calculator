import { ValueSpan } from "./knobs/ValueSpan.js";
import { AppContext } from "./AppContext.js";
import { MeasurementUnitUtil } from "./utils/MeasurementUnitUtil.js";
import { CssDeclarationSnippet } from "./CssDeclarationSnippet.js";
import { CSSSelectors } from "./CSSSelectors.js";
import { CanvasEllipse } from "./canvas/CanvasEllipse.js";
import { CanvasRectangle } from "./canvas/CanvasRectangle.js";

export class Operations {
    
    static reflectSemiAxisSliderChange(sliderId, newValue) {
        ValueSpan.setValueSpan(sliderId, newValue);
        CssDeclarationSnippet.setCssInividualDeclarationSnippet(sliderId, newValue);
        CssDeclarationSnippet.updateCssShorthandDeclarationSnippet();

        // [TODO] don't execute this method call when the measurement unit change
        const slider = document.getElementById(sliderId);
        CanvasEllipse.updateCorrespondingEllipse(sliderId, newValue);
        // [TODO] update the above methods to recieve a slider
        CanvasRectangle.setCorrespondingCornerRadius(slider);
    }

    static handleRectDimensionsChange(widthPX, heightPX) {
        console.log("handleRectDimensionsChange called with widthPX = ", widthPX, " and heightPX = ", heightPX);
        AppContext.rect.setDimensions(widthPX, heightPX);
        const widthInSelectedUnit = MeasurementUnitUtil.pxToSelectedUnit(widthPX, widthPX, AppContext.measurementUnit);
        const heightInSelectedUnit = MeasurementUnitUtil.pxToSelectedUnit(heightPX, heightPX, AppContext.measurementUnit);

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
                Operations.reflectSemiAxisSliderChange(slider.id, newMax);
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
                Operations.reflectSemiAxisSliderChange(slider.id, newMax);
            }
        }
    }
}
