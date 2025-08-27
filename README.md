<p align="center">
  <img width="400" height="400" src="https://github.com/Ahmed-Araby/border-radius-calculator/blob/main/assets/logo/logo.png">
</p>

## Overview

Border Radius Calculator is a tool to help UI/UX folks to calculate the exact border radius values needed for each corner of a rectangle to reach the shape they had in mind.

the tool allows you to intract with 8 degrees of freedom, 4 corners, each corner is rounded using an ellipse and an ellipse has a horizontal and vertical axes (mathematically they are called major and minor axes).

### Demo 
**Note: specifying only 1 semi axis for an ellipse produce squashed/demolished ellipse hence you won't see the ellipse rendered until you give value for the other semi axis.**

![Demo](https://github.com/Ahmed-Araby/border-radius-calculator/blob/main/documentation/tool-in-action.gif)


### Capabilities
* manipulte the horizontal and vertical axes of the ellipses corresponding to the rectangle 4 corners.
* support px, rem, and percentage(%) for the corner ellipse semi axis measurement.
* provide declarations for the css properties used to set the rounding at each corner (border-top-left-radius, border-top-right-radius, etc...) to reach similar result of the rectangle you were manipulating.
* provide declaration for the short hand css property (border-radius) to set the 4 corners at once.
* all css declarations are accompanied with a copy button.
* set dimensions of the rectangle that you will manipulate.
* rendering the ellipses used to round each corner at the corner.
* hide ellipses.

## feedback 
feedback on any aspect is welcomed and specically I am looking for feedback on the following:
* currently when the browser window is resized the rectanngle width shrinks along which can interrupt the current work flow, the other possible experience is to keep the rectangle intact which will lead to horizontal scrolling. which experience do you think is better ?

## Notes:
* I am planning to add more feature and Enhance the User Experience.
