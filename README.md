# signup_form

## Description

This is a sig nup form project made using vanilla technologies HTML5, CSS & Javascript. It is part of [The Odin Project](https://www.theodinproject.com/). At the time of writing, link for this particular project is [Project: Sign-up Form](https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form).

## File Structure

It consists of an index file `index.html` as starting point of project that links html & CSS files too. `styles` folder in root directory contains CSS files. One is `styles.css` for styles & other is `reset.css` serving as a css reset file for styles. `validation.js` in root is used for form validation purposes. There is an `img` directory & `fonts` directory too.

## Thoughts

I have given quite some time to this project, more than I'd like to admit. But this is because of utmost perfection I eventually started to strive for it. One thing led to another & it was almost a week. But every bit of it was worth it none the least. Where do I begin. It was a remarkable experience. There were so many new things I used in this project. Tooltips(though copied for now without understanding as I a'm sure not many 'odineers' used e'm anyway), style changes on valid/invalid states, sections/parts breaking to new lines, DOM properties & related caveats, making project perfect for mobile view, doing whole form validation so extensively etc & much more. One thing I felt specially in this project was that I got confused quite less time around during laying out elements, debugging happened quickly most of the times about what was real issue & did not have to toggle in hopes that somehow it will be corrected. Or at least much little than past. I did'nt feel like how the hell was this accomplished. There was proper work done. I also noticed not doing many obvious mistakes & an increase in efficiency & effectiveness during working on js file.

## How it Works

During an input of any fieldset, if there is an error of validation, fieldset color changes to indicate that. A tooltip also springs up to indicate what is proper format to use to remove error. Both html default validations like `required` & pattern validations using regex are used. js is used for dynamic styling on validation state changes. By these all means each input field is checked before form submission as well as afterwards,  

## Future Ideas/Intensions

- Add hover effects like border change on inputs without effecting the valid/invalid effects like red border.

- Move left sidebar to top on small screens.

- Using media queries.