const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector('nav');
const navLinks = document.querySelector('nav ul');


function openMenu() {
    sideMenu.style.transform = 'translatex(-16rem)';

}
function closeMenu() {
    sideMenu.style.transform = 'translatex(16rem)';

}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20'
        )
        navLinks.classList.remove('bg-white', 'bg-opacity-50', 'shadow-sm','dark:border','dark:shadow-white/70','dark:bg-transparent')

    } else {
        navBar.classList.remove('bg-white', 'bg-opacity-50', 'backdrop-blur-lg',
            'shadow-sm','dark:bg-darkTheme','dark:shadow-white/20'
        )
        navLinks.classList.add('bg-white', 'bg-opacity-50', 'shadow-sm','dark:border','dark:shadow-white/70','dark:bg-transparent')
    }
})

//------------- light mode and dark mode


if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

  function toggleTheme(){
    document.documentElement.classList.toggle('dark')

    if( document.documentElement.classList.contains('dark')){
        localStorage.theme ='dark';
    }
    else{
        localStorage.theme ='light';
    }
  }


        //    image




// document.addEventListener("DOMContentLoaded", function () {
//     let slideIndex = 0;
//     const slides = document.querySelectorAll(".slide");
//     const totalSlides = slides.length;

//     function showSlide(index) {
//         slides.forEach((slide, i) => {
//             slide.classList.add('hidden');
//             if (i === index) {
//                 slide.classList.remove('hidden');
//             }
//         });

//         // Disable/enable buttons based on the slide index
//         document.getElementById('prevButton').disabled = index === 0;
//         document.getElementById('nextButton').disabled = index === totalSlides - 1;
//     }

//     document.getElementById('prevButton').addEventListener('click', function () {
//         if (slideIndex > 0) {
//             slideIndex--;
//             showSlide(slideIndex);
//         }
//     });

//     document.getElementById('nextButton').addEventListener('click', function () {
//         if (slideIndex < totalSlides - 1) {
//             slideIndex++;
//             showSlide(slideIndex);
//         }
//     });

   
//     showSlide(slideIndex);
// });
