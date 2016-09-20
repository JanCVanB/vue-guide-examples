Vue.component('comp', {
  props: ['someProp'],
  template: '\
    <div>\
      <span>x = {{ someProp }} ({{ typeof someProp }})</span>\
      <br>
      <span>x + 2 = {{ someProp + 2 }}</span>\
    </div>
  '
})

new Vue({
  el: '#example-literal'
})

new Vue({
  el: '#example-dynamic'
})
