Vue.component('button-counter', {
  template: '<button>{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  }
})

new Vue({
  el: '#counter-event-example',
  data: {
    total: 0
  },
  methods: {
    incrementTotal: function () {
      this.total += 1
    }
  }
})
