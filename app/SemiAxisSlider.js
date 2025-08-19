export class semiAxisSlider {

    static getSliderValue(sliderId) {
        return /** @type {HTMLInputElement} */(document.getElementById(sliderId)).value;
    }
}