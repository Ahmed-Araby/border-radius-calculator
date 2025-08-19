export class Mapper {
    static axisSliderIds = [
        // horizontal sliders
        "top-left-ellipse-horizontal-sami-axis-slider",     
        "top-right-ellipse-horizontal-sami-axis-slider",  
        "bottom-right-ellipse-horizontal-sami-axis-slider",  
        "bottom-left-ellipse-horizontal-sami-axis-slider",  

        // vertical sliders
        "top-left-ellipse-vertical-sami-axis-slider",  
        "top-right-ellipse-vertical-sami-axis-slider",  
        "bottom-right-ellipse-vertical-sami-axis-slider", 
        "bottom-left-ellipse-vertical-sami-axis-slider",

    ];

    static axisValueSpanIds = [
        // span values for horizontal sliders
        "top-left-ellipse-horizontal-sami-axis-value",
        "top-right-ellipse-horizontal-sami-axis-value",
        "bottom-right-ellipse-horizontal-sami-axis-value",
        "bottom-left-ellipse-horizontal-sami-axis-value",
    
        // span values for vertical sliders
        "top-left-ellipse-vertical-sami-axis-value",
        "top-right-ellipse-vertical-sami-axis-value",
        "bottom-right-ellipse-vertical-sami-axis-value",
        "bottom-left-ellipse-vertical-sami-axis-value",
    ]

    static individualBorderCodeSnippetIds = [
        "border-top-left-radius",
        "border-top-right-radius",
        "border-bottom-right-radius",
        "border-bottom-left-radius",
    ]

    static getSibilingAxisSliderId(currSliderId) {
        const currSliderIndex = Mapper.axisSliderIds.indexOf(currSliderId);
        if(currSliderId % 2 == 0) {
            return Mapper.axisSliderIds[currSliderIndex + 1]; // return the next slider
        } else {
            return Mapper.axisSliderIds[currSliderIndex - 1]; // return the previous slider
        }
    }

    static getCorrespondingValueSpanId(sliderId) {
        const sliderIndex = Mapper.axisSliderIds.indexOf(sliderId);
        return Mapper.axisValueSpanIds[sliderIndex];
    }

    static getCorrespondingIndividualBorderCodeSnippetId(sliderId) {
        const sliderIndex = Mapper.axisSliderIds.indexOf(sliderId);
        const snippetIndex = Math.floor(sliderIndex / 2);
        return Mapper.individualBorderCodeSnippetIds[snippetIndex];
    }
}