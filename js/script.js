document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

	var navBar = document.getElementById('stickybar');
	console.log(navBar)
	var sticky = navBar.offsetTop;
	console.log(sticky)

	function stickyNavBar(){
		if(window.pageYOffset >= sticky){
			navBar.classList.add('sticky');
		} else {
			navBar.classList.remove('sticky');
		};
	};

	window.onscroll = function(){
		stickyNavBar();
	};


 });


