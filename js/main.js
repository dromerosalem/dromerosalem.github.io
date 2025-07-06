// Function to initialize particles with the specified color and container background
function initializeParticles(particleColor, backgroundColor) {
  // Get existing particles container (it already exists in the HTML)
  const container = document.querySelector('#particles-js')
  if (!container) return // Safety guard – shouldn't happen

  // Update container background color so particles remain visible
  container.style.backgroundColor = backgroundColor

  // Re-initialise particles.js with the new particle colour
  particlesJS('particles-js', {
    particles: {
      number: { value: 160, density: { enable: true, value_area: 800 } },
      color: { value: particleColor },
      shape: {
        type: 'circle',
        stroke: { width: 0, color: '#000000' },
        polygon: { nb_sides: 5 },
        image: { src: 'img/github.svg', width: 100, height: 100 }
      },
      opacity: {
        value: 1,
        random: true,
        anim: { enable: true, speed: 1, opacity_min: 0, sync: false }
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: false, speed: 4, size_min: 0.3, sync: false }
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: particleColor,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 600 }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: { enable: true, mode: 'bubble' },
        onclick: { enable: true, mode: 'repulse' },
        resize: true
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
        repulse: { distance: 400, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  })
}

function myFunction() {
  // Toggle dark mode classes on footer elements
  document.querySelectorAll('.anchorFooter').forEach(element => {
    element.classList.toggle('dark-mode')
  })

  // Toggle dark mode on body
  const element = document.body
  element.classList.toggle('dark-mode')

  // Determine current mode
  const isDarkMode = element.classList.contains('dark-mode')

  // Choose particle and background colours depending on mode
  const particleColor = isDarkMode ? '#000000' : '#ffffff'  // Dark-text on light bg
  const backgroundColor = isDarkMode ? 'whitesmoke' : '#000000' // Match body colour so canvas blends in

  // Reinitialize particles and update background
  initializeParticles(particleColor, backgroundColor)
}

function setupPage() {

  $(function () {
    $('.single-item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    })

  })

  const onoffswitch = document.querySelector('.onoffswitch-checkbox')

  onoffswitch.addEventListener('click', () => {
    myFunction()
    // console.log('Hello World')
  })

  // I add mobile menu functionality
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle')
  const mobileMenu = document.querySelector('.bar')
  const navLinks = document.querySelectorAll('.navbar a')
  
  // Toggle mobile menu
  mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active')
    mobileMenu.classList.toggle('active')
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : ''
  })
  
  // Close mobile menu when clicking on navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuToggle.classList.remove('active')
      mobileMenu.classList.remove('active')
      document.body.style.overflow = ''
    })
  })
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInsideNav = mobileMenuToggle.contains(e.target) || mobileMenu.contains(e.target)
    
    if (!isClickInsideNav && mobileMenu.classList.contains('active')) {
      mobileMenuToggle.classList.remove('active')
      mobileMenu.classList.remove('active')
      document.body.style.overflow = ''
    }
  })
  
  // Handle window resize - close mobile menu on desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 600) {
      mobileMenuToggle.classList.remove('active')
      mobileMenu.classList.remove('active')
      document.body.style.overflow = ''
    }
  })

  // Default: dark mode (white particles on black background)
  initializeParticles('#ffffff', '#000000')

  AOS.init()

}

if (typeof module !== 'undefined') {
  module.exports = { myFunction, setupPage, initializeParticles }
}

window.addEventListener('DOMContentLoaded', setupPage)