<b>["The Indispensable" E-Commerce Application]</b>
<br><br>
<b>Table of Contents</b>

- [Description](#description)
- [Installation](#installation)
- [Motivation](#motivation)
- [What I Learned](#whatilearned)
- [Future Implementation Plans](#futureplans)
- [Credits](#credits)
- [License](#license)

<br><br><br>
<a name="description"></a>
<b>Description</b>

This is my first full-stack web application built from scratch and remains my most 'ambitious' project to date. Essentially, it is a (currently) fake e-commerce store which sells 'indispensable' items (really they are just random objects around me in my apartment).

The user interface was built with React functional components, hooks, React Router and Context API for global state management. The application was styled with SASS.

The essential functionality of this application is:
1. When the user navigates to the Products page, fetch available products for sale from a MySQL database by sending an HTTP GET requests using the Axios library to the Express server.

2. On the products page, the user can search products by name or filter products by category - this was achieved on the front-end using the useRef hook, and the map & filter array methods. Products can be clicked to view more details; from this page, they can be added to the user's shopping cart (achieved by sending POST requests to Express server).

3. The user is then redirected to their shopping cart, which shows the current cart items, total quantity of each cart item, and the total cart price. From here, the user can delete cart items (again, this utilizes POST requests).

4. Other functionality includes the 'Product of the Day' section on the home page, which randomly selects a product from the database and displays it on the page, providing a link to the Product Details page for that product. This is not actually a true 'product of the day', as it will change on page refresh.
<br><br><br>

<a name="installation"></a>
<b>Installation</b>

This information will be provided soon enough.
<br><br><br>

<a name="motivation"></a>
<b>Motivation</b>

My motivation for building this project was threefold:
1. I lacked experience in anything e-commerce related. As it it one of the most sought-after uses for web development (everyone needs to sell their stuff online), I did not want e-commerce to be a total gap in my experience/knowledge.

2. I had recently completed sections of a Node/Express.js tutorial and really wanted to put my new knowledge to practical use (outside of the course projects). I wanted to have a full-stack application on my personal portfolio to demonstrate to potential employers everything I had learned - from Node/Express.js basic server/REST API design, to successful connection to databases and front-end applications.

3. I wanted to practise and apply my knowledge of React (functional components, hooks, Router, Context API) in a new, original project.

<br><br><br>
<a name="whatilearned"></a>
<b>What I Learned</b>

This project has probably been *the* project which has taught me the most about software development overall - I was required to go beyond Javascript and React fundamentals, to the challenges of building and deploying a full-fledged, full-stack web application. 

Nearly every step of the way, I was faced with some kind of major challenge which required a substantial amount of research, trial-and-error and debugging. Some of the biggest challenges that come to mind are:

1. In multiple instances where state was used throughout the application, I ran into issues where state would not update immediately 

Aside from writing the code for this application, properly deploying it was a whole other challenge. I ran into numerous issues while trying to deploy all three components of the app - the front end with Netlify, and the back end & database with Heroku. The issues with Netlify were mainly related to the build script, which I did have to change a couple of times during the deployment process. 

However, the greatest challenge was the deployment of the back-end and database. A few examples: my MySQL (my, my) script worked well when deploying my project locally, but there were some subtle differences required when using Heroku. Researching specifications, locating and editing specific lines of code in the scripts was a tedious yet ultimately rewarding process. Correctly setting up the development/production environment for the hosted Express server was another big challenge. 

The experience of deploying a full-stack application was invaluable; I will have confidence the next time I am required to do something similar.

The big takeaway/lesson learned from this challenging project was this: persistence is the key. No matter how tough or impossible the problem you're currently dealing with may seem, there IS a solution - you just need to keep going, keep trying. Of course, I've known this since the beginning, but this project *really* required a lot of patience and grit compared to most of the others I'd built up until this point.
<br><br><br>

<a name="futureplans"></a>
<b>Future Implementation Plans</b>


Of course, this project is not a *true* e-commerce site yet - it is a fake one. It is missing some key functionality such as:
1. User sign up/authentication
2. Unique shopping carts for each user
3. Option to add/delete quantity of specific cart items
4. Create/delete Order, Checkout functionality
5. Fix up/make more beautiful certain aspects of the UI design

My plans for the future of this application include implementing all of the above. When all of this is ready, I could actually use this web application for my own uses (if I have things I really want to sell, or to start my own online business). I could also potentially use it as a template to sell to clients looking for their own e-commerce store.
<br><br><br>

<a name="credits"></a>
<b>Credits</b>
I would like to thank the instructors of two excellent Udemy courses which served as the foundation for the knowledge I have applied in this application:

John Smilga: React Tutorial and Projects Course (2022)
https://www.udemy.com/course/react-tutorial-and-projects-course/

Maximillian Schwarzmüller: NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno
(https://www.udemy.com/course/nodejs-the-complete-guide/)

<br><br><br>
<a name="license"></a>
<b>License</b>

MIT License

Copyright (c) 2022 Matthew Engerer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.