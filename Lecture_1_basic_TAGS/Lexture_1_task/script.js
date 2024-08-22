function openURL() {
    var url = "./img/my-img.jpeg";

    window.open(url, "_blank");
  }

// Function to toggle the mobile menu
function hamburgerMenu() {
  const menu = document.getElementById('mobiletogglemenu');
  const isMenuOpen = menu.style.display === 'block';
  menu.style.display = isMenuOpen ? 'none' : 'block';
}

function hidemenubyli() {
  const menu = document.getElementById('mobiletogglemenu');
  menu.style.display = 'none'; // Hide the menu
}

document.getElementById('hamburger-button').addEventListener('click', hamburgerMenu);




