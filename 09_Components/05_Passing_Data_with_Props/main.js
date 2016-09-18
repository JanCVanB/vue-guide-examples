Vue.component('child', {
  // declare the props
  props: ['message'],
  // just like data, the prop can be used inside templates
  // and is also made available in the vm as this.message
  template: '<span>{{ message }}</span>'
})

new Vue({
  el: '#example'
})
