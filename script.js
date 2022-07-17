
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

  const btnMobile = document.getElementById("btn-mobile");
  function toggleMenu() {
    const nav = document.getElementsByClassName("nav-menu");
    console.log(nav);
    for (let i = 0; i < nav.length; i++) {
      let toggleNav = nav[i];
      toggleNav.classList.toggle("active");
      
    }

  }

  btnMobile.addEventListener("click", toggleMenu);