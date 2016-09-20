Vue.component('child', {
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})

new Vue({
  el: '#example',
  data: {
    parentMsg: 'Message from parent'
  }
})
