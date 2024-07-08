function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

  // Replace 'your-animation.json' with the path to your Lottie JSON file
  const animationPath = 'https://lottie.host/2aae6296-f555-4c1a-9b18-8f55872ba5b1/9G8crfLPTW.json';

  // Replace 'animation-container' with the ID of your container element
  const container = document.getElementById('animation-container');

  // Load the animation
  const animation = lottie.loadAnimation({
    container: container,
    renderer: 'svg', // You can choose 'svg' or 'canvas'
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to false if you want to control the playback manually
    path: animationPath,
  });


  const animation_path="https://lottie.host/c623fa95-c650-4485-951c-6a77914888d5/aQlpoM0OnP.json"

  const conatiners=document.getElementById('animation')

  const animations = lottie.loadAnimation({
    container: conatiners,
    renderer: 'svg', // You can choose 'svg' or 'canvas'
    loop: true, // Set to true if you want the animation to loop
    autoplay: true, // Set to false if you want to control the playback manually
    path: animation_path,
  });


  
  // function createSnowflakes() {
  //   const snowflakesContainer = document.querySelector(".snowflakes");
  
  //   for (let i = 0; i < 50; i++) {
  //     const snowflake = document.createElement("div");
  //     snowflake.className = "snowflake";
  //     snowflake.style.left = Math.random() * 100 + "vw";
  //     snowflake.style.animationDuration = Math.random() * 5 + 5 + "s";
  //     snowflake.style.animationDelay = Math.random() * 5 + "s";
  //     snowflakesContainer.appendChild(snowflake);
  //   }}

    const animation_paths="https://lottie.host/5ee4de43-3faf-41cf-bc5a-bd3ef86d7897/J6ccLno8Ql.json"

    const conatiners_1=document.getElementById('animations')
  
    const animations_1 = lottie.loadAnimation({
      container: conatiners_1,
      renderer: 'svg', // You can choose 'svg' or 'canvas'
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to false if you want to control the playback manually
      path: animation_paths,
    });

    const animation_paths1="https://lottie.host/bb4da45a-3e96-4ee3-ae9e-4174843a277a/gVVgYiKcER.json"

    const conatiners_12=document.getElementById('mail')
  
    const animations_12 = lottie.loadAnimation({
      container: conatiners_12,
      renderer: 'svg', // You can choose 'svg' or 'canvas'
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to false if you want to control the playback manually
      path: animation_paths1,
    });


    const back="https://lottie.host/905f8745-e8a7-4e3b-a33e-7a60bb0caa27/P0qSbBVDUP.json"

    const back_conatiner=document.getElementById('backend')
  
    const backend = lottie.loadAnimation({
      container: back_conatiner,
      renderer: 'svg', // You can choose 'svg' or 'canvas'
      loop: true, // Set to true if you want the animation to loop
      autoplay: true, // Set to false if you want to control the playback manually
      path: back,
    });

   
    // Function to check if an element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

 

    
     

  
  

 
