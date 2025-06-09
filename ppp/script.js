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


        // // Get the filter value from the button's data attribute
        // const filterValue = button.getAttribute('data-filter');

        // // Get all project items
        // const projectItems = document.querySelectorAll('.project-item');

        // // Show or hide project items based on the filter value
        // projectItems.forEach(item => {
        //   if (filterValue === 'all' || item.classList.contains(filterValue)) {
        //     item.style.display = 'block';
        //   } else {
        //     item.style.display = 'none';
        //   }
        // });
    });
});