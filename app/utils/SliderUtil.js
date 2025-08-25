import { IdUtil } from "./IdUtil.js";

export class SliderUtil {
    static getAffectedBorderCssProperty(slider) {
        switch(slider.dataset.forEllipse) {
            case "top-left-ellipse":
                return "border-top-left-radius";
            case "top-right-ellipse":
                return "border-top-right-radius";
            case "bottom-right-ellipse":
                return "border-bottom-right-radius";
            case "bottom-left-ellipse":
                return "border-bottom-left-radius"; 
            default:
                throw new Error("Unknown ellipse data attribute: " + slider.dataset.forEllipse);
        }
    }

    static isHAxisSlider(sliderId){
        return IdUtil.getAxisSliderIndex(sliderId) % 2 == 0;
    }
}