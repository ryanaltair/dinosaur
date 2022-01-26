import  systems from './systems/index.js'
import  components from './components/index.js'
for(const {name,template} of systems){
  AFRAME.registerSystem(name,template)
}
for(const {name,template} of components){
  AFRAME.registerComponent(name,template)
}
function updateEl(el){
  if(el.children.length>0){
    for(const child of [...el.children]){
      updateEl(child)
    }
  }
  if(el?.isEntity){
    console.log(el)
    try {
      el?.updateComponents()
    } catch (error) {
    }
  }
}
updateEl(document.querySelector('a-scene'))