var vm1 = new Vue({
  el: '#example1',
  data: {
    isActive: true,
    hasError: false
  }
})

var vm2 = new Vue({
  el: '#example2',
  data: {
    isActive: true,
    hasError: false
  }
})

var vm3 = new Vue({
  el: '#example3',
  data: {
    classObject: {
      active: true,
      'text-danger': false
    }
  }
})

var vm4 = new Vue({
  el: '#example4',
  data: {
    isActive: true,
    error: null
  },
  computed: {
    classObject: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal'
      }
    }
  }
})
