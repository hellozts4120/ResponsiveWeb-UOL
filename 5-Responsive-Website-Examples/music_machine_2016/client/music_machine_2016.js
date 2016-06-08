
//This code is for everyone. Could go in common.js
MusicMachine = new Mongo.Collection("musicMachine");


if (Meteor.isClient) {

/// routing

Router.configure({
  layoutTemplate: 'ApplicationLayout'

});

Router.route('/', function () {
  this.render('welcome', {
    to:"main"
  }); 
});

Router.route('/playground', function () {
  this.render('navbar', {
    to:"navbar"
  }); 
  this.render('playground', {
    to:"main"
  }); 

});

Router.route('/help', function () {
  this.render('navbar', {
    to:"navbar"
  }); 
  this.render('help', {
    to:"main"
  }); 

});

  Meteor.startup(function () {

});


  Template.playground.helpers({

    "startdac": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.start==1) {
          playAll();

        }
      }

      return Session.get('startdac');
    },

    "drums": function () {

      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.drums==1) {
          playDrums();

        } else if (starter.drums==0) {

          stopDrums();

        }
      }

      return Session.get('drums');
    },

    "bass": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassline==1) {
          playBass();

        } else if (starter.bassline==0) {

          stopBass();

        }
      }
      return Session.get('bass');
    },

    "arp": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.arp==1) {
          playArp();

        } else if (starter.arp==0) {

          stopArp();

        }
      }
      return Session.get('arp');
    },

    "cymbal": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.cymbal==1) {
          playCymbal();

        } else if (starter.cymbal==0) {

          stopCymbal();

        }
      }
      return Session.get('cymbal');
    },

    "bassdrum1": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassdrum1==1) {
          playBassdrum1();

        } else if (starter.bassdrum1==0) {

          stopBassdrum1();

        }
      }
      return Session.get('bassdrum1');
    },

    "hihat2": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.hihat2==1) {
          playHihat2();

        } else if (starter.hihat2==0) {

          stopHihat2();

        }
      }
      return Session.get('hihat2');
    },
    
    "snaredrum1": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.snaredrum1==1) {
          playSnaredrum1();

        } else if (starter.snaredrum1==0) {

          stopSnaredrum1();

        }
      }
      return Session.get('cymbal');
    },
    
    "bassline24bit": function () {
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.bassline24bit==1) {
          playBassline24bit();

        } else if (starter.bassline24bit==0) {

          stopBassline24bit();

        }
      }
      return Session.get('bassline24bit');
    },

   

    //don't forget the commas between each function
//the last one doesn't have to have one!


  "sliderVal1":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider1').data('uiSlider').value(slider.slide);
        setSpeed(slider.slide/50);
        return slider.slide;
      }
    },

  "sliderVal2":  function() { 
      var slider = MusicMachine.findOne();
      console.log("this slider2 value: "+slider.slide2);
      if (slider) { 
          Template.instance().$('#slider2').data('uiSlider').value(slider.slide2);
          setSpeed2(slider.slide2/50);
          return slider.slide2;
        }
      },

  "sliderVal3":  function() { 
      var slider = MusicMachine.findOne();
      console.log("this slider3 value: "+slider.slide3);
      if (slider) { 
          Template.instance().$('#slider3').data('uiSlider').value(slider.slide3);
          setSpeed3(slider.slide3/50);
          return slider.slide3;
        }
      },

  "sliderVal4":  function() { 
      var slider = MusicMachine.findOne();
      console.log("this slider4 value: "+slider.slide4);
      if (slider) { 
          Template.instance().$('#slider4').data('uiSlider').value(slider.slide4);
          setSpeed4(slider.slide4/50);
          return slider.slide4;
        }
      },

  "sliderVal5":  function() { 
      var slider = MusicMachine.findOne();
      console.log("this slider5 value: "+slider.slide5);
      if (slider) { 
          Template.instance().$('#slider5').data('uiSlider').value(slider.slide5);
          setSpeed5(slider.slide5/50);
          return slider.slide5;
        }
      },

  "sliderVal6":  function() { 
      var slider = MusicMachine.findOne();
      console.log("this slider6 value: "+slider.slide6);
      if (slider) { 
          Template.instance().$('#slider6').data('uiSlider').value(slider.slide6);
          setSpeed6(slider.slide6/50);
          return slider.slide6;
        }
      },

  "sliderVal7":  function() { 
      var slider = MusicMachine.findOne();
      console.log("this slider7 value: "+slider.slide7);
      if (slider) { 
          Template.instance().$('#slider7').data('uiSlider').value(slider.slide7);
          setSpeed7(slider.slide7/50);
          return slider.slide7;
        }
      },

  "sliderVal8":  function() { 
      var slider = MusicMachine.findOne();
      console.log("this slider8 value: "+slider.slide8);
      if (slider) { 
          Template.instance().$('#slider8').data('uiSlider').value(slider.slide8);
          setSpeed8(slider.slide8/50);
          return slider.slide8;
        }
      }

  });


  Template.playground.events({

     "click button.startButton": function () {
      Session.set('startdac', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {start: 1}});
    },

     "click button.myButton1": function () {
      Session.set('drums', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 1}});

    },
      "click button.myButton2": function () {
      Session.set('drums', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {drums: 0}});
    },

      "click button.myButton3": function () {
      Session.set('bass', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 1}});

    },

      "click button.myButton4": function () {
      Session.set('bass', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline: 0}});

    },
      "click button.myButton5": function () {
      Session.set('arp', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 1}});

    },

      "click button.myButton6": function () {
      Session.set('arp', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {arp: 0}});

    },

      "click button.myButton7": function () {
      Session.set('cymbal', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {cymbal: 1}});

    },

      "click button.myButton8": function () {
      Session.set('cymbal', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {cymbal: 0}});

    },

        "click button.myButton9": function () {
      Session.set('bassdrum1', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassdrum1: 1}});

    },

      "click button.myButton10": function () {
      Session.set('bassdrum1', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassdrum1: 0}});

    },

    "click button.myButton11": function () {
      Session.set('hihat2', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {hihat2: 1}});

    },

      "click button.myButton12": function () {
      Session.set('hihat2', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {hihat2: 0}});

    },
    "click button.myButton13": function () {
      Session.set('snaredrum1', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {snaredrum1: 1}});

    },

      "click button.myButton14": function () {
      Session.set('snaredrum1', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {snaredrum1: 0}});

    },
    "click button.myButton15": function () {
      Session.set('bassline24bit', 1);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline24bit: 1}});

    },

      "click button.myButton16": function () {
      Session.set('bassline24bit', 0);
      var val = MusicMachine.findOne({});
      MusicMachine.update({ _id: val._id }, {$set: {bassline24bit: 0}});

    }


  });

  Template.playground.onRendered(function() {
    $('h2').hide();
    var handler = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide: ui.value}});
    }, 50, { leading: false });

    var handler2 = _.throttle(function(event, ui) {
        var val2 = MusicMachine.findOne({});
      console.log("slider2 value: "+val2.slide2);
        MusicMachine.update({ _id: val2._id }, {$set: {slide2: ui.value}});        
    }, 50, { leading: false });
    
    var handler3 = _.throttle(function(event, ui) {
        var val3 = MusicMachine.findOne({});
      console.log("slider3 value: "+val3.slide3);
        MusicMachine.update({ _id: val3._id }, {$set: {slide3: ui.value}});        
    }, 50, { leading: false });
    
    var handler4 = _.throttle(function(event, ui) {
        var val4 = MusicMachine.findOne({});
      console.log("slider4 value: "+val4.slide4);
        MusicMachine.update({ _id: val4._id }, {$set: {slide4: ui.value}});        
    }, 50, { leading: false });
    
    var handler5 = _.throttle(function(event, ui) {
        var val5 = MusicMachine.findOne({});
      console.log("slider5 value: "+val5.slide5);
        MusicMachine.update({ _id: val5._id }, {$set: {slide5: ui.value}});        
    }, 50, { leading: false });
    
    var handler6 = _.throttle(function(event, ui) {
        var val6 = MusicMachine.findOne({});
      console.log("slider6 value: "+val6.slide6);
        MusicMachine.update({ _id: val6._id }, {$set: {slide6: ui.value}});        
    }, 50, { leading: false });
    
    var handler7 = _.throttle(function(event, ui) {
        var val7 = MusicMachine.findOne({});
      console.log("slider7 value: "+val7.slide7);
        MusicMachine.update({ _id: val7._id }, {$set: {slide7: ui.value}});        
    }, 50, { leading: false });
    
    var handler8 = _.throttle(function(event, ui) {
        var val8 = MusicMachine.findOne({});
      console.log("slider8 value: "+val8.slide8);
        MusicMachine.update({ _id: val8._id }, {$set: {slide8: ui.value}});        
    }, 50, { leading: false });
    
    if (!this.$('#slider1').data('uiSlider')) {
        $("#slider1").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }

    if (!this.$('#slider2').data('uiSlider')) {
        $("#slider2").slider({
            slide: handler2,
            min: 0,
            max: 100,
            value: 10
        });
    }

    if (!this.$('#slider3').data('uiSlider')) {
        $("#slider3").slider({
            slide: handler3,
            min: 0,
            max: 100,
            value: 10
        });
    }

    if (!this.$('#slider4').data('uiSlider')) {
        $("#slider4").slider({
            slide: handler4,
            min: 0,
            max: 100,
            value: 10
        });
    }

    if (!this.$('#slider5').data('uiSlider')) {
        $("#slider5").slider({
            slide: handler5,
            min: 0,
            max: 100,
            value: 10
        });
    }

    if (!this.$('#slider6').data('uiSlider')) {
        $("#slider6").slider({
            slide: handler6,
            min: 0,
            max: 100,
            value: 10
        });
    }

    if (!this.$('#slider7').data('uiSlider')) {
        $("#slider7").slider({
            slide: handler7,
            min: 0,
            max: 100,
            value: 10
        });
    }

  
    if (!this.$('#slider8').data('uiSlider')) {
        $("#slider8").slider({
            slide: handler8,
            min: 0,
            max: 100,
            value: 10
        });
    }

  });
}

if (Meteor.isServer) {
//      MusicMachine.remove({});
      if (MusicMachine.find().count() === 0) {
      MusicMachine.insert({slide: 50});

    }

    if (MusicMachine.find().count()!==0){
        var slider = MusicMachine.findOne({});
        MusicMachine.update({ _id: slider._id }, {$set: {slide: 50}});
        MusicMachine.update({_id: slider._id}, {$set: {slide2: 50}});
        MusicMachine.update({_id: slider._id}, {$set: {slide3: 50}});
        MusicMachine.update({_id: slider._id}, {$set: {slide4: 50}});
        MusicMachine.update({_id: slider._id}, {$set: {slide5: 50}});
        MusicMachine.update({_id: slider._id}, {$set: {slide6: 50}});
        MusicMachine.update({_id: slider._id}, {$set: {slide7: 50}});
        MusicMachine.update({_id: slider._id}, {$set: {slide8: 50}});
        MusicMachine.update({ _id: slider._id }, {$set: {startdac: 1}});
        MusicMachine.update({_id: slider._id}, {$set: {bassline24bit: 1}});
        MusicMachine.update({_id: slider._id}, {$set: {hihat2: 1}});
        MusicMachine.update({_id: slider._id}, {$set: {snaredrum1: 1}});
        MusicMachine.update({_id: slider._id}, {$set: {bassdrum1: 1}});
        MusicMachine.update({_id: slider._id}, {$set: {cymbal: 1}});

        }

}