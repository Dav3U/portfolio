// Navbar autoclose on navlink click
const maindiv= document.getElementById('main')
const nav= document.getElementById('nav')
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('collapsedNavbar')
const skillsWrapper = document.getElementById('skills-wrapper')

const bsCollapse = new bootstrap.Collapse(menuToggle,{toggle:false})


  var x = window.matchMedia("(max-width: 991px)")

  var y = window.matchMedia("(max-width: 389px)")


  function mediaQueryToggle(x) {
    if (x.matches) { // If media query matches
        navBarResponse();       
        console.log(window.innerWidth)
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

                  // Clicked in box
                //   window.alert("click inside")
            
                  navLinks.forEach((l) => {
                    l.addEventListener('click', 
                    () => { bsCollapse.toggle() 
                    bsCollapse._config.toggle = false;
                    } )
                }
                )
                } 
                else{
                  console.log("Clicked outside the box");
                //   bsCollapse.toggle()
                if(bsCollapse._config.toggle==true)
                {
                bsCollapse.toggle();
                bsCollapse._config.toggle = false;
                }
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

mediaQueryToggle(x) // Call listener function at run time
x.addListener(mediaQueryToggle) // Attach listener function on state changes

hideSkillIcons(y);
y.addListener(hideSkillIcons);

setSticky();