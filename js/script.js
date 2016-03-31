$( document ).ready(function() {
		$("#header").load("inc/header.html");
		$("#footer").load("inc/footer.html");
		
});

$(window).bind("load", function() {
$("#main").load("inc/home.html");
});


$(document).on('click', 'h1', function (e) {
    $("#main").load("inc/home.html");
});

$(document).on('click', '#wordpress', function (e) {
    $("#main").load("inc/wordpress.html");
});

$(document).on('click', '#javascript', function (e) {
    $("#main").load("inc/javascript.html");
});