'use strict'
Nexus.context = Tone.context; 


// Create a sound source using Tone.js
var synth = new Tone.Oscillator(0,"triangle").start();
var volume = new Tone.Volume(-Infinity);
var delayGen = new Tone.FeedbackDelay(0.2,0.7);
synth.chain( delayGen, volume, Tone.Master );


    
	var level = -20;
	volume.volume.rampTo(level,3)


// Create a sequence of note values
var sequence = new Nexus.Sequence([2,4,6,8,9,11,13]);

// Create a repeating pulse
// Change notes on each beat
var beat = new Nexus.Interval(100,function(e) {
	synth.frequency.value = Nexus.note( sequence.next(), -1 );
});

beat.start();


var piano = new Nexus.Piano('#piano',{
    'mode': 'button'  // 'button', 'toggle', or 'impulse'
 });
  
 var oscilloscope = new Nexus.Oscilloscope('#oscilloscope',{
});
oscilloscope.connect( Tone.Master);
var spectrogram = new Nexus.Spectrogram('#spectrogram',{
});
spectrogram.connect( Tone.Master);

var oscilloscopeCanvas =document.querySelector("#oscilloscope >canvas");

var tab = document.querySelector('.tab');
tab.style.visibility = "hidden";
function makeResponsive() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    console.log("hi"+w);
if(w<=768){
    tab.style.visibility = "visible";
    piano.setRange(0,24);
}
else{
    tab.style.visibility = "hidden";
    piano.setRange(24,60);
}    
    piano.resize(w,200);
    spectrogram.resize(w/2,150);
   // oscilloscopeCanvas.width = 2*w*0.25 ;
    oscilloscope.resize(w/2,150);

   };
 makeResponsive();
 

 function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}