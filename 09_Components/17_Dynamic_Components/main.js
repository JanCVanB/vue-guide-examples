var vm1 = new Vue({
  el: '#example-1',
  data: {
    currentView: 'home'
  },
  components: {
    'home': {
      template: '<span>Home</span>'
    },
    'posts': {
      template: '<span>Posts</span>'
    },
    'archive': {
      template: '<span>Archive</span>'
    }
  }
})

var Home = {
  template: '<span>Home</span>'
}

var vm2 = new Vue({
  el: '#example-2',
  data: {
    currentView: Home
  }
})

var vm3 = new Vue({
  el: '#example-3',
  data: {
    currentView: Home
  }
})
