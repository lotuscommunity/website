/*document.addEventListener('scroll', function() {
    const video = document.querySelector('.background-video');
    const scroll_position = window.scrollY;
	const height_content = document.getElementById("page-content").offsetHeight;

	const duration = video.duration; // Durée totale en secondes
    const fps = 30; // Estimation du FPS (à ajuster si nécessaire)

    const total_frames = Math.floor(duration * fps);
   
	video.currentTime = scroll_position / height_content * total_frames / 30;
	
	console.log('Nombre total d\'images:', total_frames);
	console.log('scrollPosition:', scroll_position);	
	console.log('height_content:', height_content);	
});*/


 document.addEventListener("DOMContentLoaded", function () {
	$(".left-right-animate-div").each(function() {
		var observer_1 = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('left-right-animate'); // Add the animation class when the element is visible
					observer_1.unobserve(entry.target); // Stop observing once the animation is triggered
				}
			});
		});
		observer_1.observe(this); // Start observing the target element
	});
	
	$(".right-left-animate-div").each(function() {
		var observer_1 = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('right-left-animate'); // Add the animation class when the element is visible
					observer_1.unobserve(entry.target); // Stop observing once the animation is triggered
				}
			});
		});
		observer_1.observe(this); // Start observing the target element
	});
	

	
    $(".opacity-animate-hidden").addClass("opacity-animate-div");
	
});