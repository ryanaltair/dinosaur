export default {
  schema: {
    target: { type: 'selector', default: '' },
    event: { type: 'string', default: 'jump' }
  },
  init () {
    this.el.canvas.addEventListener('pointerdown', () => {
      console.log('click emit', this.data.target, this.data.event)
      this.data.target?.emit(this.data.event)
    })
  },
  update () {
  }
}
