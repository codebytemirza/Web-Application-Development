const nameEl = document.querySelector("#name");
const cursorEl = document.querySelector(".cursor");
const nameParts = ["b", "d", "u", "l", "l", "a", "h", "."];
let characterIndex = 0;

function updateName() {
    if (characterIndex < nameParts.length) {
        const currentChar = nameParts[characterIndex];
        const charEl = document.createElement('p');
        charEl.classList.add('jelly');
        charEl.textContent = currentChar;
        charEl.style.fontSize= '6rem';

        // Insert the new character before the cursor
        nameEl.insertBefore(charEl, cursorEl);
        characterIndex++;
    } else {
        nameEl.innerHTML = '<p class="jelly cursor" style="font-size:6rem">A</p>';
        characterIndex = 0;
    }

    setTimeout(updateName, 400);
}

updateName();
