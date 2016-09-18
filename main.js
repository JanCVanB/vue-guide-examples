function getSingleZeroPaddedString(number) {
  if (number < 10) {
    return '0' + number
  }
  return number.toString()
}

new Vue({
  el: '#app',
  data: {
    chapters: [
      {
        title: 'Getting Started',
        sections: [
          { title: 'Hello World' },
          { title: 'Two-way Binding' },
          { title: 'Render a List' },
          { title: 'Handle User Input' },
          { title: 'All Together Now' }
        ]
      },
      {
        title: 'Overview',
        sections: [
          { title: 'Data Driven View' },
          { title: 'Directive' }
        ]
      },
      {
        title: 'Computed Properties and Watchers',
        sections: [
          { title: 'Basic Examples' },
          { title: 'Repetitive Watched Property' },
          { title: 'Better Computed Property' },
          { title: 'Computed Setter' },
          { title: 'Watchers' }
        ]
      },
      {
        title: 'Class and Style Bindings',
        sections: [
          { title: 'Class Object Syntax' },
          { title: 'Class Array Syntax' },
          { title: 'Style Object Syntax' },
          { title: 'Style Array Syntax' }
        ]
      },
      {
        title: 'Conditional Rendering',
        sections: [
          { title: 'v-if' },
          { title: 'Template v-if' },
          { title: 'v-show' },
          { title: 'v-else' }
        ]
      },
      {
        title: 'List Rendering',
        sections: [
          { title: 'Simple v-for' },
          { title: 'Indexed v-for' },
          { title: 'Template v-for' },
          { title: 'Mutation Methods' },
          { title: 'Replacing an Array' },
          { title: 'Keys' },
          { title: 'Object v-for' },
          { title: 'Range v-for' },
          { title: 'Displaying Filtered/Sorted Results' }
        ]
      },
      {
        title: 'Methods and Event Handling',
        sections: [
          { title: 'Listening to Events' },
          { title: 'Method Event Handlers' },
          { title: 'Methods in Inline Handlers' }
        ]
      },
      {
        title: 'Form Input Bindings',
        sections: [
          { title: 'Basic Usage' },
          { title: 'Value Bindings' }
        ]
      },
      {
        title: 'Components',
        sections: [
          { title: 'Global Registration' },
          { title: 'Local Registration' },
          { title: 'DOM Template Parsing Caveats' },
          { title: '`data` Must Be a Function' },
          { title: 'Passing Data with Props' },
          { title: 'camelCase vs. kebab-case' },
          { title: 'Dynamic Props' },
          { title: 'Literal vs. Dynamic' },
          { title: 'Prop Validation' }
        ]
      }
    ]
  },
  methods: {
    getPagePath: function(chapter, chapterIndex, section, sectionIndex) {
      var chapterNumber = getSingleZeroPaddedString(chapterIndex + 1)
      var sectionNumber = getSingleZeroPaddedString(sectionIndex + 1)
      var chapterDirectory = (
        chapter.title.replace(/[`\.]/g, '').replace(/[ \/]/g, '_')
      )
      var sectionDirectory = (
        section.title.replace(/[`\.]/g, '').replace(/[ \/]/g, '_')
      )
      return (
        chapterNumber + '_' + chapterDirectory + '/' +
        sectionNumber + '_' + sectionDirectory + '/index.html'
      )
    }
  }
})
