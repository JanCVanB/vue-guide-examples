Vue.component('child', {
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})

new Vue({
  el: '#example'
})
