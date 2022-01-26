const { Vector3 } = THREE
const _vec3 = new Vector3()
export default {
  schema: {
    enabled: { type: 'boolean', default: true },
    speed: { type: 'number', default: 0.05 },
    origin: { type: 'vec3', default: new Vector3(0, 0, 0) },
    direction: { type: 'vec3', default: new Vector3(-1, 0, 0) }
  },
  init () {
    console.log('shoot init', this.el)
  },
  events: {
    shoot () {
      const { origin } = this.data
      console.log('shoot', this.data.speed, origin)
      this.el.object3D.position.copy(origin)
      this.shooting = true
    }
  },
  tick () {
    if (!this.data.enabled) return
    if (this.shooting) {
      const { direction, speed } = this.data
      const current = this.el.object3D.position
      current.addScaledVector(direction, speed)
    }
  }
}
