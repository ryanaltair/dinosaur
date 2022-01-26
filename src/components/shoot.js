export default {
  schema: {
    enabled: { type: 'boolean', default: true },
    speed: { type: 'number', default: 0.05 },
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
  tick () {
    if (!this.data.enabled) return
    if (this.shooting) {
      const { direction, speed } = this.data
      const current = this.el.object3D.position
      current.addScaledVector(direction, speed)
    }
  }
}
