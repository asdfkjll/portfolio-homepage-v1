// icons
import '@fontsource-variable/material-symbols-outlined'
// styles
import './reset.css'
import './style.css'
// fonts
import '@fontsource-variable/geist'
import '@fontsource-variable/inter'
import '@fontsource-variable/jetbrains-mono'

// Hambuerguer menu for mobiles
const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menu-btn')

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active')
  menu.classList.toggle('active')
})
