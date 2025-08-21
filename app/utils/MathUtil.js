export class MathUtil {

    static parseFloat(str, decimalDigitsCount) {
        const parsedValue = parseFloat(str);
        if (isNaN(parsedValue)) {
            return 0.0; // default value if parsing fails
        }
        return parseFloat(parsedValue.toFixed(decimalDigitsCount));
    }

    static restrictDecimalDigits(floatNum, decimalDigitsCount) {
        if( isNaN(floatNum)) {
            return 0.0; // default value if input is NaN
        }
        return parseFloat(floatNum.toFixed(decimalDigitsCount));
    }
}