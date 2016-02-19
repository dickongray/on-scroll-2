$(document).on("scroll", function () {
	if ($(document).scrollTop() > 150) {
		$("nav").addClass("shrink");
		$('.test-img').attr('src', 'assets/img/mint-logo-green.svg');
	} else {
		$("nav").removeClass("shrink");
		$('.test-img').attr('src', 'assets/img/mint-logo-white.svg');
	}
});