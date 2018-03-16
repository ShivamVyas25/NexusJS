'use strict';
var low = 0;
var high = 36;
var piano = new Nexus.Piano('#target',{
    'mode': 'button',  // 'button', 'toggle', or 'impulse'
    'lowNote':low,
    'highNote': high,
    'size':[0,200]
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
var x = document.querySelectorAll("div > div >span");
for (var i = 0; i < x.length; i++) {
    x[i].style.width = 100/((high-low)*(7/12))+"%";
    
}