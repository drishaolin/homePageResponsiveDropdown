
  window.onclick = (event) => {
    closeDropdown(event);
    closeNavMenu(event);
  }

  function toggleDropdown(elementId) {
    document.getElementById(elementId).classList.toggle("show-dropdown");
}

function closeNavMenu(event) {
    if (event.target.matches(".close-menu")) {
      toggleMenu();
  }
}
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
  const closeMenu = document.querySelector(".close-menu");
  closeMenu.classList.toggle("close-menu-active");
}

