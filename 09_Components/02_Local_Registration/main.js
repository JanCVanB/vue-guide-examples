var Child = {
  template: '<div>A custom component!</div>'
}

new Vue({
  el: '#example',
  components: {
    // <my-component> will only be available in parent's template
    'my-component': Child
  }
})
