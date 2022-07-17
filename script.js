
function toggleDropdown(elementId) {
    document.getElementById(elementId).classList.toggle("show-dropdown");
    //window.onmousemove = (event) => closeDropdown(event);
}

window.onclick = (event) => closeDropdown(event);

function closeDropdown(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for ( let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show-dropdown')) {
            openDropdown.classList.remove('show-dropdown');
        }
      }
    }
  }

const btnMobile = document.getElementsByClassName("btn-mobile");
for (let i = 0; i < btnMobile.length; i++) {
  let btn = btnMobile[i];
  btn.addEventListener("click", toggleMenu);
}

function toggleMenu() {
  const nav = document.getElementsByClassName("nav-menu");
  for (let i = 0; i < nav.length; i++) {
    let toggleNav = nav[i];
    toggleNav.classList.toggle("active");
    
  }
  for (let i = 0; i < btnMobile.length; i++) {
    let btn = btnMobile[i];
    btn.classList.toggle("btn-active");
    
  }
  const menu = document.querySelector(".menu-container");
  menu.classList.toggle("active");
    
}

