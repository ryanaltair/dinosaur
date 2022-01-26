// what is jump
// when jump execute. add speed to current speed
// height= initHeight + speed*t - 0.5*9.8*t*t
export default {
  dependencies: ['speed'],
  schema: {
    enabled: { type: 'boolean', default: true },
    value: { type: 'number', default: 9.8 }
  },
  init () {
    this.speed = 0
  },
  tick (time, deltaTime) {
    if (!this.data.enabled) return
    const speed = this.el.components.speed
    const seconds = deltaTime * 0.001
    const addSpeed = -this.data.value * seconds
    speed.add(addSpeed)
  }
}
