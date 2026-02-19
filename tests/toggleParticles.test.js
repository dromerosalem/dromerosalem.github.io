/**
 * @jest-environment jsdom
 *
 * I am writing these Jest tests to validate that my dark-mode toggle logic keeps the hero section, hero text and particles visible at all times.
 */

// Stub jQuery and AOS BEFORE importing the code that relies on them

// Basic jQuery stub
global.$ = jest.fn((param) => {
  if (typeof param === 'function') {
    // When used as $(function(){ ... }) execute immediately to simulate DOM ready
    param()
    return {
      slick: jest.fn()
    }
  }
  // When used as $(selector)
  return {
    slick: jest.fn()
  }
})

// Stub AOS library
global.AOS = { init: jest.fn() }

const { myFunction, setupPage } = require('../js/main.js')

// Stub particlesJS after importing as it will be attached to window/global in main.js
beforeAll(() => {
  global.particlesJS = jest.fn()
})

beforeEach(() => {
  // Fresh DOM for each test
  document.body.innerHTML = `
    <div class="first">
      <div id="particles-js"></div>
      <div class="profile">
        <h1 class="name">TEST NAME</h1>
      </div>
    </div>
    <input type="checkbox" class="onoffswitch-checkbox" />
    <a class="anchorFooter"></a>
  `
  // Reset body class
  document.body.className = ''

  // Clear mocks
  particlesJS.mockClear()
})

test('initialising page sets white particles on black background', () => {
  setupPage()

  const container = document.querySelector('#particles-js')
  expect(container.style.backgroundColor).toBe('rgb(0, 0, 0)')

  // particlesJS should have been called with colour #ffffff
  expect(particlesJS).toHaveBeenCalled()
  const configArg = particlesJS.mock.calls[0][1]
  expect(configArg.particles.color.value).toBe('#ffffff')
})

test('toggling once switches to light mode with visible black particles on white background', () => {
  setupPage()
  particlesJS.mockClear() // disregard initial call

  myFunction() // simulate user clicking toggle once

  const container = document.querySelector('#particles-js')
  expect(container.style.backgroundColor).toBe('whitesmoke')
  expect(document.body.classList.contains('dark-mode')).toBe(true)

  // Expect black particles
  const configArg = particlesJS.mock.calls[0][1]
  expect(configArg.particles.color.value).toBe('#000000')
})

test('toggling twice returns to dark mode with white particles on black background', () => {
  setupPage()
  myFunction() // first toggle -> light mode
  particlesJS.mockClear() // clear after first toggle

  myFunction() // second toggle -> dark mode again

  const container = document.querySelector('#particles-js')
  expect(container.style.backgroundColor).toBe('rgb(0, 0, 0)')
  expect(document.body.classList.contains('dark-mode')).toBe(false)

  // Expect white particles again
  const configArg = particlesJS.mock.calls[0][1]
  expect(configArg.particles.color.value).toBe('#ffffff')
}) 