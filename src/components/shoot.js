const { Vector3 } = THREE
export default {
  schema: {
    enabled: { type: 'boolean', default: true },
    speed: { type: 'number', default: 5 },
    origin: { type: 'vec3', default: new Vector3(0, 0, 0) },
    direction: { type: 'vec3', default: new Vector3(-1, 0, 0) }
  },
  init () {},
  events: {
    shoot () {
      const { origin } = this.data
      this.el.object3D.position.copy(origin)
      this.shooting = true
    }
  },
  tick (time, deltaTime) {
    if (!this.data.enabled) return
    if (this.shooting) {
      const { direction, speed } = this.data
      const current = this.el.object3D.position
      const seconds = deltaTime * 0.001
      const translate = seconds * speed
      current.addScaledVector(direction, translate)
    }
  }
}
