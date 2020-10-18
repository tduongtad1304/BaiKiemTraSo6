$(document).ready(function() {
    // Change style of navbar on scroll
    window.onscroll = function() { myFunction() };

    function myFunction() {
        var navbar = document.getElementById("idNavbar");
        if (document.documentElement.scrollTop > 24) {
            navbar.className = ("navbar navbar-expand-sm bg-light navbar-light fixed-top");
        }
        if (document.documentElement.scrollTop < 24) {
            navbar.className = ("navbar navbar-expand-sm bg-light navbar-light fixed-top mt-4");
        }
    }
});
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});