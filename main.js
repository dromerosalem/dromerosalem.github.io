

function setupPage() {

  $(function(){
    $('.single-item').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    })
      
  })


  function myFunction() {
    document.querySelectorAll('.anchorFooter').forEach(element => {
      element.classList.toggle('dark-mode')
    })
    const element = document.body
    element.classList.toggle('dark-mode') 
  }
  
  const onoffswitch = document.querySelector('.onoffswitch-checkbox')

  onoffswitch.addEventListener('click', () => {
    myFunction()
    // console.log('Hello World')
  })
  
}

window.addEventListener('DOMContentLoaded', setupPage)