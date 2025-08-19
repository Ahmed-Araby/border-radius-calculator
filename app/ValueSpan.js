import { Mapper } from "./Mapper.js";

export class ValueSpan {

    static setValueSpan(correspondingSliderId, value) {
        const valueSpanId = Mapper.getCorrespondingValueSpanId(correspondingSliderId);
        document.getElementById(valueSpanId).innerText = value;
    }

}