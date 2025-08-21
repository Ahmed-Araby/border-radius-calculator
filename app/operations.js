import { ValueSpan } from "./knobs/ValueSpan.js";
import { CssDeclarationSnippet } from "./CssDeclarationSnippet.js";
import { CanvasEllipse } from "./canvas/CanvasEllipse.js";
import { CanvasRectangle } from "./canvas/CanvasRectangle.js";

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
}
