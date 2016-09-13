var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

function changeArray() {
  example1.items.push({ message: 'Baz' })
}
var delayUntilArrayChange = 500 // milliseconds
setTimeout(changeArray, delayUntilArrayChange)
