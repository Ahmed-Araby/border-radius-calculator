import { SliderUtil } from "../utils/SliderUtil.js";
import { AppContext } from "../AppContext.js";
import { IdUtil } from "../utils/IdUtil.js";
import { MeasurementUnitUtil } from "../utils/MeasurementUnitUtil.js";

export class CanvasEllipse {

    static hideEllipse(ellipseId) {
        document.getElementById(ellipseId).style.visibility = "hidden";
    }
    static showEllipse(ellipseId) {
        document.getElementById(ellipseId).style.visibility = "visible";
    }

    static updateCorrespondingEllipse(slider) {
        const siblingSliderId = IdUtil.getSibilingAxisSliderId(slider.id);
        const sibilingSlider = (document.getElementById(siblingSliderId));

        if(SliderUtil.isHAxisSlider(slider.id)) {
            this.#updateCorrespondingEllipse(slider, sibilingSlider);
        } else {
            this.#updateCorrespondingEllipse(sibilingSlider, slider);
        }
    }

    static #updateCorrespondingEllipse(hSemiAxisSlider, vSemiAxisSlider) {
        const hSmiAxisValuePX = MeasurementUnitUtil.toPX(hSemiAxisSlider.value, AppContext.measurementUnit, AppContext.rect.getWidth());
        const vSemiAxisValuePX = MeasurementUnitUtil.toPX(vSemiAxisSlider.value, AppContext.measurementUnit, AppContext.rect.getHeight());

        const ellipseId = hSemiAxisSlider.dataset.forEllipse;
        const ellipse = document.getElementById(ellipseId);
        ellipse.style.width = `${hSmiAxisValuePX * 2}px`;
        ellipse.style.height = `${vSemiAxisValuePX * 2}px`;
    }
}