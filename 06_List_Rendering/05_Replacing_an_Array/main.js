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
  example1.items = example1.items.filter(function (item) {
    return item.message.match(/Foo/)
  })
}
var delayUntilArrayChange = 500 // milliseconds
setTimeout(changeArray, delayUntilArrayChange)
