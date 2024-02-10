// // // DOM -> Document Object Model
// A standard for how to get, change, add, or delete HTML elements

// JS makes the HTML pages active and dynamic via the DOM

// // What is DOM ?
// A programming interface for web documents.
// DOM is not a programming language.
// represents the page so that programs can change the document structure, style and content.
// The DOM is like a tree-like representation of the web page that gets loaded into the browser.
// The DOM represents the document as nodes and objects.
// Without it, the js language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts.
// Web APi used to build websites.

// The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API

// It represents the web pages using a series of objects. The main object is the document object, which in turn houses oter objects which also house their own objects, and so on.

// whenever a web browser parses an HTML document, it builds a DOM tree and then uses it to display the document.

// Difference b/w HTML Collection and NodeList

// EVENT
// A js can be executed when an event occurs, like when a user clicks on an HTML element
// To execute code when a user clicks on an element, add JS code to an HTML event attribute:
// onclick = js fn

// EVENT Listener
// Attaches an event handler to the specified element (without overwriting existing event handlers)
// You can add many event handlers(even of the same type) to one elememt
// You can add evenet listeners to any DOM Object not only HTML elements. i.e, the window object
// The addEvenetListener() method makes it easier to control how the event reacts to bubbling.
// When using the addEvenetListener() method, the js is seperated from the HTML markup, for better readability and allows you to add event Listeners even ehen you do not control the HTML markup
// You can easily remove an evenet listener by using the removeEventListener() method

// bubbling -> inside ele first then outside -> pass false
// capturing -> outside ele first then inside -> pass true
