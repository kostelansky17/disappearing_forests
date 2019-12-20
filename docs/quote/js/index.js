'use strict';

var words = document.getElementsByTagName('span');
var cite = document.getElementsByTagName('cite');

var animate = function animate() {
  var maxDelay = 0;
  var maxDuration = 0;

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var duration = word.dataset.duration;
    var delay = word.dataset.delay;
    var blur = word.dataset.blur;

    maxDelay = Math.max(delay, maxDelay);
    maxDuration = Math.max(duration, maxDuration);

    TweenLite.set(word, {
      'webkitFilter': 'blur(' + blur + 'px)'
    });
    TweenLite.set(word, {
      className: "+=animate",
      transition: 'all ' + duration + 's ease-in ' + delay + 's'
    });
  }

  TweenLite.set(cite, {
    className: "+=animate",
    transition: 'all ' + maxDuration + 's ease-in ' + maxDelay + 's'
  });

  TweenLite.delayedCall(maxDuration + maxDelay, function () {
    var baseDelay = 3;
    TweenLite.set(words, { className: "-=animate", delay: baseDelay });
    TweenLite.set(cite, { className: "-=animate", delay: baseDelay });
    TweenLite.delayedCall(baseDelay + maxDuration * 2, animate);
  });
};

animate();