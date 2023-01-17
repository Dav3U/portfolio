// Navbar autoclose on navlink click
maindiv= document.getElementById('main')
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('collapsedNavbar')
const bsCollapse = new bootstrap.Collapse(menuToggle,{toggle:false})
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

// Navbar autoclose on main poage click
// maindiv.addEventListener('click', () => { bsCollapse.toggle() })


