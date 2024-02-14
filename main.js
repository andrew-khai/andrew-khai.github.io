// Infinite scroller for skills section
// const scrollers = document.querySelectorAll('.scroller');

// const addAnimation = () => {
//   scrollers.forEach(scroller => {
//     // Get the scroller inner container and its content
//     const scrollerInner = scroller.querySelector(".scroller__inner");
//     const scrollerInnerContent = Array.from(scrollerInner.children);

//     // Calculate the total width of the scroller inner content
//     const totalWidth = scrollerInnerContent.reduce((width, item) => width + item.offsetWidth, 0);

//     // Clone and append the items to create an infinite loop
//     scrollerInnerContent.forEach(item => {
//       const clone = item.cloneNode(true);
//       scrollerInner.appendChild(clone);
//     });

//     // Set the width of the scroller inner container to accommodate all cloned items
//     scrollerInner.style.width = `${totalWidth}px`;
//   });
// };

// // Call the function to add the animation
// addAnimation();
