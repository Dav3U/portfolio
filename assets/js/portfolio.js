// Navbar autoclose on navlink click
const maindiv= document.getElementById('main')
const nav= document.getElementById('nav')
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('collapsedNavbar')
const skillsWrapper = document.getElementById('skills-wrapper')
const html = document.getElementById('html')
const togglebutton = document.getElementById("toggle")





const bsCollapse = new bootstrap.Collapse(menuToggle,{toggle:false})


  var x = window.matchMedia("(max-width: 991px)")

  var y = window.matchMedia("(max-width: 389px)")


 
  document.getElementById('modeIcon').addEventListener('click',()=>{
    modeChange();  
  })
 
   const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ?
  "dark" :
  "light";

  // Set theme to the user's preferred color scheme
function updateTheme() {
  const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ?
    "dark" :
    "light";

    if (colorMode=='light'){
      document.getElementById('modeIcon').classList.remove('fa-sun')
      document.getElementById('modeIcon').classList.add('fa-moon')
    }
    else{
      document.getElementById('modeIcon').classList.add('fa-sun')
      document.getElementById('modeIcon').classList.remove('fa-moon')
    }
    
  document.querySelector("html").setAttribute("data-bs-theme", colorMode);

  return;
}

// Set theme on load
updateTheme()

// Update theme when the preferred scheme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme)


  function modeChange(){
    if (colorMode=='light'){
      document.getElementById('modeIcon').classList.toggle('fa-sun')
      document.getElementById('modeIcon').classList.toggle('fa-moon')
    }
    else{
      document.getElementById('modeIcon').classList.toggle('fa-sun')
      document.getElementById('modeIcon').classList.toggle('fa-moon')
    }

    html.getAttribute('data-bs-theme')=='dark'? 
    html.setAttribute('data-bs-theme','light') : 
    html.setAttribute('data-bs-theme', 'dark')
   

  }


  function mediaQueryToggle(x) {
    if (x.matches) { 
      // If media query matches
        navBarResponse();       
  }
  }

  function setSticky(){
    if (window.innerWidth <= 991){
      nav.classList.add('sticky-top');
    } 
    else if(window.innerWidth > 991)
    {
      nav.classList.remove('sticky-top');
    } 
    window.onresize = function() {
      if (window.innerWidth <= 991){
        nav.classList.add('sticky-top');
      } 
      else if(window.innerWidth > 991)
      {
        nav.classList.remove('sticky-top');
      } 
    };
  }

  function navBarResponse(){
    
    // Navbar autoclose on main page click
    
            window.addEventListener('click', function(e){   
                if (document.getElementById('nav').contains(e.target)){
                  navLinks.forEach((l) => {
                    l.addEventListener('click', 
                    () => { bsCollapse.toggle() 
                    bsCollapse._config.toggle = false;
                    } )
                }


                )
                } 

                else{
                //   console.log("Clicked outside the box");
                  // bsCollapse.toggle()
                // if(bsCollapse._config.toggle==false)
                // {
                // bsCollapse.toggle();
                // // bsCollapse._config.toggle = false;
                // }
                }
              });
        } 

  function hideSkillIcons(y) {
    
    if (y.matches) { // If media query matches
        skillsWrapper.style.display="none";
    }

    else{
        skillsWrapper.style.display="block";
    }
}

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mediaQueryToggle(x) // Call listener function at run time
x.addListener(mediaQueryToggle) // Attach listener function on state changes

hideSkillIcons(y);
y.addListener(hideSkillIcons);

setSticky();