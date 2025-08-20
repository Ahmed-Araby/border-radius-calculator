import { IdUtil } from "./IdUtil.js";

export class SliderUtil {
    static getAffectedBorderCssProperty(slider) {
        switch(slider.getAttribute("data-ellipse")) {
            case "top-left":
                return "border-top-left-radius";
            case "top-right":
                return "border-top-right-radius";
            case "bottom-right":
                return "border-bottom-right-radius";
            case "bottom-left":
                return "border-bottom-left-radius"; 
            default:
                throw new Error("Unknown ellipse data attribute: " + slider.getAttribute("data-ellipse"));
        }
    }

    static isHAxisSlider(sliderId){
        return IdUtil.getAxisSliderIndex(sliderId) % 2 == 0;
    }
}