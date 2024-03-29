// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = timeBetweenSteps;

  this.step();


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
 this.$node= $('<span class="dancer"></span>');
 this.setPosition(top, left);

//  return dancer;
};

Dancer.prototype = {


//  $node: $('<span class="dancer"></span>'),

  step: function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    console.log("In Dancer");
    var temp = this;
    setTimeout(function() {
      temp.step();
    }, temp.timeBetweenSteps);
  },

  setPosition: function(top, left){
    /* Use css top and left properties to position our <span> tag
     * where it belongs on the page. See http://api.jquery.com/css/
     */

    var styleSettings = {
      top: top,
      left:left
    };
  
    this.$node.css(styleSettings);
  }
};
