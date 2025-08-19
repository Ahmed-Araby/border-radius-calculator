import { Listeners } from "./Listeners.js";

console.log("init Border Radius Calculator App");
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    console.log("register event listeners");
    Listeners.listenOnMeasurementUnitChange();
    Listeners.listenOnRectDimensionsChange()
    Listeners.listenOnSemiAxisSliderInput();
});

