/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('.box.style2');

  articles.forEach(article => {
      const normalImage = article.querySelector('.normal-image');
      const gifImage = article.querySelector('.gif-image');

      article.addEventListener('mouseenter', () => {
          normalImage.style.display = 'none';
          gifImage.style.display = 'block';
      });

      article.addEventListener('mouseleave', () => {
          normalImage.style.display = 'block';
          gifImage.style.display = 'none';
      });
  });
});
