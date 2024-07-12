// JavaScript to handle dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    // Get all dropdown toggles
    const dropdownToggles = document.querySelectorAll('.dropdown > a');

    // Add click event listener to each dropdown toggle
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(event) {
            event.preventDefault();
            const dropdownMenu = this.nextElementSibling; // Get the associated dropdown menu
            dropdownMenu.classList.toggle('show'); // Toggle visibility of dropdown menu
        });
    });

    // Close dropdown when clicking outside of it
    document.addEventListener('click', function(event) {
        const dropdownMenus = document.querySelectorAll('.dropdown-menu');
        dropdownMenus.forEach(menu => {
            if (!menu.contains(event.target)) {
                menu.classList.remove('show');
            }
        });
    });
});
