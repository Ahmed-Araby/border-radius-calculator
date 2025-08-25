import { SliderUtil } from "../utils/SliderUtil.js";
import { CSSSelectors } from "../CSSSelectors.js";

export class CanvasRectangle {
    static setCorrespondingCornerRadius(slider) {
        let sliderValuePX = SliderUtil.getSliderValueInPX(slider);
        const affectedCornerRadiusCssProperty = SliderUtil.getAffectedBorderCssProperty(slider);

        // get the current values assigned to the corner radius CSS property
        const rect = document.getElementById(CSSSelectors.ids.RECT);
        const hSemiAxis = this.#getHSemiAxisOfCornerRadiusProp(rect, affectedCornerRadiusCssProperty);
        const vSemiAxis = this.#getVSemiAxisOfCornerRadiusProp(rect, affectedCornerRadiusCssProperty);

        // set the new values for the corner radius CSS property
        if(slider.dataset.semiAxis == "h") {
            rect.style.setProperty(affectedCornerRadiusCssProperty, `${sliderValuePX}px ${vSemiAxis}`);
        } else {
            rect.style.setProperty(affectedCornerRadiusCssProperty, `${hSemiAxis} ${sliderValuePX}px`);
        }
    }
    static #getHSemiAxisOfCornerRadiusProp(rect, cornerRadiusProp) {
        const rectComputedStyle = window.getComputedStyle(rect);
        const cornerRadiusCssValue = rectComputedStyle.getPropertyValue(cornerRadiusProp);
        const cornerRadiusCssValueList = cornerRadiusCssValue.split(" ");
        return cornerRadiusCssValueList[0];

    }
    static #getVSemiAxisOfCornerRadiusProp(rect, cornerRadiusProp) {
        const rectComputedStyle = window.getComputedStyle(rect);
        const cornerRadiusCssValue = rectComputedStyle.getPropertyValue(cornerRadiusProp);
        const cornerRadiusCssValueList = cornerRadiusCssValue.split(" ");
        return cornerRadiusCssValueList[cornerRadiusCssValueList.length -1];
    }

    static setDimensions(widthPX, heightPX) {
        const rect = document.getElementById(CSSSelectors.ids.RECT);
        rect.style.width = `${widthPX}px`;
        rect.style.height = `${heightPX}px`;
    }

    static clampDimensions(widthPX, heightPX) {
        const rect = document.getElementById(CSSSelectors.ids.RECT);

        const rectComputedStyle = window.getComputedStyle(rect);
        const rectWidth = parseFloat(rectComputedStyle.width.replace("px", ""));
        const rectHeight = parseFloat(rectComputedStyle.height.replace("px", ""));

        if(rectWidth > widthPX){
            rect.style.width = `${widthPX}px`;
        }
        if(rectHeight > heightPX){
            rect.style.height = `${heightPX}px`;
        }
    }
}