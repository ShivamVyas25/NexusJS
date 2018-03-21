 'use strict';
 /**************************************** */
 Nexus.context = Tone.context; 
// Create interfaces
var power = new Nexus.Toggle("#power");
var delay = new Nexus.Slider("#echo");

// Create a sound source using Tone.js
var synth = new Tone.Oscillator(0,"triangle").start();
var volume = new Tone.Volume(-Infinity);
var delayGen = new Tone.FeedbackDelay(0.2,0.7);
synth.chain( delayGen, volume, Tone.Master );

// Customize interface &
// Add event listeners
delay.min = 0;
delay.max = 0.7;
delay.on('change',function(value) {
	delayGen.wet.value = value;
})
delay.value = 0.4;

power.on('change',function(v) {
	volume.volume.cancelScheduledValues();
	var level = v ? -20 : -Infinity;
	volume.volume.rampTo(level,3)
})

// Create a sequence of note values
var sequence = new Nexus.Sequence([2,4,6,8,9,11,13]);

// Create a repeating pulse
// Change notes on each beat
var beat = new Nexus.Interval(100,function(e) {
	synth.frequency.value = Nexus.note( sequence.next(), -1 );
});

beat.start();


/******************* */
  var envelope = new Nexus.Envelope('#envelope',{
    'points': [
      {
        x: 0.1,
        y: 0.4
      },
      {
        x: 0.35,
        y: 0.6
      },
      {
        x: 0.65,
        y: 0.2
      },
      {
        x: 0.9,
        y: 0.4
      },
    ]
  });

var multislider = new Nexus.Multislider('#multislider',{
  'numberOfSliders': 5,
  'min': 0,
  'max': 1,
  'step': 0,
  'values': [0.7,0.7,0.7,0.7,0.7]
 });

var piano = new Nexus.Piano('#piano',{
  'mode': 'button',  // 'button', 'toggle', or 'impulse'
  'lowNote': 24,
  'highNote': 60
});

var select = new Nexus.Select('#select',{
  'options': ['default','options']
});
var selectDiv = document.querySelector('#select >select');

var sequencer = new Nexus.Sequencer('#sequencer',{
  'mode': 'toggle',
  'rows': 5,
  'columns': 10
 });

 var textbutton = new Nexus.TextButton('#textbutton',{
  'state': false,
  'text': 'Play',
  'alternate': false
});

var meter = new Nexus.Meter('#meter',{
});
meter.connect( Tone.Master,2);

var oscilloscope = new Nexus.Oscilloscope('#oscilloscope',{
})
oscilloscope.connect( Tone.Master);
var spectrogram = new Nexus.Spectrogram('#spectrogram',{
})
spectrogram.connect( Tone.Master);

function makeResponsive() {
     var w = window.innerWidth;
     var h = window.innerHeight;
     envelope.resize(w/2,200);
     multislider.resize(w/2,200);
     piano.resize(w/2,200);
 
     selectDiv.style.width = w/2+"px";
     selectDiv.style.height = "50px";
     select.resize(w/2,150);
  sequencer.resize(w/2,200);  
  textbutton.resize(w/2,150);
  meter.resize(w/2,300);
  spectrogram.resize(w/2,300);
  oscilloscope.resize(w/2,300);

    }
  makeResponsive();
