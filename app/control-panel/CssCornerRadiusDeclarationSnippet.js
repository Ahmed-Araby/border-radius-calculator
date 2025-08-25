import { IdUtil } from "../utils/IdUtil.js";
import { AppContext } from "../AppContext.js";
import { SliderUtil } from "../utils/SliderUtil.js";
import { SemiAxisSlider } from "./SemiAxisSlider.js";

export class CssCornerRadiusDeclarationSnippet {

    static setCssCornerRadiusDeclarationSnippet(slider) {
        const sibilingSlider = SemiAxisSlider.getSibilingSlider(slider);
        const cssCornerRadiusDeclarationElem = document.getElementById(IdUtil.getCorrespondingIndividualBorderCodeSnippetId(slider.id));
        
        if(slider.value == /** @type HTMLInputElement */(sibilingSlider).value) {
            cssCornerRadiusDeclarationElem.innerText = `${slider.value}${AppContext.measurementUnit}`;
            return;
        }

        let hAxisValue, vAxisValue;
        if(SliderUtil.isHAxisSlider(slider.id)) {
            hAxisValue = slider.value;
            vAxisValue = /** @type HTMLInputElement */(sibilingSlider).value;
        } else {
            hAxisValue = /** @type HTMLInputElement */(sibilingSlider).value;
            vAxisValue = slider.value;
        }
        cssCornerRadiusDeclarationElem.innerText = `${hAxisValue}${AppContext.measurementUnit} ${vAxisValue}${AppContext.measurementUnit}`;
    }
}