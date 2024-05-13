//KEY CODES
const ENTER = 13
const RIGHT_ARROW = 39
const LEFT_ARROW = 37
const UP_ARROW = 38
const DOWN_ARROW = 40

let isMenuOpen = false;

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);

  if(section) {
    var scrollPosition = section.offsetTop - 150;

    window.scrollTo({
      top: scrollPosition,
      behavior: 'smooth'
    });
  } else {
    console.error("Section not found: ", sectionId);
  }
}

function handleAbout() {
  scrollToSection('about-cont');
}

function handleMusic() {
  scrollToSection('listen-cont');
}

function handleContact() {
  scrollToSection('contact-cont');
}

function handleMenu() {
  const headerButtons = document.getElementById("headerButtons");
  const menuButton = document.getElementById("menu_button");

  headerButtons.style.display = headerButtons.style.display === "block" ? "none" : "block";

  if(isMenuOpen) {
    menuButton.style.backgroundImage = "url('images/menu.png')";
    isMenuOpen = false;
  } else {
    menuButton.style.backgroundImage = "url('images/exit.png')";
    isMenuOpen = true;
  }
  
}


function handleKeyDown(e) {

  //console.log("keydown code = " + e.which)

  let dXY = 5; //amount to move in both X and Y direction
  if (e.which == UP_ARROW && movingBox.y >= dXY)
    movingBox.y -= dXY //up arrow
  if (e.which == RIGHT_ARROW && movingBox.x + movingBox.width + dXY <= canvas.width)
    movingBox.x += dXY //right arrow
  if (e.which == LEFT_ARROW && movingBox.x >= dXY)
    movingBox.x -= dXY //left arrow
  if (e.which == DOWN_ARROW && movingBox.y + movingBox.height + dXY <= canvas.height)
    movingBox.y += dXY //down arrow

  let keyCode = e.which
  if (keyCode == UP_ARROW | keyCode == DOWN_ARROW) {
    //prevent browser from using these with text input drop downs
    e.stopPropagation()
    e.preventDefault()
  }

}

function handleKeyUp(e) {
  //  console.log("key UP: " + e.which)
  if (e.which == RIGHT_ARROW | e.which == LEFT_ARROW | e.which == UP_ARROW | e.which == DOWN_ARROW) {
    let dataObj = {
      x: movingBox.x,
      y: movingBox.y
    }
    //create a JSON string representation of the data object
    let jsonString = JSON.stringify(dataObj)
    //DO NOTHING WITH THIS DATA FOR NOW

  }

  e.stopPropagation()
  e.preventDefault()

}