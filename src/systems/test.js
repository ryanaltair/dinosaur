export default {
  schema: { enabled: { type: 'boolean', default: true } },
  init () {
    console.log('test init')
  },
  update () {
    setInterval(() => {
      if (!this.data.enabled) return
      const el = this.el.querySelector('a-sphere')
      //   console.log('emit jump')
    //   el.emit('jump')
      el.emit('shoot')
    }, 3000)
  }
}
