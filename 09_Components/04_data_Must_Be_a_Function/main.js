var dataObject = { counter: 0 }

var simpleCounterWithDataObject = {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  // data is technically a function, so Vue won't
  // complain, but we return the same object
  // reference for each component instance
  data: function () {
    return dataObject
  }
}

new Vue({
  el: '#example-data-object',
  components: {
    'simple-counter': simpleCounterWithDataObject
  }
})

var simpleCounterWithDataFunction = {
  template: '<button v-on:click="counter += 1">{{ counter }}</button>',
  data: function () {
    return {
      counter: 0
    }
  }
}

new Vue({
  el: '#example-data-function',
  components: {
    'simple-counter': simpleCounterWithDataFunction
  }
})
