'use strict';
var piano = new Nexus.Piano('#target',{
    'mode': 'button',  // 'button', 'toggle', or 'impulse'
    'lowNote': 0,
    'highNote': 36,
    'size':[1000,200]
});
document.onkeydown = function(e) {
    if(e.keyCode === 13) { // The Enter/Return key
        console.log("enter");
        var index = document.activeElement.id;
        piano.toggleKey(index,true)
    }
  };
  document.onkeyup = function(e) {
    if(e.keyCode === 13) { // The Enter/Return key
        console.log("enter");
        var index = document.activeElement.id;
        piano.toggleKey(index,false)
    }
  };
