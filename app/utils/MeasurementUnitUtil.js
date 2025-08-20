export class MeasurementUnitUtil {

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
                return MeasurementUnitUtil.pxToRem(valuePX);
            case "%":
                return MeasurementUnitUtil.pxToPercentage(valuePX, dimensionLengthPX);
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
            case "%":
                return dimensionLengthPX / 100 * currValue;
            default:
                throw new Error(`Unknown measurement unit: ${currMeasurementUnit}`);
        }
    }

    static toSelectedUnit(currValue, DimensionLengthPX, currCssUnit, newCssUnit) {
        const currValuePX = MeasurementUnitUtil.toPX(currValue, currCssUnit, DimensionLengthPX);
        return MeasurementUnitUtil.pxToSelectedUnit(currValuePX, DimensionLengthPX, newCssUnit);
    }
}