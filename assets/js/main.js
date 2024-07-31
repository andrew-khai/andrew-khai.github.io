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

const words = ['Full-Stack Developer', 'Teamplayer', 'Problem Solver'];
const typingDemo = document.querySelector('.typing-demo');

let currentWordIndex = 0;
let currentCharacterIndex = 0;
let isDeleting = false;

function typeWords() {
    const currentWord = words[currentWordIndex];
    const speed = 100; // Adjust typing speed as needed

    if (!isDeleting && currentCharacterIndex < currentWord.length) {
        typingDemo.textContent += currentWord[currentCharacterIndex];
        currentCharacterIndex++;
        setTimeout(typeWords, speed);
    } else if (isDeleting && currentCharacterIndex > 0) {
        typingDemo.textContent = currentWord.substring(0, currentCharacterIndex - 1);
        currentCharacterIndex--;
        setTimeout(typeWords, speed);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }
        setTimeout(typeWords, 500); // Delay before typing the next word
    }
}

// Start typing
typeWords();
