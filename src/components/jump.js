// what is jump
// when jump execute. add speed to current speed
export default {
  dependencies: ['speed'],
  schema: {
    enabled: { type: 'boolean', default: true },
    speed: { type: 'number', default: 5 },
    throttle: { type: 'number', default: 0.1 },
    gamble: { type: 'number', default: 0.05 }
  },
  init () {
    this.lastJumpTime = 0
  },
  update () {
    this.maxHeight = Math.pow(this.data.speed, 2) * 0.5
  },
  events: {
    jump () {
      if (!this.data.enabled) return
      const { throttle } = this.data
      const speed = this.el.components.speed
      const now = Date.now()
      if (now - this.lastJumpTime < throttle) return
      this.lastJumpTime = now
      const maxHeight = this.maxHeight
      const factor = 1 - this.el.object3D.position.y / maxHeight
      const targetSpeed = this.data.speed * factor
      console.log('t', targetSpeed, factor)
      speed.setSpeed(targetSpeed)
    }
  }

}
