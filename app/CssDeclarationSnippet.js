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
}