// Select all buttons inside the .mode class
let modeButtons = document.querySelectorAll('.mode button');

// Loop through each button and add a click event listener
modeButtons.forEach(button => {

  button.addEventListener('click', () => {
    // Get the text content of the button (e.g., "Red", "Blue")
    let bgColor = button.textContent.toLowerCase();

    document.body.style.backgroundColor = bgColor;

  });

  button.addEventListener('click', () => {
    // add border
    button.style.border = "2px solid #fff";

    // remove the border of frist one button when i clcik on another button
    modeButtons.forEach(b => {
      if(b!= button) {

        b.style.border = "none";

      }
    })

  })

});
