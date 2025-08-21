import { IdUtil } from "../utils/IdUtil.js";

export class ValueSpan {

    static setValueSpan(correspondingSliderId, value) {
        const valueSpanId = IdUtil.getCorrespondingValueSpanId(correspondingSliderId);
        document.getElementById(valueSpanId).innerText = value;
    }

}