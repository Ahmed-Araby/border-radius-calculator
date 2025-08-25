import { IdUtil } from "./utils/IdUtil.js";
import { AppContext } from "./AppContext.js";
import { CSSSelectors } from "./CSSSelectors.js";

export class CssDeclarationSnippet {

    static updateCssShorthandDeclarationSnippet() {
        const hSemiAxisShorthandValues = this.#getHSemiAxisValues();
        const vSemiAxisShorthandValues = this.#getVSemiAxisValues();
        const cssBorderRadiusDeclarationElement = document.getElementById(CSSSelectors.ids.BORDER_RADIUS_VALUE);

        let value = hSemiAxisShorthandValues
            .map((val) => ` ${val}${AppContext.measurementUnit}`)
            .reduce((conc, val) => conc += " " + val, "");

        if (!this.#isCircularCorners(hSemiAxisShorthandValues, vSemiAxisShorthandValues)) {
            value += " / ";
            value = vSemiAxisShorthandValues
            .map((val) => ` ${val}${AppContext.measurementUnit}`)
            .reduce((conc, val) => conc += " " + val, value);
        }
        cssBorderRadiusDeclarationElement.innerText = value;
    }

    static #getHSemiAxisValues() {
        // top-left, top-right, bottom-right, bottom-left
        const hSemiAxisSliderIds = IdUtil.getHSemiAxisSliderIds();
        const values = [];
        for (const id of hSemiAxisSliderIds) {
            const value = /** @type {HTMLInputElement} */ (document.getElementById(id)).value;
            values.push(parseFloat(value));
        }
        
        if(values[0] == values[1] && values[1] == values[2]  && values[2] == values[3]) {
            // all semi axes are equal
            return [values[0]];
        } else if (values[0] == values[2] && values[1] == values[3]) {
            // semi axes of opposite corners are equal
            return [values[0], values[1]];
        } else if (values[1] == values[3]) {
            // top-right  and bottom-left corners are equal
            return [values[0], values[1], values[2]];
        } 
        return values;
    }
    
    static #getVSemiAxisValues() {
        // top-left, top-right, bottom-right, bottom-left
        const vSemiAxisSliderIds = IdUtil.getVSemiAxisSliderIds();
        const values = [];
        for (const id of vSemiAxisSliderIds) {
            const value = /** @type {HTMLInputElement} */ (document.getElementById(id)).value;
            values.push(parseFloat(value));
        }
        
        if(values[0] == values[1] && values[1] == values[2]  && values[2] == values[3]) {
            // all semi axes are equal
            return [values[0]];
        } else if (values[0] == values[2] && values[1] == values[3]) {
            // semi axes of opposite corners are equal
            return [values[0], values[1]];
        } else if (values[1] == values[3]) {
            // top-right  and bottom-left corners are equal
            return [values[0], values[1], values[2]];
        } 
        return values;
    }

    static #isCircularCorners(hSemiAxisValues, vSemiAxisValues) {
        // a ccorner is circular if the ellipse h and v semi axes are equal.
        if (hSemiAxisValues.length == vSemiAxisValues.length) {
            for(let i = 0; i < hSemiAxisValues.length; i++) {
                if (hSemiAxisValues[i] != vSemiAxisValues[i]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}