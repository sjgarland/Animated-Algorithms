/* Toggle visibility of dropdown menu. */
function toggleMenu() {
    document.getElementById("menu").classList.toggle("show");
}

/* Close the dropdown menu if the user clicks outside of it */
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-label') && !event.target.matches('.strong-dropdown-label')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}