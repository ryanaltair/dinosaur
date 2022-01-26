export default {
  schema: { enabled: { type: 'boolean', default: true } },
  init () {
    console.log('test init')
  },
  update () {
    setInterval(() => {
      if (!this.data.enabled) return
      const el = this.el.querySelector('a-sphere')
      el.emit('shoot')
    }, 3000)
  }
}
