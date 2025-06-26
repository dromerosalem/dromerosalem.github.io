

function myFunction() {
  document.querySelectorAll('.anchorFooter').forEach(element => {
    element.classList.toggle('dark-mode')
  })
  const element = document.body
  element.classList.toggle('dark-mode')
  const particles = document.querySelector('#particles-js')
  // particles.classList.toggle('.particles-js-white')
  if (particles && particles.parentNode) {
    particles.parentNode.removeChild(particles)
  }
}

function setupPage() {

  $(function(){
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
  
  particlesJS("particles-js", 
  {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});
  
AOS.init()

}

if (typeof module !== 'undefined') {
  module.exports = { myFunction, setupPage }
}

window.addEventListener('DOMContentLoaded', setupPage)