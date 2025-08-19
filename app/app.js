import { Rectangle } from "./Rectangle.js";
import { InputSlider } from "./InputSlider.js";
import { listeners } from "listeners.js";

export class AppContext  {
    constructor() {
        console.log("init Border Radius Calculator App");
        document.addEventListener('DOMContentLoaded', () => {
            console.log("DOM fully loaded and parsed");
            console.log("register event listeners");
            listeners.listenOnMeasurementUnitChange();
            listeners.listenOnRectDimensionsChange()
            listeners.listenOnHSemiAxisInputSliderChange();
            listeners.listenOnVSemiAxisInputSliderChange();
        });
    }

    static rect = new Rectangle(600, 600);
    static measurementUnit = "px";
    static hSemiAxisInputSliders = {
        topLeftHSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
        topRightHSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
        bottomRightHSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
        bottomLeftHSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    }
    static vSemiAxisInputSliders = {
        topLeftVSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
        topRightVSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
        bottomRightVSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
        bottomLeftVSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    };
}







