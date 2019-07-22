# Edward Cheever's Portfolio
My professional development portfolio page.

## Overview and Goals
My goal with my portfolio website is to give a brief introduction to myself, and to provide comprehensive resources for anyone interested to gain an understanding of the skills I've developed since I started learning to code through the apps I've developed. 

Similarly, I also want this site, itself, to show off my skills to some degree, through interesting design that extensively uses what I've learned about Javascript, CSS, and HTML. To some degree I want to incorporate CSS animation as well.

Finally, I want this site to provide channels of direct communication to me using the Nodemailer NPM package.

## Deployment 
My portfolio page will be deployed via heroku - [Edward Cheever's Portfolio](https://edwardcheever.herokuapp.com/).  

## MVP
* Have a short and clear intro text section. 
* Have an informative and direct biography section.
* Have a clean and straightforward list of my projects with descriptions and links to each one.
* Have a contact section providing a method for emailing me directly through input fields.
* Provide links to my relevant social media and coding repositories.

## Dependencies
My portfolio will be using the following NPM:
* [Dotenv](https://www.npmjs.com/package/dotenv) - I use this NPM to keep my secrets safe.
* [Express](https://www.npmjs.com/package/express) - I use Express to serve the public files and route nodemailer messages.
* [Nodemailer](https://www.npmjs.com/package/nodemailer) - I use Nodemailer to send messages to my dedicated gmail account using input from the contact form.

## Active Bugs and Issues
* The folder animations are very resource intensive, especially on slow networks. There might be a way to polish them up, but that will require some research.

## Future Features / Icebox
* I plan on adding more projects to my portfolio once I have polished them up more. Of course even the existing displayed projects require some additional work.
* I plan on adding a download link for my technical resume, once I've decided where to put it on the page, and finished my resume.
* On very short screens that are also above a certain width, the folders are slightly too obscured by the slanted blue div, as is my "Developer" title.