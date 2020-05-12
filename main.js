

function setupPage() {

  $(function(){
    $('.single-item').slick()
      
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