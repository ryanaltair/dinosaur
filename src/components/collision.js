export default {
  schema: {
    targets: { type: 'selectorAll', default: '' },
    event: { type: 'string', default: 'collision' },
    listeners: { type: 'selectorAll', default: '' }
  },
  init () {},
  update () {
    console.log('collision init', this.data)
  },
  tick () {
    const targets = this.data.targets ?? []
    const listeners = this.data.listeners ?? [this.el]
    const playerPos = this.el.object3D.position
    for (const target of [...targets]) {
      const position = target.object3D.position
      const distance = playerPos.distanceTo(position)
      if (distance < 0.5) {
        for(const listener of listeners){
          listener.emit(this.data.event)
        }
      }
    }
  }
}
