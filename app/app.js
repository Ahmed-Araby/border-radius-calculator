import { WindowEventListenrs } from "./listeners/WindowEventsListener.js";
import { KnobsEventsListener } from "./listeners/KnobsEventsListener.js";

console.log("init Border Radius Calculator App");
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    console.log("register event listeners");
    KnobsEventsListener.listenOnMeasurementUnitChange();
    KnobsEventsListener.listenOnRectDimensionsChange()
    KnobsEventsListener.listenOnSemiAxisSliderInput();
    WindowEventListenrs.listenOnWindowResize();
});

