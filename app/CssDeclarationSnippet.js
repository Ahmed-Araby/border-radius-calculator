import { semiAxisSlider } from "./SemiAxisSlider.js";
import { Mapper } from "./Mapper.js";
import { AppContext } from "./AppContext.js";
import { Util } from "./Util.js";

export class CssDeclarationSnippet {

    static setCssInividualDeclarationSnippet(correspondingSliderId, correspondingSliderValue) {
        const CssDeclarationSnippetValueId = Mapper.getCorrespondingIndividualBorderCodeSnippetId(correspondingSliderId);
        const siblingSliderId = Mapper.getSibilingAxisSliderId(correspondingSliderId);
        console.log(`correspondingSliderId = ${correspondingSliderId}, siblingSliderId = ${siblingSliderId}`);
        const sibilingSliderValue = semiAxisSlider.getSliderValue(siblingSliderId);
        if(correspondingSliderValue == sibilingSliderValue) {
            document.getElementById(CssDeclarationSnippetValueId).innerText = `${correspondingSliderValue}${AppContext.measurementUnit}`;
            return;
        }

        let hAxisValue, vAxisValue;
        if(Util.isHAxisSlider(correspondingSliderId)) {
            hAxisValue = correspondingSliderValue;
            vAxisValue = sibilingSliderValue;
        } else {
            hAxisValue = sibilingSliderValue;
            vAxisValue = correspondingSliderValue;
        }
        document.getElementById(CssDeclarationSnippetValueId).innerText = `${hAxisValue}${AppContext.measurementUnit} ${vAxisValue}${AppContext.measurementUnit}`;
    }

    static updateCssShorthandDeclarationSnippet() {
        const hSemiAxisShorthandValues = this.getHSemiAxisShorthandValues();
        const vSemiAxisShorthandValues = this.getVSemiAxisShorthandValues();
        const cssBorderRadiusDeclarationElement = document.getElementById("css-border-radius-declaration");
        console.log("hSemiAxisShorthandValues : ", hSemiAxisShorthandValues);
        console.log("vSemiAxisShorthandValues : ", vSemiAxisShorthandValues);

        let value = "";
        if (this.canHAndVSemiAxisBeMerged(hSemiAxisShorthandValues, vSemiAxisShorthandValues)) {
            for (const val of hSemiAxisShorthandValues) {
                value += ` ${val}${AppContext.measurementUnit}`;
            }
        } else {
            for (const val of hSemiAxisShorthandValues) {
                value += ` ${val}${AppContext.measurementUnit}`;
            }
            value += " / ";
            for (const val of vSemiAxisShorthandValues) {
                value += ` ${val}${AppContext.measurementUnit}`;
            }
        }
        console.log("cssBorderRadiusDeclarationElement : ", cssBorderRadiusDeclarationElement);
        console.log("value : ", value);
        cssBorderRadiusDeclarationElement.innerText = value;
    }

    static getHSemiAxisShorthandValues() {
        // top-left, top-right, bottom-right, bottom-left
        const hSemiAxisSliderIds = Mapper.getHSemiAxisSliderIds();
        const values = [];
        for (const id of hSemiAxisSliderIds) {
            const value = /** @type {HTMLInputElement} */ (document.getElementById(id)).value;
            values.push(parseInt(value));
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
    
    static getVSemiAxisShorthandValues() {
        // top-left, top-right, bottom-right, bottom-left
        const vSemiAxisSliderIds = Mapper.getVSemiAxisSliderIds();
        const values = [];
        for (const id of vSemiAxisSliderIds) {
            const value = /** @type {HTMLInputElement} */ (document.getElementById(id)).value;
            values.push(parseInt(value));
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

    static canHAndVSemiAxisBeMerged(hSemiAxisShorthandValues, vSemiAxisShorthandValues) {
        if (hSemiAxisShorthandValues.length == vSemiAxisShorthandValues.length) {
            for(let i = 0; i < hSemiAxisShorthandValues.length; i++) {
                if (hSemiAxisShorthandValues[i] != vSemiAxisShorthandValues[i]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }
}