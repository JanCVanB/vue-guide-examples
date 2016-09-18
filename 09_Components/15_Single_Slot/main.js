var MyComponent = {
  template: "\
    <div>\
      <h2>I'm the child title</h2>\
      <slot>\
        This will only be displayed if there is no content\
        to be distributed.\
      </slot>\
    </div>\
  "
}

var ParentComponent = {
  template: "\
    <div>\
      <h1>I'm the parent title</h1>\
      <my-component>\
        <p>This is some original content</p>\
        <p>This is some more original content</p>\
      </my-component>\
    </div>\
  ",
  components: {
    'my-component': MyComponent
  }
}

new Vue({
  el: '#example',
  components: {
    'parent-component': ParentComponent
  }
})
