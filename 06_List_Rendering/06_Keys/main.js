var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { _uid: '88f869d', message: 'Foo' },
      { _uid: '7496c10', message: 'Bar' }
    ],
  }
})

function changeArray() {
  example1.items = [
    { _uid: '1234567', message: 'Baz' },
    { _uid: '88f869d', message: 'Foo' }
  ]
}
var delayUntilArrayChange = 500 // milliseconds
setTimeout(changeArray, delayUntilArrayChange)
