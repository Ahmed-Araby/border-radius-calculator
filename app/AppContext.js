import { Rectangle } from "./models/Rectangle.js";

export class AppContext  {
    static rect;
    static measurementUnit;

    static init(rectWPX, rectHPX, measurementUnit) {
        this.rect = new Rectangle(rectWPX, rectHPX);
        this.measurementUnit = measurementUnit;
    }
    
}