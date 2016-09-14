new Vue({
  el: '#example-text',
  data: {
    message: ''
  }
})

new Vue({
  el: '#example-multiline-text',
  data: {
    message: ''
  }
})

new Vue({
  el: '#example-checkbox',
  data: {
    checked: false
  }
})

new Vue({
  el: '#example-checkboxes',
  data: {
    checkedNames: []
  }
})

new Vue({
  el: '#example-radio',
  data: {
    picked: ''
  }
})

new Vue({
  el: '#example-select',
  data: {
    selected: ''
  }
})

new Vue({
  el: '#example-multiselect',
  data: {
    selected: ''
  }
})

new Vue({
  el: '#example-dynamic-options',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
