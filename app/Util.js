export class Util {

    static cssUnitToPresentationalUnnit(cssUnit) {
        switch (cssUnit) {
            case "px":
                return "Pixels";
            case "rem":
                return "REM";
            case "percentage":
                return "Percentage";
            default:
                throw new Error(`Unknown measurement unit: ${measurementUnit}`);
        }
    }

    static pxToRem(value) {
        return value / 16; // Assuming 1rem = 16px
    }

    static pxToPercentage(value, dimensionLengthPX) {
        return (value / dimensionLengthPX) * 100;
    }

    static pxToSelectedUnit(valuePX, dimensionLengthPX, selectedUnit) {
        switch (selectedUnit) {
            case "px":
                return valuePX;
            case "rem":
                return Util.pxToRem(valuePX);
            case "percentage":
                return Util.pxToPercentage(valuePX, dimensionLengthPX);
            default:
                throw new Error(`Unknown measurement unit: ${selectedUnit}`);
        }
    }

    static toPX(currValue, currMeasurementUnit, dimensionLengthPX) {
        switch (currMeasurementUnit) {
            case "px":
                return currValue;
            case "rem":
                return currValue * 16; // Assuming 1rem = 16px
            case "percentage":
                return dimensionLengthPX / 100 * currValue;
            default:
                throw new Error(`Unknown measurement unit: ${currMeasurementUnit}`);
        }
    }

    static toSelectedUnit(currValue, DimensionLengthPX, currCssUnit, newCssUnit) {
        const currValuePX = Util.toPX(currValue, currCssUnit, DimensionLengthPX);
        return Util.pxToSelectedUnit(currValuePX, DimensionLengthPX, newCssUnit);
    }
}