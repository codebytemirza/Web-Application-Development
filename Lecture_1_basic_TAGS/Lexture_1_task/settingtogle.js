const switchForSetting = document.getElementById("switchforsetting");
let previousBackgroundColor = ""; // To store the previous background color

function toggleBackground() {
    const textElements = document.querySelectorAll(
        ".jelli, #info-para,P, .project.heading, .ProjectDescription, .navbar-tabs-ul li a"
    );
    const heading = document.querySelector(".section-heading-article");
    const navbarTabs = document.getElementById("navbar-tabs");
     const nav = document.querySelector(".navbar")
     const setting = document.querySelector("#labelforsetting")
     const imageUrl = 'https://cdn-icons-png.flaticon.com/128/439/439842.png'
    if (switchForSetting.checked) {
        // Store the current background color before changing it
        previousBackgroundColor = document.body.style.backgroundColor;
        // Change the background to white
        document.body.style.backgroundColor = "#ffffff";
       nav.style.border = '1px solid black'
       setting.style.backgroundImage = `url(${imageUrl})`;
       heading.style.color = "#000000";
        // Change text elements to black
        textElements.forEach(element => {
            element.style.color = "#000000";
        });

        // Change outline to a little black
           } else {
             nav.style.border = '2px solid var(--color-navbarBorder-dark)'
        // Revert to the previous background color
        document.body.style.backgroundColor = previousBackgroundColor;
        setting.style.backgroundImage = `url("https://cdn-icons-png.flaticon.com/128/581/581601.png")`;
        // Revert text elements to their original color
        textElements.forEach(element => {
            element.style.color = ""; // Assuming original color is set via CSS
        });

        // Revert outline to its original state
        navbarTabs.style.outline = ""; // Assuming original outline is set via CSS
    }
}

// Add event listener to the checkbox
switchForSetting.addEventListener("change", toggleBackground);
