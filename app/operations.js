import { ValueSpan } from "./knobs/ValueSpan.js";
import { CssDeclarationSnippet } from "./CssDeclarationSnippet.js";
import { CanvasEllipse } from "./canvas/CanvasEllipse.js";
import { CanvasRectangle } from "./canvas/CanvasRectangle.js";
import { CSSSelectors } from "./CSSSelectors.js";

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


    static reflectAllSemiAxesSliderValueChange() {
        this.#reflectAllHSemiAxesSliderValueChange();
        this.#reflectAllVSemiAxesSliderValueChange();
    }
    static #reflectAllHSemiAxesSliderValueChange() {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.HORIZONTAL_SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            const sliderId = slider.id;
            const value = /** @type {HTMLInputElement} */(slider).value;
            this.reflectSemiAxisSliderValueChange(sliderId, value);
        }
    }
    static #reflectAllVSemiAxesSliderValueChange() {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.VERTICAL_SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            const sliderId = slider.id;
            const value = /** @type {HTMLInputElement} */(slider).value;
            this.reflectSemiAxisSliderValueChange(sliderId, value);
        }
    }
}
