class EllipseSemiAxis {

    static setHAxisMax(max) {
        const sliders = document.getElementsByClassName(CSS_SELECTORS.HORIZONTAL_SEMI_AXIS_SLIDER_CLASS_NAME);
        for (slider of sliders) {
            slider.max = max;
        }
    }

    static setVAxisMax(max) {
        const sliders = document.getElementsByClassName(CSS_SELECTORS.VERTICAL_SEMI_AXIS_SLIDER_CLASS_NAME);
        for (slider of sliders) {
            slider.max = max;
        }
    }
    
    static dispatchInputEvents() {
        const sliders = document.getElementsByClassName(CSS_SELECTORS.SEMI_AXIS_SLIDER_CLASS_NAME);
        for (const slider of sliders) {
            slider.dispatchEvent(new Event('input'));
        }
    }
}