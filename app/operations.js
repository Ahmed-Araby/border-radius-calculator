import { ValueSpan } from "./knobs/ValueSpan.js";
import { AppContext } from "./AppContext.js";
import { MeasurementUnitUtil } from "./utils/MeasurementUnitUtil.js";
import { CssDeclarationSnippet } from "./CssDeclarationSnippet.js";
import { CanvasEllipse } from "./canvas/CanvasEllipse.js";
import { CanvasRectangle } from "./canvas/CanvasRectangle.js";
import { semiAxisSlider } from "./knobs/SemiAxisSlider.js";

export class Operations {
    
    static reflectSemiAxisSliderValueChange(sliderId, newValue) {
        // knobs operations
        ValueSpan.setValueSpan(sliderId, newValue);
        CssDeclarationSnippet.setCssInividualDeclarationSnippet(sliderId, newValue);
        CssDeclarationSnippet.updateCssShorthandDeclarationSnippet();

        // canvas operations
        // [TODO] don't execute this method call when the measurement unit change
        const slider = document.getElementById(sliderId);
        CanvasEllipse.updateCorrespondingEllipse(sliderId, newValue);
        // [TODO] update the above methods to recieve a slider
        CanvasRectangle.setCorrespondingCornerRadius(slider);
    }

    static handleRectDimensionsInputChange(widthPX, heightPX) {
        console.log("handleRectDimensionsChange called with widthPX = ", widthPX, " and heightPX = ", heightPX);
        AppContext.rect.setDimensions(widthPX, heightPX);
        const widthInSelectedUnit = MeasurementUnitUtil.pxToSelectedUnit(widthPX, widthPX, AppContext.measurementUnit);
        const heightInSelectedUnit = MeasurementUnitUtil.pxToSelectedUnit(heightPX, heightPX, AppContext.measurementUnit);

        semiAxisSlider.handleRectWidthInputChange(widthInSelectedUnit);
        semiAxisSlider.handleRectHeightInputChange(heightInSelectedUnit);
    }
}
