self.addEventListener('message', function(e) {
  this.setTimeout(function() { self.postMessage(e.data); }, 3000);

}, false);