export default {
  schema: {
    speed: { type: 'number', default: 0.05 },
    gravity: { type: 'number', default: 0.1 },
    height: { type: 'number', default: 1.5 }
  },
  init () {
    console.log('jump init', this.el)
    this.touchingBase = true
  },
  events: {
    jump () {
      console.log('jump', this.data.speed)
      if (!this.jumping && this.touchingBase) {
        this.baseLine = this.el.object3D.position.y
      }
      this.touchingBase = false
      this.jumpDistance = 0
      this.jumpStart = this.el.object3D.position.y
      this.jumping = true
    }
  },
  tick () {
    const current = this.el.object3D.position.y
    if (this.jumping) {
      this.jumpDistance += this.data.speed
      const maxHeight = this.jumpStart + this.data.height
      if (current < maxHeight) {
        this.el.object3D.position.y = this.jumpStart + this.jumpDistance
      } else {
        console.log('stop jumping')
        this.jumping = false
      }
      return
    }
    if (current > this.baseLine) {
      this.el.object3D.position.y -= this.data.gravity
      if (this.el.object3D.position.y <= this.baseLine) {
        this.el.object3D.position.y = this.baseLine
      }
    } else {
      this.touchingBase = true
    }
  }
}
