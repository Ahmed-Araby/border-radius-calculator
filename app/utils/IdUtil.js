export class IdUtil {

    /**
     * [Note]: The order of the Ids in the arrays is important.
     *  - all the mapping and retrival logic made by method in this class depends on this order
     *  - client code as well depends on this order.
     * 
     * // [TODO]: refactor this class such that changing the order of the Ids in the arrays doesn't break the logic.
     */
    static axisSliderIds = [
        "top-left-ellipse-horizontal-sami-axis-slider",     
        "top-left-ellipse-vertical-sami-axis-slider",  

        "top-right-ellipse-horizontal-sami-axis-slider",  
        "top-right-ellipse-vertical-sami-axis-slider",  

        "bottom-right-ellipse-horizontal-sami-axis-slider",  
        "bottom-right-ellipse-vertical-sami-axis-slider", 

        "bottom-left-ellipse-horizontal-sami-axis-slider",  
        "bottom-left-ellipse-vertical-sami-axis-slider",

    ];

    static axisValueSpanIds = [
        // span values for horizontal sliders
        "top-left-ellipse-horizontal-sami-axis-value",
        "top-left-ellipse-vertical-sami-axis-value",

        "top-right-ellipse-horizontal-sami-axis-value",
        "top-right-ellipse-vertical-sami-axis-value",

        "bottom-right-ellipse-horizontal-sami-axis-value",
        "bottom-right-ellipse-vertical-sami-axis-value",

        "bottom-left-ellipse-horizontal-sami-axis-value",
        "bottom-left-ellipse-vertical-sami-axis-value",
    ]

    static individualBorderCodeSnippetIds = [
        "border-top-left-radius-value",
        "border-top-right-radius-value",
        "border-bottom-right-radius-value",
        "border-bottom-left-radius-value",
    ]

    static getSibilingAxisSliderId(currSliderId) {
        const currSliderIndex = IdUtil.axisSliderIds.indexOf(currSliderId);
        if(currSliderIndex % 2 == 0) {
            return IdUtil.axisSliderIds[currSliderIndex + 1]; // return the next slider
        } else {
            return IdUtil.axisSliderIds[currSliderIndex - 1]; // return the previous slider
        }
    }

    static getCorrespondingSemiAxisMeasurementValueSpanId(sliderId) {
        const sliderIndex = IdUtil.axisSliderIds.indexOf(sliderId);
        return IdUtil.axisValueSpanIds[sliderIndex];
    }

    static getCorrespondingIndividualBorderCodeSnippetId(sliderId) {
        const sliderIndex = IdUtil.axisSliderIds.indexOf(sliderId);
        const snippetIndex = Math.floor(sliderIndex / 2);
        return IdUtil.individualBorderCodeSnippetIds[snippetIndex];
    }

    static getAxisSliderIndex(sliderId) {
        return IdUtil.axisSliderIds.indexOf(sliderId);
    }

    static getHSemiAxisSliderIds() {
        return [
            IdUtil.axisSliderIds[0], // top-left-horizontal
            IdUtil.axisSliderIds[2], // top-right-horizontal
            IdUtil.axisSliderIds[4], // bottom-right-horizontal
            IdUtil.axisSliderIds[6]  // bottom-left-horizontal
        ];
    }

    static getVSemiAxisSliderIds() {
        return [
            IdUtil.axisSliderIds[1], // top-left-vertical
            IdUtil.axisSliderIds[3], // top-right-vertical
            IdUtil.axisSliderIds[5], // bottom-right-vertical
            IdUtil.axisSliderIds[7]  // bottom-left-vertical
        ];
    }
}