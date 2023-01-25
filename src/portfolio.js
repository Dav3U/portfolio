// Navbar autoclose on navlink click
maindiv= document.getElementById('main')
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('collapsedNavbar')
const bsCollapse = new bootstrap.Collapse(menuToggle,{toggle:false})


  var x = window.matchMedia("(max-width: 991px)")


  function myFunction(x) {
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
            // menuToggle.classList.add('down')
             
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
  
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes

