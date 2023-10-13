// const scrollers = document.querySelectorAll(".scoller")

// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAnimation();
// }

// function addAnimation() {
//   scrollers.forEach(scroller => {
//     scroller.setAttribute('data-animated', true);
//   })
// }

// const scrollers = document.querySelectorAll(".scroller");

// // If a user hasn't opted in for reduced motion, then we add the animation
// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//   addAnimation();
// }

// function addAnimation() {
//   scrollers.forEach((scroller) => {
//     // Add data-animated="true" to every `.scroller` on the page
//     scroller.setAttribute("data-animated", true);

//     // Make an array from the elements within `.scroller-inner`
//     const scrollerInner = scroller.querySelector(".scroller__inner");
//     const scrollerContent = Array.from(scrollerInner.children);

//     let animationSpeed = scroller.getAttribute("data-speed") || "fast";
//     const scrollDuration = animationSpeed === "fast" ? 20000 : 40000; // Modify as needed

//     // For each item in the array, clone it, add aria-hidden to it, and add it into the `.scroller-inner`
//     scrollerContent.forEach((item) => {
//       const duplicatedItem = item.cloneNode(true);
//       duplicatedItem.setAttribute("aria-hidden", true);
//       scrollerInner.appendChild(duplicatedItem);
//     });

//     // Function to reset the scroll position
//     function resetScroll() {
//       scrollerInner.style.transform = "translateX(0)";
//     }

//     // Start the animation
//     function startScrollAnimation() {
//       scrollerInner.style.transition = `transform ${scrollDuration}ms linear`;
//       scrollerInner.style.transform = `translateX(-100%)`;

//       scrollerInner.addEventListener("transitionend", () => {
//         // Reset the scroll position when the animation ends
//         resetScroll();
//         // Start the animation again
//         setTimeout(startScrollAnimation, 0);
//       });
//     }

//     // Start the animation
//     setTimeout(startScrollAnimation, 0);
//   });
// }
