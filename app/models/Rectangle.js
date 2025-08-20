export class Rectangle {
    constructor(width, height) { // always in pixels
        this.width = width;
        this.height = height;
    }


    setDimensions(width, height) {
        this.width = width;
        this.height = height;
    }

    getWidth() {
        return this.width;
    }

    getHeight() {
        return this.height;
    }
}