export default {
  schema: { enabled: { type: 'boolean', default: true } },
  init () {
  },
  update () {
    setInterval(() => {
      if (!this.data.enabled) return
      const els = this.el.querySelectorAll('a-sphere')
      for (const el of [...els]) {
        el.emit('shoot')
      }
    }, 3000)
  }
}
