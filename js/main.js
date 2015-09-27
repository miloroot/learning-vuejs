$(function() {

  new Vue({
    el: '.wrapper',
    data: {
      info: { name: "", age: "", occupation: "" }
    },
    ready: function() {
      this.fetchInfo();
    },
    methods: {
      fetchInfo: function() {
        
      }
    }
  })

})
