# 1. What is ES6 and what are the new features introduced in ES6?
## Answer : 

ES6, also known as ECMAScript 2015 or ES2015, is the sixth edition of the ECMAScript language specification standard, which is the scripting language standardized for JavaScript.
Here are some of the key features introduced in ES6: 
* Block-Scoped Variables (let and const)
* Arrow Functions
* Template Literals
* Default Parameters
* Destructuring Assignment
* Rest and Spread Operators
* Promises, Iterators and Generators
* Classes, Modules, Symbol, 

# 2. What is Event Bubble and Event Delegation in JS?
## Answer : 

+ Event bubbling is a concept in the event handling model of JavaScript, where an event starts from the deepest element (target element) and then bubbles up to the root element.An event starts from the target element and bubbles up to the root element.
+ Event delegation is a technique that leverages event bubbling to handle events at a higher level in the DOM than the target element.Instead of attaching an event listener to every child element, you attach a single event listener to a parent element. Uses event bubbling to handle events at a higher level in the DOM, allowing a single event listener to manage events for multiple child elements.

# 3. What is the difference between localstorage , session storage and cookies.
## Answer : 

### Key Differences

### Storage Capacity:

+ LocalStorage & SessionStorage: Approximately 5-10 MB.
+ Cookies: Limited to about 4 KB per cookie.

### Persistence:

+ LocalStorage: Persistent until explicitly deleted.
+ SessionStorage: Only for the duration of the page session.
+ Cookies: Can be set to expire at a specific time or when the browser closes.

### Scope:

+ LocalStorage & SessionStorage: Accessible within the same origin.
+ Cookies: Accessible within the same origin and sent with each HTTP request.

### Usage:

+ LocalStorage & SessionStorage: Typically used for client-side storage.
+ Cookies: Used for client-side storage and for sending data to the server with each HTTP request (e.g., for session management, authentication).

### Security:

+ LocalStorage & SessionStorage: Can be accessed via JavaScript, potentially exposing data to XSS attacks.
+ Cookies: Can be made more secure with HttpOnly and Secure flags.

# 4.In CSS what is the difference between display inline , display inline block and display block?
## Answer : 

### Key Differences
+ ### display: inline:
  Does not respect width and height settings. Top and bottom margins and padding are ignored. Elements flow in line with text.
+ ### display: inline-block:
  Respects width and height settings. All margins and padding are respected. Elements flow in line but behave like block elements regarding dimensions.  
+ ### display: block:
  Respects width and height settings. All margins and padding are respected. Elements take up full width by default and force a line break before and after.

 # 5. What are new features in CSS3?
 ## Answer :

 ###  Key features of CSS3

 + Selectors : Attribute Selectors, Pseudo-Classes and Pseudo-Elements
 + Box Model Enhancements : Box-Sizing
 + Backgrounds and Borders : Multiple Backgrounds, Background Size and Origin, Border-Radius, Border-Image
 + Text Effects : Text Shadow, Web Fonts
 + Color : RGBA and HSLA, Gradients
 + 2D/3D Transformations : Transform
 + Transitions and Animations : Transitions, Animations
 + Flexbox : Flexible Box Layout
 + Grid Layout : CSS Grid
 + Media Queries : Responsive Design
 + Columns : Multi-Column Layout
 + Flexbox and Grid Layout Enhancements : Subgrid


