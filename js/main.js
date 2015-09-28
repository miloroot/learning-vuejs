$(function() {

  var personal = {
    likes: "to drink a good drink and code, at the same time!",
    disslikes: "when the laptop runs out of power, so I cant code."
  }

  new Vue({
    el: ".wrapper",
    data: {
      info: {
        name: "Milo",
        age: 27,
        occupation: "web developer"
      },
      personal: personal
    }
  });

})
