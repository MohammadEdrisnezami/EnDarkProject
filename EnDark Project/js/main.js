(function () {
  'use strict'

	window.addEventListener('load', function() {
	  var loader = document.querySelector('#preloader');
	  setTimeout(function() {
	    loader.style.display = 'none';
	  }, 1000); // 2000 milliseconds (2 seconds)
	});
})();



