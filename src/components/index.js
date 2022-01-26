import jump from './jump.js'
import gravity from './gravity.js'
import speed from './speed.js'
import shoot from './shoot.js'
import score from './score.js'
import collision from './collision.js'
const systems = { jump, speed, gravity, shoot, score, collision }

// [
//   { name: 'jump', template: jump },
//   { name: 'jump', template: jump },
//   { name: 'jump', template: jump },
//   { name: 'shoot', template: shoot },
//   { name: 'score', template: score },
//   { name: 'collision', template: collision }
// ]
export default systems
