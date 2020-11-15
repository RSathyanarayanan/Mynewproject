(function (window) {
  var speakWord = "Hello";
  var hello = {
    speak: function (name) {
      console.log(speakWord + " " + name);
    }
  };
  window.hello = hello;
})(window);

