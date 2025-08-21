import { CSSSelectors } from "../CSSSelectors.js";

export class WindowEventListenrs {

    static listenOnWindowResize() {
        window.addEventListener("resize", (event) => {
            const canvas = document.getElementById(CSSSelectors.ids.CANVAS);
            const canvasCompStyle = window.getComputedStyle(canvas);

            const canvasW = canvasCompStyle.width;
            const canvasH = canvasCompStyle.height;
        });
    }
}