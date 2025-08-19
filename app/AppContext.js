import { Rectangle } from "./Rectangle.js";
import { InputSlider } from "./InputSlider.js";


export class AppContext  {
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