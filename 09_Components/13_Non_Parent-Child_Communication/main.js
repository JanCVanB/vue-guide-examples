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
  data: function() {
    return {
      aWasClicked: false
    }
  },
  created: function() {
    component = this
    bus.$on('id-selected', id => {
      component.aWasClicked = true
    })
  }
})

new Vue({
  el: '#example'
})
