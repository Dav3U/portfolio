// Navbar autoclose on navlink click
maindiv= document.getElementById('main')
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('collapsedNavbar')
const skillsWrapper = document.getElementById('skills-wrapper')

const bsCollapse = new bootstrap.Collapse(menuToggle,{toggle:false})


  var x = window.matchMedia("(max-width: 991px)")

  var y = window.matchMedia("(max-width: 391px)")


  function mediaQueryToggle(x) {
    if (x.matches) { // If media query matches

// Navbar autoclose on main page click

        window.addEventListener('click', function(e){   
            if (document.getElementById('nav').contains(e.target)){
              // Clicked in box
            //   window.alert("click inside")
        
              navLinks.forEach((l) => {
                l.addEventListener('click', 
                () => { bsCollapse.toggle() 
                } )
        
            console.log(bsCollapse);
            bsCollapse._config.toggle = true;

             
            }
            )
        
        
            } 
            else{
              // Clicked outside the box
            //   bsCollapse.toggle()
            if(bsCollapse._config.toggle==true)
            {
        
            bsCollapse.toggle();
            bsCollapse._config.toggle = false;
        
            }

        
        
            //   window.alert("click outside")
        
            }
          });
        




    } else {
    //   document.body.style.backgroundColor = "pink";

    }
  }

  
  mediaQueryToggle(x) // Call listener function at run time
  x.addListener(mediaQueryToggle) // Attach listener function on state changes


  function hideSkillIcons(y) {
    
    if (y.matches) { // If media query matches
        skillsWrapper.style.display="none";
    }

    else{
        skillsWrapper.style.display="block";
    }
}

hideSkillIcons(y);
y.addListener(hideSkillIcons);
