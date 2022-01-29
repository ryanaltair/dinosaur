// what is jump
// when jump execute. add speed to current speed
// height= initHeight + speed*t - 0.5*9.8*t*t
export default {
  schema: {
    enabled: { type: 'boolean', default: true },
    base: { type: 'number', default: 0.0 }


    
  },
  init () {
    this.speed = 0
  },
  add (value) {
    this.speed += value
  },
  getSpeed () {
    return this.speed
  },
  setSpeed (speed) {
    this.speed = speed
  },
  tick (time, deltaTime) {
    if (!this.data.enabled) return
    const seconds = deltaTime * 0.001
    this.el.object3D.position.y += this.speed * seconds
    const current = this.el.object3D.position.y
    if (current <= this.data.base) {
      this.el.object3D.position.y = this.data.base
      if (this.speed <= 0) {
        this.speed = 0
      }
    }
  }
}
