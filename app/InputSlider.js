class InputSlider {
    constructor(min, max, step, value, cssUnit) {
        this.min = min;
        this.max = max;
        this.step = step;
        this.value = value;
        this.cssUnit = cssUnit;
    }

    setValue(value) {
        this.value = value;
    }
    
    setMax(max) {
        this.max = max;
    }

    clampValue() {
        this.value = Math.min(this.value, this.max);
    }

    setCssUnit(newCssUnit) {
        this.cssUnit = newCssUnit;
    }
}