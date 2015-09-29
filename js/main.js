$(function() {

  // just adding a log to fix issues with github
  console.log("Git commands work now without sudo?")

  // DOM caching
  var $appendhere = $( '.appendhere' );

  var personal = {
    likes: "to drink a good drink and code, at the same time!",
    disslikes: "when the laptop runs out of power, so I cant code."
  }

  var friends = [
    { name: "Jasper" },
    { name: "Jocke" },
    { name: "Patricio" }
  ]

  console.log( "friends: ", friends );

  new Vue({
    el: ".wrapper",
    data: {
      info: {
        name: "Milo",
        age: 27,
        occupation: "web developer"
      },
      personal: personal,
      friends: friends,
      dirtymessage: "You clicked me, and it was hard!"
    },
    methods: {
      logit: function() {
        $appendhere.append( this.dirtymessage );
      }
    }
  });

})
