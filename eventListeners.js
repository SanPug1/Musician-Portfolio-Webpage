
document.addEventListener('DOMContentLoaded', function() {

  //add key handler for the document as a whole, not separate elements.
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('keyup', handleKeyUp);

  //button handlers
  document.getElementById('about_button').addEventListener('click', handleAbout);
  document.getElementById('music_button').addEventListener('click', handleMusic);
  document.getElementById('contact_button').addEventListener('click', handleContact);
  document.getElementById('menu_button').addEventListener('click', handleMenu);
})
