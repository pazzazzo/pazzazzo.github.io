let filterButtons = document.querySelectorAll('.project-selector-button');
let filterBackground = document.getElementById("project-selector-bg")
let projectItems = document.querySelectorAll('.project');
let selected = 0

function updateSelectedButton() {
    if (filterButtons.length > 0) {
        filterBackground.style.width = filterButtons[selected].clientWidth + "px";
        filterBackground.style.left = filterButtons[selected].offsetLeft + "px";
    }
}

document.addEventListener('DOMContentLoaded', updateSelectedButton);
window.addEventListener('resize', updateSelectedButton);

filterButtons.forEach((button, i) => {
    button.addEventListener('click', () => {
        selected = i;
        updateSelectedButton();
        if (button.dataset.select === "all") {
            projectItems.forEach(item => {
                item.style.display = 'flex';
            });
        } else {

            projectItems.forEach(item => {
                if (item.attributes[button.dataset.select]) {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                }
            });
        }
    });
});