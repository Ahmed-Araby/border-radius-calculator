import { AppContext } from "../AppContext.js";
import { CSSSelectors } from "../CSSSelectors.js";
import { MeasurementUnitUtil } from "../utils/MeasurementUnitUtil.js";
import { CanvasEllipse } from "../canvas/CanvasEllipse.js";
import { CanvasRectangle } from "../canvas/CanvasRectangle.js";
import { CssDeclarationSnippet } from "../CssDeclarationSnippet.js";
import { ValueSpan } from "./ValueSpan.js";
import { IdUtil } from "../utils/IdUtil.js";
import { CssCornerRadiusDeclarationSnippet } from "./CssCornerRadiusDeclarationSnippet.js";

export class SemiAxisSlider {

    static getSliderValue(sliderId) {
        return /** @type {HTMLInputElement} */(document.getElementById(sliderId)).value;
    }

    static getSibilingSlider(slider) {
        const siblingSliderId = IdUtil.getSibilingAxisSliderId(slider.id);
        return document.getElementById(siblingSliderId);
    }

    static adaptToMeasurementUnit(newMeasurementUnit) {
        this.adaptHSlidersToMeasurementUnit(newMeasurementUnit);
        this.adaptVSlidersToMeasurementUnit(newMeasurementUnit);
    }
    static adaptHSlidersToMeasurementUnit(newMeasurementUnit) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.HORIZONTAL_SEMI_AXIS_SLIDER);
        for (const slider of sliders) {
            const currMax = /** @type HTMLInputElement */ (slider).max;
            const currValue = /** @type HTMLInputElement */ (slider).value;

            const maxInNewUnit = MeasurementUnitUtil.toSelectedUnit(currMax, AppContext.rect.getWidth(), AppContext.measurementUnit, newMeasurementUnit);
            const valueInNewUnit = MeasurementUnitUtil.toSelectedUnit(currValue, AppContext.rect.getWidth(), AppContext.measurementUnit, newMeasurementUnit);

            // max must be set first, otherwise the value set can be clapped by the browser if coverting the value to the new measurement unit scaled it beyound the current max.
            /** @type HTMLInputElement */ (slider).max = maxInNewUnit;
            /** @type HTMLInputElement */ (slider).value = valueInNewUnit;
        }
    }
    static adaptVSlidersToMeasurementUnit(newMeasurementUnit) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.VERTICAL_SEMI_AXIS_SLIDER);
        for (const slider of sliders) {
            const currMax = /** @type HTMLInputElement */ (slider).max;
            const currValue = /** @type HTMLInputElement */ (slider).value;

            const maxInNewUnit = MeasurementUnitUtil.toSelectedUnit(currMax, AppContext.rect.getHeight(), AppContext.measurementUnit, newMeasurementUnit);
            const valueInNewUnit = MeasurementUnitUtil.toSelectedUnit(currValue, AppContext.rect.getHeight(), AppContext.measurementUnit, newMeasurementUnit);

            // max must be set first, otherwise the value set can be clapped by the browser if coverting the value to the new measurement unit scaled it beyound the current max.
            /** @type HTMLInputElement */ (slider).max = maxInNewUnit;
            /** @type HTMLInputElement */ (slider).value = valueInNewUnit;
        }
    }

    static setSemiAxesMaxAndValue(hSemiAxisMax, hSemiAxisValue, vSemiAxisMax, vSemiAxisValue) {
        this.setHSemiAxesMaxAndValue(hSemiAxisMax, hSemiAxisValue);
        this.setVSemiAxesMaxAndValue(vSemiAxisMax, vSemiAxisValue);
    }
    static setHSemiAxesMaxAndValue(max, value) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.HORIZONTAL_SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            /** @type {HTMLInputElement} */(slider).max = max.toString();
            /** @type {HTMLInputElement} */(slider).value = value.toString();
        }
    }
    static setVSemiAxesMaxAndValue(max, value) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.VERTICAL_SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            /** @type {HTMLInputElement} */(slider).max = max.toString();
            /** @type {HTMLInputElement} */(slider).value = value.toString();
        }
    }

    static setAllSemiAxesMax(hSemiAxisMax, vSemiAxisMax) {
        this.#setHSemiAxesMax(hSemiAxisMax);
        this.#setVSemiAxesMax(vSemiAxisMax);
    }
    static #setHSemiAxesMax(max) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.HORIZONTAL_SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            /** @type {HTMLInputElement} */(slider).max = max.toString();
        }
    }
    static #setVSemiAxesMax(max) {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.VERTICAL_SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            /** @type {HTMLInputElement} */(slider).max = max.toString();
        }
    }


        
    static handleAllSemiAxesSliderValueChange() {
        this.#handleAllHSemiAxesSliderValueChange();
        this.#handleAllVSemiAxesSliderValueChange();
    }
    static #handleAllHSemiAxesSliderValueChange() {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.HORIZONTAL_SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            const sliderId = slider.id;
            const value = /** @type {HTMLInputElement} */(slider).value;
            this.handleSemiAxisSliderValueChange(sliderId, value);
        }
    }
    static #handleAllVSemiAxesSliderValueChange() {
        const sliders = document.getElementsByClassName(CSSSelectors.classes.VERTICAL_SEMI_AXIS_SLIDER);
        for(const slider of sliders) {
            const sliderId = slider.id;
            const value = /** @type {HTMLInputElement} */(slider).value;
            this.handleSemiAxisSliderValueChange(sliderId, value);
        }
    }
    static handleSemiAxisSliderValueChange(sliderId, newValue) {
        const slider = document.getElementById(sliderId);

        // knobs operations
        ValueSpan.setValueSpan(sliderId, newValue);
        // [TODO] update the above methods to recieve a slider
        CssCornerRadiusDeclarationSnippet.setCssCornerRadiusDeclarationSnippet(slider);
        CssDeclarationSnippet.updateCssShorthandDeclarationSnippet();

        // canvas operations
        // [TODO] don't execute this method call when the measurement unit change
        CanvasEllipse.updateCorrespondingEllipse(slider);
        CanvasRectangle.setCorrespondingCornerRadius(slider);
    }

}