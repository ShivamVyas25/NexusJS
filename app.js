'use strict';
var piano = new Nexus.Piano('#target',{
    'mode': 'button',  // 'button', 'toggle', or 'impulse'
    'lowNote': 0,
    'highNote': 36
});
var size = 0;

var screenSize = document.documentElement.clientWidth; 
if(screenSize>1000){

size = 300;
}
else if(screenSize>700)
{
size = 225;
}
else if(screenSize>400){
size = 150;
}
else{
    size = 75;
}

piano.resize(screenSize/1.05,size);

//listener
piano.on('change',function(v) {
  //console.log(v);
});

var index = 0;
//keyboard controls
document.addEventListener('keydown', function (e) {
    var key = e.which || e.keyCode;
//    console.log("key",key);
    
    if (key === 39) { 
        if(index<36){
            index++;
        }
  //      console.log("index",index);
   
    }
    else if (key === 37) { 
        if(index>0){
            index--;
        }
        
    }
    else if((key === 32)){
        piano.toggleIndex(index,true);
    }
    else{

    }

});
document.addEventListener('keyup', function (e) {
    var key = e.which || e.keyCode;
    
     if((key === 32)){
        piano.toggleIndex(index,false);
    }
    
});


// Find matches
var mql = window.matchMedia("(orientation: portrait)");
// If there are matches, we're in portrait
if(mql.matches) {  
	// Portrait orientation
     alert("Please use Landscape! For better view");

} else {


}

// Add a media query change listener
mql.addListener(function(m) {
    screenSize = document.documentElement.clientWidth;
    piano.resize(screenSize/1.05,size);

    if(m.matches) {
        alert("Please use Landscape! For better view");
        
    }
	else {
		// Changed to landscape
	}
});


 