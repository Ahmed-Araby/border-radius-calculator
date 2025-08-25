import { WindowEventListenrs } from "./listeners/WindowEventsListener.js";
import { KnobsEventsListener } from "./listeners/KnobsEventsListener.js";
import { Initialize } from "./Initialize.js";

console.log("init Border Radius Calculator App");
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    console.log("initiliaze app");
    Initialize.init();

    console.log("register event listeners");
    KnobsEventsListener.listenOnMeasurementUnitChange();
    KnobsEventsListener.listenOnRectDimensionsChange()
    KnobsEventsListener.listenOnSemiAxisSliderInput();
    WindowEventListenrs.listenOnWindowResize();
});




import "./CSSSelectors.js";
import "./models/Rectangle.js";
import "./AppContext.js";
import "./utils/MeasurementUnitUtil.js";
import "./utils/SliderUtil.js";
import "./knobs/SemiAxisSlider.js";
import "./knobs/CopyButton.js";
import "./knobs/CssShorthandBorderRadiusDeclarationSnippet.js";
import "./knobs/CssCornerRadiusDeclarationSnippet.js";
import "./canvas/CanvasEllipse.js";
import "./canvas/CanvasRectangle.js";
import "./listeners/WindowEventsListener.js";
import "./listeners/KnobsEventsListener.js";
import "./Initialize.js";
import "./app.js";