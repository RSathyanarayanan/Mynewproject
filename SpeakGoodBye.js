(function (window) {
  var speakWord = "Good Bye";
  var bye = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };
  window.bye = bye;
})(window);
