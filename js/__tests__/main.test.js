const { JSDOM } = require('jsdom');
const fs = require('fs');

describe('myFunction', () => {
  let window, document, myFunction;

  beforeEach(() => {
    const html = `<!DOCTYPE html><html><body><input class="onoffswitch-checkbox" /></body></html>`;
    window = new JSDOM(html).window;
    document = window.document;
    // Expose globals expected by main.js
    global.window = window;
    global.document = document;
    global.AOS = { init: jest.fn() };
    global.particlesJS = jest.fn();
    global.$ = jest.fn(() => ({ slick: jest.fn() }));
    // Load script
    const scriptContent = fs.readFileSync(require.resolve('../main.js'), 'utf8');
    const scriptModule = { exports: {} };
    const func = new Function('module', 'exports', 'require', 'window', 'document', scriptContent);
    func(scriptModule, scriptModule.exports, require, window, document);
    myFunction = scriptModule.exports.myFunction;
  });

  afterEach(() => {
    delete global.window;
    delete global.document;
    delete global.AOS;
    delete global.particlesJS;
    delete global.$;
  });

  test('toggles dark-mode and does not throw when #particles-js missing', () => {
    expect(() => myFunction()).not.toThrow();
    expect(document.body.classList.contains('dark-mode')).toBe(true);
  });
});
