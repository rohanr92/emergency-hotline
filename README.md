# emergency-hotline
1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
- getElementById - selects an element by its id.
getElementsByClassName - selects all elements with the same class name.
querySelector - selects the first element that matches a CSS selector.
querySelectorAll - selects all elements that match a CSS selector.


2. How do you create and insert a new element into the DOM?
- To create and insert a new element into the DOM, we have to follow two things: first we have to create an element by JavaScript using document.createElement(). Inside the brackets we put the element name. Then we have to take the parent id where we want to insert the element, and finally we use appendChild() to add it inside the parent.



3. What is Event Bubbling and how does it work?
- Event bubbling is a way how events work in JavaScript. When an event happens on a child element, it does not stop there, it keeps moving up (bubbling) to its parent, then to the grandparent, and so on until it reaches the top document. For example, if we click a button inside a div, first the button’s event runs, then the div event runs, and then it can go further up. This is called event bubbling. 



4. What is Event Delegation in JavaScript? Why is it useful?
- Event delegation in JavaScript means putting the event listener on a parent element instead of every single child element. Because of event bubbling, when we click a child, the event goes up to the parent, and the parent can check which child was clicked.
- This is useful because we don’t need to add lots of event listeners for many elements. It also works for elements that are added later (dynamically), since the parent is already listening.



5. What is the difference between preventDefault() and stopPropagation() methods?
- preventDefault() is used to stop the default action of an element. For example, when we submit a form, the default action is page reload using preventDefault() we can stop that.

stopPropagation() is used to stop the event from bubbling up to parent elements. It does not reload or stop reloading the page, it just prevents the event from moving to parents.
