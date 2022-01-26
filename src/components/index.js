import jump from './jump.js'
import shoot from './shoot.js'
import score from './score.js'
import collision from './collision.js'
const systems = [
  { name: 'jump', template: jump },
  { name: 'shoot', template: shoot },
  { name: 'score', template: score },
  { name: 'collision', template: collision }
]
export default systems
