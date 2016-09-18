var Example1ChildComponent = {
  template: '<div></div>',
  data: function () {
    return {
      message: "This doesn't work!"
    }
  }
}

var Example1ParentComponent = {
  template: '<child-component>{{ message }}</child-component>',
  components: {
    'child-component': Example1ChildComponent
  }
}

var Example2ChildComponent = {
  template: "<div>This doesn't work!</div>",
  data: function () {
    return {
      someChildProperty: true
    }
  }
}

var Example2ParentComponent = {
  // does NOT work
  template: '<child-component v-show="someChildProperty">Child</child-component>',
  components: {
    'child-component': Example2ChildComponent
  }
}

var Example3ChildComponent = {
  // this does work, because we are in the right scope
  template: '<div v-show="someChildProperty">This works!</div>',
  data: function () {
    return {
      someChildProperty: true
    }
  }
}

var Example3ParentComponent = {
  template: '<child-component></child-component>',
  components: {
    'child-component': Example3ChildComponent
  }
}

new Vue({
  el: '#example-1',
  components: {
    'parent-component': Example1ParentComponent
  }
})

new Vue({
  el: '#example-2',
  components: {
    'parent-component': Example2ParentComponent
  }
})

new Vue({
  el: '#example-3',
  components: {
    'parent-component': Example3ParentComponent
  }
})
