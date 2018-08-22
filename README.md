# Material Card
**By** [Caleb Kyle](mailto:ckyle@smu.edu) → [portfolio](http://www.calebtkyle.com) | [github](https://github.com/CT-Kyle)

## Background

This project was undertaken as part of a coding challenge for a great company in Dallas, TX where I was asked to translate a designer's mockup into clean, simple front-end code. 

## Technical Choices

I chose to go with the following technologies:

- Angular 6
- Angular Material
- Webpack

## Discussion

I chose to use Angular on this project because the challenge called for creating a "small component that would be part of a much larger page" and the need for continued support of this component. It would have been faster, of course, to mock this up in static html/js/css, but would hardly be usable for FED's or engineers to incorporate elsewhere in the app. The card itself was created using nested component structure so that anyone can easily make changes to specific parts of the card in the future. The card is also modularized so that it can be used more than once, since I anticipate many more articles being displayed being pulled from a database.

I chose to use Material Design, as the look and feel of the card strongly aligned with Material Design principles and visual language. Plus, Material is an awesome design system that works perfectly with what we are trying to create with this card (and for the rest of the app that this card is incorporated in, I suspect). I chose Angular Material, as opposed to other Material libraries such as Material Design Light or Material Components because the specific Angular implementation allows for seamless use with angular directives, specs, and modules, and because Angular Material allows you to import only the Material components necessary, instead of all of them, thereby reducing file size and load time.

This component was built using webpack running a local server for development and deployed to my [github.io](https://ct-kyle.github.io/) page.

I chose to use mostly ems and rems where applicable instead of the fixed unit pixel, so as to allow for scaling based on user font size settings. I chose to add in a little bit of light media query to optimize the look of the card on mobile browsers (mainly by adjusting paddings, margins, and text size).