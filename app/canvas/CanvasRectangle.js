import { SliderUtil } from "../utils/SliderUtil.js";
import { AppContext } from "../AppContext.js";
import { CSSSelectors } from "../CSSSelectors.js";
import { MeasurementUnitUtil } from "../utils/MeasurementUnitUtil.js";

export class CanvasRectangle {
    static setCorrespondingCornerRadius(slider) {
        const sliderId = slider.id;
        let sliderValuePX;

        // get the current slider value in pixel
        if(AppContext.measurementUnit != "px" && SliderUtil.isHAxisSlider(sliderId)) {
            sliderValuePX = MeasurementUnitUtil.toSelectedUnit(parseFloat(slider.value), AppContext.rect.getWidth(), AppContext.measurementUnit, "px");
        } else if(AppContext.measurementUnit != "px") {
            sliderValuePX = MeasurementUnitUtil.toSelectedUnit(parseFloat(slider.value), AppContext.rect.getHeight(), AppContext.measurementUnit, "px");
        } else {
            sliderValuePX = parseFloat(slider.value);
        }

        const rect = document.getElementById(CSSSelectors.ids.RECT);

        // get the current values assigned to the corner radius CSS property
        const affectedCornerRadiusCssProperty = SliderUtil.getAffectedBorderCssProperty(slider);
        console.log("affectedCornerRadiusCssProperty = ", affectedCornerRadiusCssProperty);

        const rectComputedStyle = window.getComputedStyle(rect);
        const cornerRadiusCssValue = rectComputedStyle.getPropertyValue(affectedCornerRadiusCssProperty);
        const cornerRadiusCssValueList = cornerRadiusCssValue.split(" ");
        const hSemiAxis = cornerRadiusCssValueList[0];
        const vSemiAxis = cornerRadiusCssValueList[cornerRadiusCssValueList.length -1];

        // set the new values for the corner radius CSS property
        if(slider.dataset.semiAxis == "h") {
            rect.style.setProperty(affectedCornerRadiusCssProperty, `${sliderValuePX}px ${vSemiAxis}`);
        } else {
            rect.style.setProperty(affectedCornerRadiusCssProperty, `${hSemiAxis} ${sliderValuePX}px`);
        }
    }



}