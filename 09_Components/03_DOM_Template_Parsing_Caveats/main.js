Vue.component('my-row', {
  template: '<tr>This row works!</tr>'
})

new Vue({
  el: '#example-bad'
})

new Vue({
  el: '#example-good'
})
