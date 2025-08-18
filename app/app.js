console.log("init Border Radius Calculator App");

const rect = new Rectangle(600, 600);

const hSemiAxisInputSliders = {
    topLeftHSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    topRightHSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    bottomRightHSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    bottomLeftHSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
}
const vSemiAxisInputSliders = {
    topLeftVSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    topRightVSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    bottomRightVSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
    bottomLeftVSemiAxisInputSlider: new InputSlider(0, 300, 1, 0, "px"),
};

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    console.log("register event listeners");
    listenOnMeasurementUnitChange();
    listenOnRectDimensionsChange()
    listenOnHSemiAxisInputSliderChange();
    listenOnVSemiAxisInputSliderChange();
});




