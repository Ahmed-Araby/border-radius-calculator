console.log("init Border Radius Calculator App");

const semiAxisSliderInputIdToSemiAxisValueId = new Map([
    ["top-left-ellipse-horizontal-sami-axis-slider", "top-left-ellipse-horizontal-sami-axis-value"],
    ["top-left-ellipse-vertical-sami-axis-slider", "top-left-ellipse-vertical-sami-axis-value"],
    ["top-right-ellipse-horizontal-sami-axis-slider", "top-right-ellipse-horizontal-sami-axis-value"],
    ["top-right-ellipse-vertical-sami-axis-slider", "top-right-ellipse-vertical-sami-axis-value"],
    ["bottom-left-ellipse-horizontal-sami-axis-slider", "bottom-left-ellipse-horizontal-sami-axis-value"],
    ["bottom-left-ellipse-vertical-sami-axis-slider", "bottom-left-ellipse-vertical-sami-axis-value"],
    ["bottom-right-ellipse-horizontal-sami-axis-slider", "bottom-right-ellipse-horizontal-sami-axis-value"],
    ["bottom-right-ellipse-vertical-sami-axis-slider", "bottom-right-ellipse-vertical-sami-axis-value"]
]);

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    console.log("register event listeners");
    listenOnMeasurementUnitChange();
    listenOnRectDimensionsChange()
    listenOnHSemiAxisInputSliderChange();
    listenOnVSemiAxisInputSliderChange();
});




