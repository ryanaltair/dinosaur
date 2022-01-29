export default {
  schema: { enabled: { type: 'boolean', default: true } },
  init () {
    this.running = false
    this.el.addEventListener('jump', () => {
      console.log('start')
      if (this.running) {
        this.jumpShoot()
        return
      }
      this.startGame()
    })
    this.el.addEventListener('failed', () => {
      console.log('failed')
      if (!this.running) return
      this.endGame()
    })
  },
  update () {
  },
  shoot (el) {
    if (el) {
      el.emit('shoot')
    }
  },
  jumpShoot () {
    if (!this.data.enabled) return
    if (!this.running) return
    const els = this.el.querySelectorAll('.whenJump')
    const elsToShoot = [...els].filter(el => !el.states.includes('shooting'))
    this.shoot(elsToShoot.pop())
  },
  intervalShoot () {
    if (!this.data.enabled) return
    if (!this.running) return
    const el = this.el.querySelector('#interval')
    this.shoot(el)
    setTimeout(() => {
      this.intervalShoot()
    }, this.timeInterval)
  },
  startGame () {
    this.toggleHints(false)
    this.running = true
    this.timeInterval = 3000
    this.intervalShoot()
  },
  endGame () {
    this.toggleHints(true)
    this.running = false
  },
  toggleHints (visible) {
    const board = this.el.querySelector('#hint')
    board.setAttribute('visible', visible)
  }
}
