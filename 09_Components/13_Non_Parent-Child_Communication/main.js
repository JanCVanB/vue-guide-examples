var bus = new Vue()

Vue.component('component-a', {
  template: '<button v-on:click="emitTheEvent">A</button>',
  methods: {
    emitTheEvent: function () {
      bus.$emit('id-selected', 1)
    }
  }
})

Vue.component('component-b', {
  template: '<span>A has{{ aWasClicked ? "" : " not"}} been clicked</span>',
  data: {
    aWasClicked: false
  }
})

// TODO:
// // in component B's created hook
// bus.$on('id-selected', function (id) {
//   // ...
// })

new Vue({
  el: '#example'
})
