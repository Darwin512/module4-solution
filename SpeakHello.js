(function(window) {
    const helloSpeaker = name => console.log("Hello " + name);
    window.helloSpeaker = helloSpeaker;
})(window);
