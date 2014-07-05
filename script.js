$(document).ready(function() {
	var $ingredients = $('ul li');
	$ingredients.click(function() {
		$(this).css("text-decoration", "line-through");
		$(this).fadeTo("slow", 0.5);
	});
	var $directions = $('ol li');
	$directions.click(function() {
		$(this).css("text-decoration", "line-through");
		$(this).fadeTo("fast", 0.25);
	});
	$('#toggle').click(function() {
		$('.imgtog').toggle();
	});
});