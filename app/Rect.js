class Rect {
    static setDimensions(width, height) {
        const rectHtmlElem = document.querySelector(CSS_SELECTORS.RECT);
        rectHtmlElem.style.width = width + "px";
        rectHtmlElem.style.height = height + "px";
    }
}