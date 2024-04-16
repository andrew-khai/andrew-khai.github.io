document.addEventListener('DOMContentLoaded', () => {
  const articles = document.querySelectorAll('.box.style2');

  articles.forEach(article => {
      const normalImage = article.querySelector('.normal-image');
      const gifImage = article.querySelector('.gif-image');

      console.log(normalImage); // Debugging

      article.addEventListener('mouseenter', () => {
          console.log('Mouse enter event'); // Debugging
          normalImage.style.display = 'none';
          gifImage.style.display = 'block';
      });

      article.addEventListener('mouseleave', () => {
          console.log('Mouse leave event'); // Debugging
          normalImage.style.display = 'block';
          gifImage.style.display = 'none';
      });
  });
});
