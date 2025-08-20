import { SliderUtil } from "../utils/SliderUtil.js";
import { AppContext } from "../AppContext.js";
import { IdUtil } from "../utils/IdUtil.js";
import { MeasurementUnitUtil } from "../utils/MeasurementUnitUtil.js";

export class CanvasEllipse {

    static updateCorrespondingEllipse(currSliderId, currSliderValue) {
        const siblingSliderId = IdUtil.getSibilingAxisSliderId(currSliderId);
        let siblingSliderValue = /** @type {HTMLInputElement} */(document.getElementById(siblingSliderId)).value;
        let hSemiAxisPX;
        let vSemiAxisPX;

        if (AppContext.measurementUnit != "px" && SliderUtil.isHAxisSlider(currSliderId)) {
            currSliderValue = MeasurementUnitUtil.toSelectedUnit(currSliderValue, AppContext.rect.getWidth(), AppContext.measurementUnit, "px");
            siblingSliderValue = MeasurementUnitUtil.toSelectedUnit(siblingSliderValue, AppContext.rect.getHeight(), AppContext.measurementUnit, "px");
        } else if (AppContext.measurementUnit != "px"){
            currSliderValue = MeasurementUnitUtil.toSelectedUnit(currSliderValue, AppContext.rect.getHeight(), AppContext.measurementUnit, "px");
            siblingSliderValue = MeasurementUnitUtil.toSelectedUnit(siblingSliderValue, AppContext.rect.getWidth(), AppContext.measurementUnit, "px");
        }

        if(SliderUtil.isHAxisSlider(currSliderId)) {
            hSemiAxisPX = currSliderValue;
            vSemiAxisPX = siblingSliderValue;
        } else {
            hSemiAxisPX = siblingSliderValue;
            vSemiAxisPX = currSliderValue;
        }

        const ellipseId = IdUtil.getCorrespondingCanvasEllipseId(currSliderId);
        const ellipse = document.getElementById(ellipseId);
        ellipse.style.width = `${hSemiAxisPX * 2}px`;
        ellipse.style.height = `${vSemiAxisPX * 2}px`;
    }
}