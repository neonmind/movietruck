$(document).ready(function () {

	$("body").ready(function () {
	$("ul").hide();	
});

	$("body").ready(function () {
	$("p").hide();	
});

	$("#toTruck h2").click(function () {
	$("#toTruck ul").slideToggle(1000);
	});

	$("#trucked h2").click(function () {
	$("#trucked ul").slideToggle(1000);
	});

	$("#doodle h2").click(function () {
	$("#doodle ul").slideToggle(1000);
	});

	$("#about h2").click(function () {
	$("#about p").slideToggle(500);
	});

});


