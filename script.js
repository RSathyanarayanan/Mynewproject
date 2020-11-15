(function (window) {
  var names = ["Sathya", "John", "Jen", "Paulson", "Paul", "Italy", "Legend", "Peterson", "Keerthy", "Jithu"];

  for (var i in names) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === 'j') {
      bye.speak(names[i]);
    } else {
      hello.speak(names[i]);
    }
  }
})(window);

