import { Rectangle } from "./models/Rectangle.js";

export class AppContext  {
    static rect = new Rectangle(600, 600);
    static measurementUnit = "px";
}