import { WindowEventListenrs } from "./listeners/WindowEventsListener.js";
import { ControlPanelEventsListener } from "./listeners/ControlPanelEventsListener.js";
import { Initialize } from "./Initialize.js";

console.log("init Border Radius Calculator App");
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    console.log("initiliaze app");
    Initialize.init();

    console.log("register event listeners");
    ControlPanelEventsListener.listenOnMeasurementUnitChange();
    ControlPanelEventsListener.listenOnRectDimensionsChange()
    ControlPanelEventsListener.listenOnSemiAxisSliderInput();
    ControlPanelEventsListener.listenOnHideEllipsesCheckboxChange();
    WindowEventListenrs.listenOnWindowResize();
});




import "./CSSSelectors.js";
import "./models/Rectangle.js";
import "./AppContext.js";
import "./utils/MeasurementUnitUtil.js";
import "./utils/SliderUtil.js";
import "./control-panel/SemiAxisSlider.js";
import "./control-panel/CopyButton.js";
import "./control-panel/CssShorthandBorderRadiusDeclarationSnippet.js";
import "./control-panel/CssCornerRadiusDeclarationSnippet.js";
import "./canvas/CanvasEllipse.js";
import "./canvas/CanvasRectangle.js";
import "./listeners/WindowEventsListener.js";
import "./listeners/ControlPanelEventsListener.js";
import "./Initialize.js";
import "./app.js";