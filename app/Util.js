class Util {

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
}