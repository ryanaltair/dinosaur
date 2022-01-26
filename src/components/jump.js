// what is jump
// when jump execute. add speed to current speed
export default {
  dependencies: ['speed'],
  schema: {
    enabled: { type: 'boolean', default: true },
    speed: { type: 'number', default: 5 },
    throttle: { type: 'number', default: 0.1 }
  },
  init () {
    this.lastJumpTime = 0
  },
  events: {
    jump () {
      if (!this.data.enabled) return
      const { throttle } = this.data
      const speed = this.el.components.speed
      const now = Date.now()
      if (now - this.lastJumpTime < throttle) return
      this.lastJumpTime = now
      speed.add(this.data.speed)
    }
  }

}
