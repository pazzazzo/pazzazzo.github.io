let filterButtons = document.querySelectorAll('.project-selector-button');
let filterBackground = document.getElementById("project-selector-bg")

document.addEventListener('DOMContentLoaded', () => {
  if (filterButtons.length > 0) {
    filterBackground.style.width = filterButtons[0].clientWidth + "px";
    filterBackground.style.left = filterButtons[0].offsetLeft + "px";
  }
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterBackground.style.width = button.clientWidth + "px";
    filterBackground.style.left = button.offsetLeft + "px";
    
    
    
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