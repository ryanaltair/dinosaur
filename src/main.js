import systems from './systems/index.js'
import components from './components/index.js'
for (const [name, template] of Object.entries(systems)) {
  AFRAME.registerSystem(name, template)
}
for (const [name, template] of Object.entries(components)) {
  AFRAME.registerComponent(name, template)
}
function updateEl (el) {
  if (el.children.length > 0) {
    for (const child of [...el.children]) {
      updateEl(child)
    }
  }
  if (el.isEntity && !el.hasAttribute('aframe-injected')) {
    el.updateComponents()
  }
}
updateEl(document.querySelector('a-scene'))
