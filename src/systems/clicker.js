export default {
  schema: {
    target: { type: 'selector', default: '' },
    event: { type: 'string', default: 'jump' }
  },
  init () {
    this.el.canvas.addEventListener('pointerdown', () => {
      this.data.target?.emit(this.data.event)
    })
  },
  update () {
  }
}
