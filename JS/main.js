// Ubicar el menu de hamburguesa y el de cierre, tambien la nav con las opciones
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navOptions = document.getElementById('navOptions');
console.log(openMenu, closeMenu, navOptions)
function abrirMenu() {
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    navOptions.style.right = '0%';
}
function cerrarMenu() {
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    navOptions.style.right = '-100%';
}
function openCity(evt, bandName) {
    // Declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(bandName).style.display = "flex";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();