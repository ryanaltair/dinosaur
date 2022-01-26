export default {
  schema: {},
  init () {
    this.score = 0
  },
  events: {
    score_up () {
      this.score++
      this.el.setAttribute('text', 'value', `score: ${this.score}`)
    },
    score_down () {
      this.score--
      this.el.setAttribute('text', 'value', `score: ${this.score}`)
    }
  }
}
