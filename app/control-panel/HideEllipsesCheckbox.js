import { CanvasEllipse } from "../canvas/CanvasEllipse.js";

export class HideEllipsesCheckbox {
    
    static changeEllipsesVisibility(event) {
        const checkbox = event.target;
        const ellipseIdList = checkbox.dataset.ellipsesIdList.split(",");
        for(const ellipseId of ellipseIdList) {
            if(checkbox.checked) {
                CanvasEllipse.hideEllipse(ellipseId);
            } else {
                CanvasEllipse.showEllipse(ellipseId);
            }
        }
    }
}