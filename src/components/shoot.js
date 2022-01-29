const { Vector3 } = THREE

export default {
  schema: {
    enabled: { type: 'boolean', default: true },
    speed: { type: 'number', default: 5 },
    origin: { type: 'vec3', default: new Vector3(0, 0, 0) },
    direction: { type: 'vec3', default: new Vector3(-1, 0, 0) },
    maxDistance: { type: 'number', default: 10 }
  },
  init () { this.shooting = false },
  events: {
    shoot () {
      const { origin } = this.data
      if (this.shooting) return
      this.el.object3D.position.copy(origin)
      this.shooting = true
      this.el.addState('shooting')
      this.distance = 0
    }
  },
  tick (time, deltaTime) {
    if (!this.data.enabled) return
    if (this.shooting) {
      const { direction, speed } = this.data
      const current = this.el.object3D.position
      const seconds = deltaTime * 0.001
      const translate = seconds * speed
      this.distance += translate
      if (this.distance < this.data.maxDistance) {
        current.addScaledVector(direction, translate)
        return
      }
      this.shooting = false
      this.el.removeState('shooting')
    }
  }
}
