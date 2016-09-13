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
      }
    ]
  },
  methods: {
    getPagePath: function(chapter, chapterIndex, section, sectionIndex) {
      var chapterNumber = getSingleZeroPaddedString(chapterIndex + 1)
      var sectionNumber = getSingleZeroPaddedString(sectionIndex + 1)
      var chapterDirectory = chapter.title.replace(/[ \/]/g, '_')
      var sectionDirectory = section.title.replace(/[ \/]/g, '_')
      return (
        chapterNumber + '_' + chapterDirectory + '/' +
        sectionNumber + '_' + sectionDirectory + '/index.html'
      )
    }
  }
})
