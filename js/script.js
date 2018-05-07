function myFunction() {
    var x = document.getElementById("mycontainernav");
    if (x.className === "container-fluid") {
        x.className += " responsive";
    } else {
        x.className = "container-fluid";
    }
}


jQuery(document).ready(function() {
    jQuery('.toggle-nav').click(function(e) {
        jQuery(this).toggleClass('active');
        jQuery('.menu ul').toggleClass('active');

        e.preventDefault();
    });
});
