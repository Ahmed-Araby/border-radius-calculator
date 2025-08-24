import { CSSSelectors } from "../CSSSelectors.js";


// I am experimenting with this style of writing the event listeners in the file containing the related class that should handle this event
// instead of having a separate listners file
// but I should unify and use one approch.

document.addEventListener("DOMContentLoaded", () => {
    console.log("here")
    const buttons = document.getElementsByClassName(CSSSelectors.classes.COPY_BTN);
    for(const btn of buttons) {
        btn.addEventListener("click", async (event) => {
            await CopyButton.copyCorrespondingCssPropertyDeclaration(event.target);
        });
    }
});

export class CopyButton {
    static async copyCorrespondingCssPropertyDeclaration(clickedBtnElem) {
        const cssDeclarationEleme = clickedBtnElem.parentElement;
        // queries are scoped to the css declaration section (cssDeclarationEleme) containing the buttons that triggered the event 
        const cssPropertyText = cssDeclarationEleme.getElementsByClassName(CSSSelectors.classes.CSS_PROPERTY)[0].innerText;
        const cssValueText = cssDeclarationEleme.getElementsByClassName(CSSSelectors.classes.CSS_VALUE)[0].innerText;
        const cssDeclarationText = `${cssPropertyText}: ${cssValueText};`;
        await navigator.clipboard.writeText(cssDeclarationText);
    }
}