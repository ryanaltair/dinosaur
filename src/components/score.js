export default {
  schema: {},
  init () {
    console.log('score init')
    this.score = 0
  },
  events: {
    score_up () {
      this.score++
      console.log('score', this.score)
      this.el.setAttribute('text', 'value', `score: ${this.score}`)
    },
    score_down () {
      this.score--
      console.log('score', this.score)
      this.el.setAttribute('text', 'value', `score: ${this.score}`)
    }
  }
}
