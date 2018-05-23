// This is a one-line comment.
/* This is a multi-line comment. */

/* The code below adds the text "Hello world!" to the page every time the user
 * presses ANY button on the page.
 *
 * You can safely replace the code below with your own.
 */

// Function to create a paragraph and add it to the page.
function createParagraph() {
  var para = document.createElement('p');
  para.textContent = 'Hello world!';
  document.body.appendChild(para);
}

// Get all buttons on the page.
var buttons = document.querySelectorAll('button');

// For each button on the page, call createParagraph when clicked.
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', createParagraph);
}
