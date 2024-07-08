const front="https://lottie.host/213abaa0-4483-46d0-b03e-f8a66ec8f244/EWl3tg89J5.json"

    const front_conatiner=document.getElementById('frontend')
  
    const frontend = lottie.loadAnimation({
      container: front_conatiner,
      renderer: 'svg', // You can choose 'svg' or 'canvas'
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to false if you want to control the playback manually
      path: front,
    });

    


      const img="https://lottie.host/6045d723-3fae-4689-a2aa-06b3cda5e83f/CYx4KoiOLr.json"

    const img_conatiner=document.getElementById('imgs')
  
    const imgage = lottie.loadAnimation({
      container: img_conatiner,
      renderer: 'svg', // You can choose 'svg' or 'canvas'
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to false if you want to control the playback manually
      path: img,
    });


    // / Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll event
function handleScroll() {
  var fadeInSection = document.querySelectorAll('img');
  fadeInSection.forEach(function(section) {
      if (isInViewport(section)) {
          section.classList.add('active');
      }
  });
}

// Add scroll event listener to trigger fade-in effect
window.addEventListener('scroll', handleScroll);


function handlePara() {
  var fadeInSection = document.querySelectorAll('p');
  fadeInSection.forEach(function(section) {
      if (isInViewport(section)) {
          section.classList.add('active');
      }
  });
}
    
window.addEventListener('scroll', handlePara);