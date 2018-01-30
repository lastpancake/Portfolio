var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init_island() {
  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  var comp=AdobeAn.getComposition("467D5132E8783342B0065161FB9B3926");
  var lib=comp.getLibrary();
  var loader = new createjs.LoadQueue(false);
  loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
  loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
  var lib=comp.getLibrary();
  loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
  var images=comp.getImages();
  if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt,comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib=comp.getLibrary();
  var ss=comp.getSpriteSheet();
  var queue = evt.target;
  var ssMetadata = lib.ssMetadata;
  for(i=0; i<ssMetadata.length; i++) {
    ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
  }
  exportRoot = new lib.explodingIsland();
  stage = new lib.Stage(canvas);
  stage.addChild(exportRoot);
  //Registers the "tick" event listener.
  fnStartAnimation = function() {
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);
  }
  //Code to support hidpi screens and responsive scaling.
  function makeResponsive(isResp, respDim, isScale, scaleType) {
    var lastW, lastH, lastS=1;
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width, h = lib.properties.height;
      var iw = window.innerWidth, ih=window.innerHeight;
      var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
      if(isResp) {
        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
          sRatio = lastS;
        }
        else if(!isScale) {
          if(iw<w || ih<h)
            sRatio = Math.min(xRatio, yRatio);
        }
        else if(scaleType==1) {
          sRatio = Math.min(xRatio, yRatio);
        }
        else if(scaleType==2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      canvas.width = w*pRatio*sRatio;
      canvas.height = h*pRatio*sRatio;
      canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
      canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
      stage.scaleX = pRatio*sRatio;
      stage.scaleY = pRatio*sRatio;
      lastW = iw; lastH = ih; lastS = sRatio;
    }
  }
  makeResponsive(false,'both',false,1);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}


(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,132,68);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Plane = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AkphWQBdgZAbAHIA6gKQBLgKBWAAQBYAAAoAFQAUADACACQA/gGEbBJQCNAkCBAkI5PBkQFFihC5gyg");
	this.shape.setTransform(-71.8,-15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D2F3E").s().p("ApNKlQimgZhegeQhigfAWgaQAlgrDcgwQBugYBngPIgogyQljgClmgBQrLgDgMAGQvUAABahkQA4g+H3iHQD7hEDwg2IAEAAIZQhkQDHgMJdAyQEuAZEHAbIJYqUIGGgKIigMBIB6ADQCMAFBYAMQBXANA8AZQAeAMANAKIAKBaQBwAHBLAMQAmAGAPAFIj6AKIgKAUIAUAKIAEACQACAFgGANQgKAUgKAAIgKgUQgyAUmaBkIgeAeIlKgUImuAeIAABGIg8AAIgygoImaAUIgKAoIgUAAIgegUIgeAKIAEAFQACAKgGAZQgGAZgXAPIgVAKQhSAdhPAFQkHAPh0ALQhoAKhwAAQjhAAkGgmg");
	this.shape_1.setTransform(25,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Plane, new cjs.Rectangle(-258.3,-70.9,566.8,143), null);


(lib.MountainSmall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AkBG/IIDt9IAAN9g");
	this.shape.setTransform(-0.8,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AoDG/IIDt9IIEN9g");
	this.shape_1.setTransform(25,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AoDG/IIDt9IIEN9g");
	this.shape_2.setTransform(25,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MountainSmall, new cjs.Rectangle(-26.5,-44.1,103.2,89.4), null);


(lib.MountainMedium = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AlMJBIKZyBIAASBg");
	this.shape.setTransform(208.7,237.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AqZJBIKZyBIKaSBg");
	this.shape_1.setTransform(242,237.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MountainMedium, new cjs.Rectangle(175.4,179.8,133.2,115.5), null);


(lib.MountainBig = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AmzLzINn3lIAAXlg");
	this.shape.setTransform(-18.6,0.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("AtnLzINn3lINoXlg");
	this.shape_1.setTransform(25,0.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AtnLzINn3lINoXlg");
	this.shape_2.setTransform(25,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MountainBig, new cjs.Rectangle(-62.1,-75,174.4,151), null);


(lib.Island = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8CC63F").s().p("Ag4AyIA4hjIA5Bjg");
	this.shape.setTransform(-38,-135.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8CC63F").s().p("Ag4AyIA4hjIA5Bjg");
	this.shape_1.setTransform(62,-134.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8CC63F").s().p("Ag4AyIA4hjIA5Bjg");
	this.shape_2.setTransform(192,-134.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8CC63F").s().p("Ag4AyIA4hjIA5Bjg");
	this.shape_3.setTransform(-187,-134.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#39B54A").s().p("AhEA8IBEh3IBFB3g");
	this.shape_4.setTransform(-65.9,-127.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#39B54A").s().p("AhEA8IBEh3IBFB3g");
	this.shape_5.setTransform(-162.9,-132.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#39B54A").s().p("AhEA8IBEh3IBFB3g");
	this.shape_6.setTransform(170.1,-130.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#39B54A").s().p("AhEA8IBEh3IBFB3g");
	this.shape_7.setTransform(-8.9,-132.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8CC63F").s().p("AguhAIBdAAIgvCBg");
	this.shape_8.setTransform(-212.2,-107.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8CC63F").s().p("AgXgvIAvAAIgYBfg");
	this.shape_9.setTransform(-206.3,-110.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8CC63F").s().p("AgphMIBTAAIgkCag");
	this.shape_10.setTransform(-199.8,-108.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8CC63F").s().p("AgMgXIAaAAIgPAvg");
	this.shape_11.setTransform(-195.4,-112.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8CC63F").s().p("Agpg7IBTAAIgkB3g");
	this.shape_12.setTransform(-190.2,-109.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8CC63F").s().p("AgwhDIBhAAIgxCHg");
	this.shape_13.setTransform(-182.1,-110.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8CC63F").s().p("AgXgwIAvAAIgYBhg");
	this.shape_14.setTransform(-175.9,-112.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8CC63F").s().p("AgrhPIBXAAIglCfg");
	this.shape_15.setTransform(-169.2,-110.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8CC63F").s().p("AgNgYIAbAAIgOAxg");
	this.shape_16.setTransform(-164.7,-114.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8CC63F").s().p("Agqg8IBVAAIglB5g");
	this.shape_17.setTransform(-159.3,-110.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8CC63F").s().p("Agtg+IBbAAIguB9g");
	this.shape_18.setTransform(-151.4,-109.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8CC63F").s().p("AgWgtIAtAAIgXBbg");
	this.shape_19.setTransform(-145.6,-111.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8CC63F").s().p("AgohKIBRAAIgiCVg");
	this.shape_20.setTransform(-139.3,-109.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8CC63F").s().p("AgMgWIAZAAIgOAtg");
	this.shape_21.setTransform(-135.1,-113.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8CC63F").s().p("Agog5IBQAAIgjByg");
	this.shape_22.setTransform(-130,-110.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8CC63F").s().p("Agng2IBPAAIgoBtg");
	this.shape_23.setTransform(-125,-111.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8CC63F").s().p("AgTgnIAnAAIgUBPg");
	this.shape_24.setTransform(-120,-113.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8CC63F").s().p("AgihAIBGAAIgfCBg");
	this.shape_25.setTransform(-114.5,-111.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8CC63F").s().p("AgKgTIAVAAIgLAng");
	this.shape_26.setTransform(-110.9,-115.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8CC63F").s().p("AgigxIBFAAIgeBjg");
	this.shape_27.setTransform(-106.5,-112.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8CC63F").s().p("Agog4IBSAAIgqBxg");
	this.shape_28.setTransform(-98.8,-109.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8CC63F").s().p("AgUgoIApAAIgVBRg");
	this.shape_29.setTransform(-93.7,-111);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8CC63F").s().p("AgkhCIBJAAIgfCGg");
	this.shape_30.setTransform(-88,-109.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8CC63F").s().p("AgKgUIAVAAIgLApg");
	this.shape_31.setTransform(-84.2,-113.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8CC63F").s().p("AgkgzIBJAAIggBng");
	this.shape_32.setTransform(-79.6,-110);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#8CC63F").s().p("AgyhFIBlAAIgzCLg");
	this.shape_33.setTransform(-69.9,-108);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8CC63F").s().p("AgZgyIAzAAIgaBlg");
	this.shape_34.setTransform(-63.6,-109.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8CC63F").s().p("AgshRIBZAAIgmCkg");
	this.shape_35.setTransform(-56.7,-107.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#8CC63F").s().p("AgNgYIAbAAIgPAxg");
	this.shape_36.setTransform(-52,-112.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8CC63F").s().p("Agsg+IBYAAIgmB+g");
	this.shape_37.setTransform(-46.4,-108.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#8CC63F").s().p("Agng+IBPAAIgoB9g");
	this.shape_38.setTransform(-37,-108.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#8CC63F").s().p("AgTgtIAnAAIgUBbg");
	this.shape_39.setTransform(-32,-110.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8CC63F").s().p("AgihKIBFAAIgeCVg");
	this.shape_40.setTransform(-26.5,-108.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#8CC63F").s().p("AgKgWIAVAAIgLAtg");
	this.shape_41.setTransform(-22.9,-112.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#8CC63F").s().p("Agig5IBFAAIgeByg");
	this.shape_42.setTransform(-18.5,-109.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#8CC63F").s().p("Agng2IBPAAIgoBtg");
	this.shape_43.setTransform(-11,-110.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#8CC63F").s().p("AgTgnIAnAAIgUBPg");
	this.shape_44.setTransform(-6,-112.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#8CC63F").s().p("AgjhAIBGAAIgeCBg");
	this.shape_45.setTransform(-0.5,-110.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#8CC63F").s().p("AgKgTIAVAAIgLAng");
	this.shape_46.setTransform(3.1,-114.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#8CC63F").s().p("AgigxIBFAAIgeBjg");
	this.shape_47.setTransform(7.5,-111.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#8CC63F").s().p("AgnhHIBPAAIgoCPg");
	this.shape_48.setTransform(15,-107.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#8CC63F").s().p("AgTgzIAnAAIgUBng");
	this.shape_49.setTransform(20,-109.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#8CC63F").s().p("AgjhUIBGAAIgdCpg");
	this.shape_50.setTransform(25.5,-107.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#8CC63F").s().p("AgKgZIAVAAIgLAzg");
	this.shape_51.setTransform(29.1,-112.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8CC63F").s().p("AgihAIBFAAIgeCBg");
	this.shape_52.setTransform(33.5,-108.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#8CC63F").s().p("Agng2IBPAAIgoBtg");
	this.shape_53.setTransform(42,-108.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#8CC63F").s().p("AgTgnIAnAAIgUBPg");
	this.shape_54.setTransform(47,-110.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#8CC63F").s().p("AgjhAIBGAAIgdCBg");
	this.shape_55.setTransform(52.5,-108.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#8CC63F").s().p("AgKgTIAVAAIgLAng");
	this.shape_56.setTransform(56.1,-112.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#8CC63F").s().p("AgigxIBFAAIgeBjg");
	this.shape_57.setTransform(60.5,-109.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#8CC63F").s().p("AgnguIBPAAIgoBdg");
	this.shape_58.setTransform(68,-110.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#8CC63F").s().p("AgTghIAnAAIgUBDg");
	this.shape_59.setTransform(73,-112);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#8CC63F").s().p("Agjg2IBGAAIgdBtg");
	this.shape_60.setTransform(78.5,-110.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#8CC63F").s().p("AgKgQIAVAAIgLAhg");
	this.shape_61.setTransform(82.1,-113.7);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#8CC63F").s().p("AgigpIBFAAIgeBTg");
	this.shape_62.setTransform(86.5,-111.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#8CC63F").s().p("AgnhHIBPAAIgoCPg");
	this.shape_63.setTransform(92,-108.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#8CC63F").s().p("AgTgzIAnAAIgUBng");
	this.shape_64.setTransform(97,-110.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8CC63F").s().p("AgihUIBGAAIgfCpg");
	this.shape_65.setTransform(102.5,-108.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#8CC63F").s().p("AgKgZIAVAAIgLAzg");
	this.shape_66.setTransform(106.1,-113.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#8CC63F").s().p("AgihAIBFAAIgeCBg");
	this.shape_67.setTransform(110.5,-109.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#8CC63F").s().p("Agqg6IBVAAIgrB1g");
	this.shape_68.setTransform(119.3,-111.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#8CC63F").s().p("AgVgqIArAAIgWBVg");
	this.shape_69.setTransform(124.7,-112.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#8CC63F").s().p("AglhFIBLAAIggCLg");
	this.shape_70.setTransform(130.6,-111.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#8CC63F").s().p("AgLgVIAXAAIgMArg");
	this.shape_71.setTransform(134.5,-115);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#8CC63F").s().p("Aglg1IBLAAIghBrg");
	this.shape_72.setTransform(139.2,-111.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#8CC63F").s().p("AgnguIBPAAIgoBdg");
	this.shape_73.setTransform(146,-110.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#8CC63F").s().p("AgTghIAnAAIgUBDg");
	this.shape_74.setTransform(151,-112);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#8CC63F").s().p("Agig2IBGAAIgfBtg");
	this.shape_75.setTransform(156.5,-110.7);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#8CC63F").s().p("AgKgQIAVAAIgLAhg");
	this.shape_76.setTransform(160.1,-113.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#8CC63F").s().p("AgigpIBFAAIgeBTg");
	this.shape_77.setTransform(164.5,-111.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#8CC63F").s().p("AgngyIBPAAIgoBlg");
	this.shape_78.setTransform(170,-109.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#8CC63F").s().p("AgTgkIAnAAIgUBJg");
	this.shape_79.setTransform(175,-110.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#8CC63F").s().p("Agig7IBFAAIgeB3g");
	this.shape_80.setTransform(180.5,-109.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#8CC63F").s().p("AgKgRIAVAAIgLAkg");
	this.shape_81.setTransform(184.1,-112.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#8CC63F").s().p("AgigtIBFAAIgeBbg");
	this.shape_82.setTransform(188.5,-109.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#8CC63F").s().p("AgnhDIBPAAIgoCHg");
	this.shape_83.setTransform(194,-109.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#8CC63F").s().p("AgTgwIAnAAIgUBhg");
	this.shape_84.setTransform(199,-111.1);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#8CC63F").s().p("AgjhPIBGAAIgdCfg");
	this.shape_85.setTransform(204.5,-109.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#8CC63F").s().p("AgKgYIAVAAIgLAxg");
	this.shape_86.setTransform(208.1,-113.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#8CC63F").s().p("Agig8IBFAAIgeB6g");
	this.shape_87.setTransform(212.5,-109.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8CC63F").s().p("AgngpIBPAAIgoBTg");
	this.shape_88.setTransform(219,-110.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#8CC63F").s().p("AgTgeIAnAAIgUA9g");
	this.shape_89.setTransform(224,-111.4);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#8CC63F").s().p("AgigxIBGAAIgeBjg");
	this.shape_90.setTransform(229.5,-110.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#8CC63F").s().p("AgKgOIAVAAIgLAdg");
	this.shape_91.setTransform(233.1,-112.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#8CC63F").s().p("AgigmIBFAAIgeBNg");
	this.shape_92.setTransform(237.5,-110.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#8CC63F").s().p("Agng2IBPAAIgoBtg");
	this.shape_93.setTransform(245,-108.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#8CC63F").s().p("AgTgnIAnAAIgUBPg");
	this.shape_94.setTransform(250,-110.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#8CC63F").s().p("AgihAIBGAAIgfCBg");
	this.shape_95.setTransform(255.5,-108.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#8CC63F").s().p("AgKgTIAVAAIgLAng");
	this.shape_96.setTransform(259.1,-112.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#8CC63F").s().p("AgigxIBFAAIgeBjg");
	this.shape_97.setTransform(263.5,-109.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#8CC63F").s().p("EglzABfIAAh9QAAgbATgSQASgTAcAAMBJiAAAQAcAAAUATQAUAVAAAcIAAB5g");
	this.shape_98.setTransform(25,-123.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#009245").s().p("EglGABGIAAiLMBKNAAAIAACLg");
	this.shape_99.setTransform(25.5,-115.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#22B573").s().p("AhlBnQgrgrAAg8QAAg8ArgqQApgqA8AAQA8AAArAqQAqAqAAA8QAAA8gqArQgrAqg8AAQg8AAgpgqg");
	this.shape_100.setTransform(65.5,-163.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#603813").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_101.setTransform(65.5,-143.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#22B573").s().p("AhlBmQgrgqAAg8QAAg8ArgqQAqgqA7AAQA8AAAqAqQArAqAAA8QAAA8grAqQgqArg8AAQg7AAgqgrg");
	this.shape_102.setTransform(-18.5,-160.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#603813").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_103.setTransform(-18.5,-140.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#22B573").s().p("AhmBnQgqgrAAg8QAAg7AqgrQAqgqA8AAQA8AAArAqQAqArAAA7QAAA8gqArQgrAqg8AAQg8AAgqgqg");
	this.shape_104.setTransform(3.5,-171.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#603813").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_105.setTransform(3.5,-151.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#22B573").s().p("AhmBmQgqgqAAg8QAAg8AqgqQArgqA7AAQA8AAArAqQAqAqAAA8QAAA8gqAqQgrArg8AAQg7AAgrgrg");
	this.shape_106.setTransform(-40.5,-169.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#603813").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_107.setTransform(-40.5,-149.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#22B573").s().p("AhmBnQgqgrAAg8QAAg8AqgpQArgrA7AAQA8AAArArQAqApAAA8QAAA8gqArQgrAqg8AAQg7AAgrgqg");
	this.shape_108.setTransform(-84.5,-174.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#603813").s().p("AgYDSIAAmjIAxAAIAAGjg");
	this.shape_109.setTransform(-84.5,-154.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#009245").s().p("AhcBdQgngnAAg2QAAg2AngnQAmgmA2AAQA3AAAmAmQAnAnAAA2QAAA3gnAmQgmAng3AAQg2AAgmgng");
	this.shape_110.setTransform(-32.8,-133.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#009245").s().p("AhcBdQgngmAAg3QAAg2AngmQAngnA1AAQA3AAAmAnQAnAmAAA2QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_111.setTransform(-16.1,-132);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#009245").s().p("AhcBdQgngmAAg3QAAg2AngmQAngnA1AAQA3AAAmAnQAnAmAAA2QAAA2gnAnQgmAng3AAQg1AAgngng");
	this.shape_112.setTransform(24.8,-133.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#009245").s().p("AhcBdQgngmAAg3QAAg2AngnQAngmA1AAQA3AAAnAmQAmAnAAA2QAAA3gmAmQgnAng3AAQg1AAgngng");
	this.shape_113.setTransform(3.9,-133.7);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#009245").s().p("AhcBeQgngnAAg3QAAg1AngnQAmgnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAnQgmAmg3AAQg2AAgmgmg");
	this.shape_114.setTransform(42.2,-128.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#009245").s().p("AhcBdQgngmAAg3QAAg2AngmQAngnA1AAQA3AAAnAnQAmAmAAA2QAAA3gmAmQgnAng3AAQg1AAgngng");
	this.shape_115.setTransform(58.9,-127);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#009245").s().p("AhdBeQgmgnAAg3QAAg1AmgnQAognA1AAQA2AAAnAnQAnAnAAA1QAAA2gnAoQgnAmg2AAQg1AAgogmg");
	this.shape_116.setTransform(99.8,-128.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#009245").s().p("AhdBeQgmgnAAg3QAAg1AmgnQAngnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAnQgmAmg3AAQg2AAgngmg");
	this.shape_117.setTransform(78.9,-128.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#009245").s().p("AhcBdQgngnAAg2QAAg2AngmQAmgnA2AAQA3AAAmAnQAnAmAAA2QAAA3gnAmQgmAng3AAQg2AAgmgng");
	this.shape_118.setTransform(-110.8,-131.7);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#009245").s().p("AhcBdQgngmAAg3QAAg2AngmQAngnA1AAQA3AAAnAnQAmAmAAA2QAAA3gmAmQgnAng3AAQg1AAgngng");
	this.shape_119.setTransform(-94.1,-130);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#009245").s().p("AhcBeQgngnAAg3QAAg1AngnQAngnA1AAQA2AAAnAnQAnAnAAA1QAAA3gnAnQgnAmg2AAQg1AAgngmg");
	this.shape_120.setTransform(-53.2,-131.5);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#009245").s().p("AhdBdQgmgmAAg3QAAg2AmgmQAngnA2AAQA3AAAnAnQAmAmAAA2QAAA3gmAmQgnAng3AAQg2AAgngng");
	this.shape_121.setTransform(-74.1,-131.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#39B54A").s().p("AhcBeQgngnAAg3QAAg1AngnQAmgnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAnQgmAmg3AAQg2AAgmgmg");
	this.shape_122.setTransform(-127.8,-137.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#39B54A").s().p("AhcBdQgngmAAg3QAAg2AngmQAngnA1AAQA3AAAnAnQAmAmAAA2QAAA3gmAmQgnAng3AAQg1AAgngng");
	this.shape_123.setTransform(-113.1,-145);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#39B54A").s().p("AhdBeQgmgnAAg3QAAg1AmgnQAognA1AAQA2AAAnAnQAnAnAAA1QAAA2gnAoQgnAmg2AAQg1AAgogmg");
	this.shape_124.setTransform(-70.2,-137.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#39B54A").s().p("AhdBeQgmgnAAg3QAAg1AmgnQAngnA2AAQA3AAAmAnQAnAnAAA1QAAA3gnAnQgmAmg3AAQg2AAgngmg");
	this.shape_125.setTransform(-91.1,-137.7);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#39B54A").s().p("AhcBeQgngnAAg3QAAg1AngoQAmgmA2AAQA3AAAmAmQAnAoAAA1QAAA3gnAnQgmAmg3AAQg2AAgmgmg");
	this.shape_126.setTransform(86.2,-136.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#39B54A").s().p("AhcBdQgngmAAg3QAAg2AngmQAmgnA2AAQA2AAAnAnQAnAmAAA2QAAA3gnAmQgmAng3AAQg2AAgmgng");
	this.shape_127.setTransform(100.9,-144);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#39B54A").s().p("AhcBdQgngmAAg3QAAg1AngnQAngnA1AAQA2AAAnAnQAnAnAAA1QAAA2gnAnQgnAng2AAQg1AAgngng");
	this.shape_128.setTransform(143.8,-136.5);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#39B54A").s().p("AhdBeQgmgnAAg3QAAg1AmgoQAogmA1AAQA3AAAnAmQAmAoAAA1QAAA3gmAnQgnAmg3AAQg1AAgogmg");
	this.shape_129.setTransform(122.9,-136.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#39B54A").s().p("AhcBdQgngnAAg2QAAg2AngnQAmgmA2AAQA3AAAmAmQAnAnAAA2QAAA3gnAmQgmAng3AAQg2AAgmgng");
	this.shape_130.setTransform(-58.8,-141.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#39B54A").s().p("AhcBdQgngmAAg3QAAg2AngmQAmgnA2AAQA2AAAnAnQAnAmAAA2QAAA3gnAmQgmAng3AAQg2AAgmgng");
	this.shape_131.setTransform(-44.1,-149);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#39B54A").s().p("AhcBdQgngmAAg3QAAg2AngmQAngnA1AAQA3AAAmAnQAnAmAAA2QAAA3gnAmQgmAng3AAQg1AAgngng");
	this.shape_132.setTransform(-1.2,-141.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#39B54A").s().p("AhcBdQgngmAAg3QAAg2AngnQAngmA1AAQA3AAAnAmQAmAnAAA2QAAA3gmAmQgnAng3AAQg1AAgngng");
	this.shape_133.setTransform(-22.1,-141.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#39B54A").s().p("AhcBdQgngnAAg2QAAg2AngmQAmgnA2AAQA3AAAmAnQAnAmAAA2QAAA3gnAmQgmAng3AAQg2AAgmgng");
	this.shape_134.setTransform(12.2,-140.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#39B54A").s().p("AhdBdQgmgmAAg3QAAg2AmgmQAngnA2AAQA2AAAnAnQAnAmAAA2QAAA3gnAmQgmAng3AAQg2AAgngng");
	this.shape_135.setTransform(26.9,-148);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#39B54A").s().p("AhcBeQgngnAAg3QAAg1AngnQAngnA1AAQA3AAAmAnQAnAnAAA1QAAA3gnAnQgmAmg3AAQg1AAgngmg");
	this.shape_136.setTransform(69.8,-140.5);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#39B54A").s().p("AhcBdQgngmAAg3QAAg2AngmQAngnA1AAQA3AAAnAnQAmAmAAA2QAAA3gmAmQgnAng3AAQg1AAgngng");
	this.shape_137.setTransform(48.9,-140.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("AAAA3QgMAAgIgIQgIgJAAgMIAAg0QAAgMAIgIQAIgIAMAAIABAAQALAAAJAIQAIAIAAAMIAAA0QAAAMgIAJQgJAIgLAAg");
	this.shape_138.setTransform(164.5,-135.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#754C24").s().p("AizAyIAwhjIEGAAIAxBjg");
	this.shape_139.setTransform(164,-148.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#C69C6D").s().p("AiHBGIAAiLIEPAAIAACLg");
	this.shape_140.setTransform(164.5,-140.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#603813").s().p("AmZrEIMyAAIAAWJg");
	this.shape_141.setTransform(140.2,-43);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#754C24").s().p("AsyrEIZlAAIszWJg");
	this.shape_142.setTransform(181.1,-43);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#603813").s().p("AlIo6IKSAAIAAR0g");
	this.shape_143.setTransform(-177.8,-56.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#754C24").s().p("AqSo6IUlAAIqTR0g");
	this.shape_144.setTransform(-144.9,-56.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#603813").s().p("Atu3xIbdAAMAAAAvjg");
	this.shape_145.setTransform(-87.9,38);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#754C24").s().p("A7d3xMA27AAAMgbeAvjg");
	this.shape_146.setTransform(0,38);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Island, new cjs.Rectangle(-217,-189.2,484,379.4), null);


(lib.Explosion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#280201").s().p("AgsBGIhQhGIBuiBICBA8IAKDHg");
	this.shape.setTransform(-55.5,-173.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#290101").s().p("AhoAyIAAipICLAAIBGCBIhtBQIhaAeg");
	this.shape_1.setTransform(-79.5,64.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#290101").s().p("AifAZICCh3IC9g8IhGDbIh3A8IhGAeg");
	this.shape_2.setTransform(-80,92);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#290101").s().p("AhKBpIAAhkIAyhtIBjBQIhGCBg");
	this.shape_3.setTransform(-68.5,166);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#290101").s().p("AiaCgIgog8IEXkDIBGAoIAoCfIiCB4g");
	this.shape_4.setTransform(170.5,151.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#290101").s().p("AhFgEIA8haIBPA8IgeBjIgxAeg");
	this.shape_5.setTransform(52,171);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#290101").s().p("Ag2BzIgyipIAeigICLDSIAoCzIgyAog");
	this.shape_6.setTransform(75.5,140);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#290101").s().p("AhFAyIg8iVICVAAIBuAyIAABZIhuA8g");
	this.shape_7.setTransform(177,69.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#290101").s().p("AgOA8Ig8goIA8hPIBZAAIAAB3g");
	this.shape_8.setTransform(229.5,9.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#290101").s().p("AiaBVIAAiLICpg8ICMA8IhQCpg");
	this.shape_9.setTransform(216.5,-14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#290101").s().p("AhKBkIgehGIAehjICBgeIAyBtIhaBag");
	this.shape_10.setTransform(128.5,-164.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#290101").s().p("Ai9A8IAAiLICWhGIDlBkIk1DHg");
	this.shape_11.setTransform(-90,-166.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#290101").s().p("AiQBaIgyiLIBkhQICBAAICgCfIiWBkg");
	this.shape_12.setTransform(-165.5,-85.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#541716").s().p("Ak1BQIJri9ImtDbg");
	this.shape_13.setTransform(-149,36.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#541716").s().p("AnQAUIPni9IwtFTg");
	this.shape_14.setTransform(-142.5,25.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#541716").s().p("Ai9DSIF7oHIk/Jrg");
	this.shape_15.setTransform(-83,146.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#541716").s().p("AhZGkICzuNIhaPTg");
	this.shape_16.setTransform(1,167.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#541716").s().p("AAAk6IAoHLIhPCqg");
	this.shape_17.setTransform(14,178);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#541716").s().p("AkXi9IIvD5IAACCg");
	this.shape_18.setTransform(179,107.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#541716").s().p("AEnhoIC0AyIu1Cfg");
	this.shape_19.setTransform(198.5,-30);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#541716").s().p("AAZlTIBQBGIjRJhg");
	this.shape_20.setTransform(102.5,-181.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#541716").s().p("Ah3g7IAekEIDRJ/g");
	this.shape_21.setTransform(-20,-183.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#541716").s().p("AlYhAIBahaIJXE1g");
	this.shape_22.setTransform(-133.5,-98);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFD256").s().p("AmbSbQBunKgljnQAAgKgSgGQgjgMhXAUQkYA+q8FkQEEibD/imQH+lNgZg4Qgag6o+gTQjJgIjRABQingBgtAEQEogjEjg3QJOhwgZhqQgjiTiaiRQi1isldiwIB8A8QDIBeCrBLQIkDtA4g4QAqgrAKgSQATgnAGheQAKiJgHs9QAREMAoEPQBPIeBxATQBwATFYkfQCriOCPiMQiKCbh+CpQj8FRA4BFQA4BEIbhdQETgwFAhDQkWBkkWB4QouDvgGBkQgGBZE5BpQCvA8DuA1QiXgdiPgMQj1gWiAApQgIABgIAEQgJAAgJAEIgCAAQgHADgDADIgHABQgNADgIAIQgJAEgGAGQgnAWAzCDQBPDOEdGtQiMi5iZi0Qkxlog+AZIgIAIQgIATgFA8QgSC7ATH6Qghiig0ihQhplDhjAGQg5ADgxBFQgpA6g1CFIhuEjQhPDUhHCkQA+i2A3jlg");
	this.shape_23.setTransform(31.9,-10.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FBB32D").s().p("Ai6EYQDziQBDjdQAVhGABhFIgDg3QA+B3gZCOQgMBGgZAwQhRB9iEAoQgpAMgqADg");
	this.shape_24.setTransform(111.7,32.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FBB32D").s().p("ABEEGQiXgoheivQgPgrgGg8QgNh6AsheIAAA4QAFBGAaBFQBTDbD/B9QgZAGgcAAQglAAgsgLg");
	this.shape_25.setTransform(-20.2,39.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FBB32D").s().p("Ag2iCQhUghhdgOIhLgIQCphEChA0QBRAaAwAoQB3BYAbCQQAOBIgKA3QhYj5kNhpg");
	this.shape_26.setTransform(93.7,-74.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#C81413").s().p("AinDHQjOhqg0i/QgRg9ABg9IAEgyIAuBMQBABbBXBJQEUDqGWgZQhGAwhvAaQhJAShIAAQiRAAiKhIg");
	this.shape_27.setTransform(-40.2,135.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#C81413").s().p("AgjjrQhPhXhghBIhPgvQAZAFBGAKQBFALA4AXQCkBCBzC5QBwC0gtDVQgWBqgtBGQAGmKj7kUg");
	this.shape_28.setTransform(188,-68);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#C81413").s().p("AoNEAQAFkmDtjhQDujhE1gPQCbgIBrAmQoNA+kmHQQhcCSg6CoQgdBUgLA3QgthnADiTg");
	this.shape_29.setTransform(-76.6,-114.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#F08616").s().p("AikAMQhdAYhWAvIhCAqQAohRBEg6QB8huCxAAQCvAACHB8QBDA+AhA/QkTi6krBJg");
	this.shape_30.setTransform(11,-128);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FE9329").s().p("AheBgQgogoAAg4QAAg3AognQAngoA3AAQA4AAAnAoQAoAnAAA3QAAA4goAoQgnAng4AAQg3AAgngng");
	this.shape_31.setTransform(159.5,-87);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FE9329").s().p("AhmBnQgqgrAAg8QAAg8AqgpQAqgrA8AAQA8AAAqArQArApAAA8QAAA8grArQgqAqg8AAQg8AAgqgqg");
	this.shape_32.setTransform(-63.5,-123);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#F68529").s().p("AhuCCQg/g1AAhlQAAgfAogvQAUgYAUgSIAfgNQAlgOAjABQBwADAsCPQAZBRgxA4QgsAzhMAGIgTABQhBAAgwgpg");
	this.shape_33.setTransform(133.4,104);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#F68529").s().p("AgYDvQgeAFgrgQQhVghg+hqQgKhBAMhGQAZiPBxgfIAkgPQAtgPAqABQCJADBFCcQAmBXgVBMQgSBBg5AwQgxAqg7APQgZAHgTAAQgYAAgPgLg");
	this.shape_34.setTransform(9.5,123.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#F6C40D").s().p("AgUB8QgrgBgWgWQglglAFhKIAMhEQAJgHAOgJQAdgSAbgHQBXgWArBdQAZA0gQAqQgPAlgoAWQgkATgoAAIgCAAg");
	this.shape_35.setTransform(64.6,81.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#F6C40D").s().p("AicBdQg/iIBahQQAcgZAogQQAUgJAPgDQCIATAyBdQAZAugCApQg8BJhJAtQg4AkgtAAQhEAAglhUg");
	this.shape_36.setTransform(-61.3,-18.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EF880F").s().p("AifHBQhjh+gnh+Qg2ixBJiaQBcjAEfiPQA8geCggyQgsAZg9AyQh5BihVB3QkQF4DCGvQgqgmgxg/g");
	this.shape_37.setTransform(-84.1,-36.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EF880F").s().p("AiuFQQAJgMAbgUQBJg3BBhtQCFjYggkNIAPAaQASAjAOAnQAqB9gTB8IgeBkQgWAogpAvQhSBfheAmQg4AWgQAAQgLAAAHgKg");
	this.shape_38.setTransform(154.9,58.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EF880F").s().p("AlVBlQg7glgvgxIglgoQBkA+CCAUQBBAKAtgDQD/gGDVh5QBqg+A3g8QgXBJhABRQiDCijUArQg5AMg4AAQiVAAiGhVg");
	this.shape_39.setTransform(70.5,105.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#F68704").s().p("AnuOQQjIgyh9iHQgngqgbguIgTglIgehkQgsheAhiJQAKgrAQgrIAPghQB4gjBSgyQClhji7hLQi8hLgPjSQgEhCANhHIAOg6QCpkyELAgQCGAQBkBOICMAUQDajCEBAXQCBALBVAyIBQAoQC7CJAoDIQAUBkgRBJIgQAnQgSA0gGBFQgGBFgwAvIguAhQCWBkAjClQARBSgMA/QgNEGjcBfQhEAehSAJIhDAEIiCgeQh3gshDhcQgWgdgNgfIgJgYIgFgcQgFgUAAAmQAAAlgeAoQgPAUgPANIiVCgQgZAyiRAeIiMAUg");
	this.shape_40.setTransform(46.5,-12.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#DF402A").s().p("AAAUfIn0huQgbAKguAHQhbANhegVQkshEjUl9QgKgtgFhAQgKh/AZheQhkhVhViSQiqkkBLkyQBNk6FHiRQBxgyBvgQQBigNAOASQAehuBRhxQCjjhEAgMQEAgNCiCMQBRBGAeBJIAxgeQBAgiBDgUQDXg+CvBqQCvBqAZDLQAMBlgWBQIBBARQBQAYBIAkQDmBzA/C8QBHDXgUCRQgSB/hnCYIAYAuQAbA8AKBBQAhDQiQC1QghAjgvAiQhfBDhLgGIlABkQg3BfiDBDQiDBDifAAQiiAAi/hFg");
	this.shape_41.setTransform(35.1,-6.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#BF2B2B").s().p("AlgFiQiTiTAAjPQAAjPCTiSQCRiSDPAAQDPAACSCSQCTCSAADPQAADPiTCTQiSCSjPAAQjPAAiRiSg");
	this.shape_42.setTransform(-136,-28.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#BF2B2B").s().p("AjFDGQhShSAAh0QAAhzBShSQBShSBzAAQB0AABSBSQBSBSAABzQAAB0hSBSQhSBSh0AAQhzAAhShSg");
	this.shape_43.setTransform(-101,112.5);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BF2B2B").s().p("AkaEaQh1h0AAimQAAikB1h2QB1h1ClAAQClAAB2B1QB1B2AACkQAACmh1B0Qh2B2ilAAQilAAh1h2g");
	this.shape_44.setTransform(197,21.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BF2B2B").s().p("AjPDRQhXhXAAh6QAAh5BXhXQBWhWB5AAQB6AABWBWQBXBXAAB5QAAB6hXBXQhWBWh6AAQh5AAhWhWg");
	this.shape_45.setTransform(146.5,-121);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#BF2B2B").s().p("AkPEQQhxhxAAifQAAieBxhxQBxhxCeAAQCfAABxBxQBxBxAACeQAACfhxBxQhxBxifAAQieAAhxhxg");
	this.shape_46.setTransform(19.5,-154);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AE292A").s().p("AJ4brQiLgJiZg0Qh4gpiwhWQgmAbhCAeQiEA9iIAQQm2A1k/mXIksn0Qg+gtg/hhQh9jDAAkHQhfgghkhOQjIiagZjhQgOh+A3h6QAwhoBahWQBQhNBWglQBTglAqATQgHh1AuieQBdk7EMjIQENjIEvAPQCXAIBhAvILPAoIBMgIQBegGBcAJQEkAeCcCvQCdCvCsA8QBWAeA3gFIBaAYQBrAlBWBDQETDXgmG1IgKBTQgPBVgZAMQgZANhQGPQgoDIgjDFIgBB3QgHCSgjCKQhxG4lYC7QlbC+kjAAQgbAAgbgCg");
	this.shape_47.setTransform(20.6,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Explosion, new cjs.Rectangle(-196,-215.5,442,432), null);


(lib.Cloud = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-41,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cloud, new cjs.Rectangle(-41,-34,132,68), null);


(lib.Blimp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E93B44").s().p("AAvCeQkdgIikg6QiEgtAAgwQAAgcBGgfQBEgeBvgYQEBg4DzAQQDRAOBMBHQAmAjgDAhQAFAqg6AqQhpBMkOAAIg8gBg");
	this.shape.setTransform(25,-2.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#29ABE2").s().p("AgRALQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAgNQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAjAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAAANQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_1.setTransform(45.7,16.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#29ABE2").s().p("AgRALQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAgNQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAjAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAAANQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_2.setTransform(39.9,16.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#29ABE2").s().p("AgRALQgBAAgBAAQAAgBgBAAQAAgBgBAAQAAgBAAgBIAAgNQAAgBAAgBQABAAAAgBQABAAAAgBQABAAABAAIAjAAQABAAABAAQAAABABAAQAAABABAAQAAABAAABIAAANQAAABAAABQgBAAAAABQgBAAAAABQgBAAgBAAg");
	this.shape_3.setTransform(34.1,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E93B44").s().p("AgFAlIhEgCQgJAAgRghIgPggIDlgHIgEAhQgJAigXAFQgQADgiAAIgigBg");
	this.shape_4.setTransform(39.3,15.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#AA272D").s().p("AhTAtIAZhbICOA2QgmANgpALQg4APgVAAQgIAAgDgCg");
	this.shape_5.setTransform(-19.4,6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AA272D").s().p("AhKAHQgQgpAJgKQAJgJBPAWQAoALAmANIiNA2QgKgTgIgVg");
	this.shape_6.setTransform(-19.6,-10.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Blimp, new cjs.Rectangle(-28.5,-18.4,107,37.8), null);


// stage content:
(lib.explodingIsland = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// SecondExplosion
	this.instance = new lib.Explosion();
	this.instance.parent = this;
	this.instance.setTransform(491.5,356.2,0.107,0.107,0,0,0,25.2,0);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(122).to({_off:false},0).wait(1).to({regX:25,regY:0.5,scaleX:0.19,scaleY:0.19,y:356.3},0).wait(1).to({scaleX:0.28,scaleY:0.28,y:356.4},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:491.4},0).wait(1).to({scaleX:0.45,scaleY:0.45,x:491.5},0).wait(1).to({scaleX:0.53,scaleY:0.53,x:491.4,y:356.5},0).wait(1).to({scaleX:0.62,scaleY:0.62},0).wait(1).to({scaleX:0.7,scaleY:0.7,y:356.6},0).wait(1).to({scaleX:0.79,scaleY:0.79},0).wait(1).to({scaleX:0.87,scaleY:0.87,y:356.7},0).wait(1).to({scaleX:0.96,scaleY:0.96,x:491.3},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:491.4},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:491.3,y:356.8},0).wait(1).to({scaleX:1.21,scaleY:1.21},0).wait(1).to({scaleX:1.3,scaleY:1.3,y:356.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,y:356.8},0).wait(1).to({scaleX:1.14,scaleY:1.14},0).wait(1).to({scaleX:1.06,scaleY:1.06},0).wait(1).to({scaleX:0.98,scaleY:0.98,y:356.7},0).wait(1).to({scaleX:0.9,scaleY:0.9,x:491.4},0).wait(1).to({scaleX:0.82,scaleY:0.82,y:356.6},0).wait(1).to({scaleX:0.74,scaleY:0.74},0).wait(1).to({scaleX:0.66,scaleY:0.66},0).wait(1).to({scaleX:0.58,scaleY:0.58,y:356.5},0).wait(1).to({scaleX:0.5,scaleY:0.5},0).wait(1).to({scaleX:0.42,scaleY:0.42,x:491.5,y:356.4},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:491.4},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.19,scaleY:0.19,x:491.5,y:356.3},0).to({_off:true},1).wait(89));

	// Clouds
	this.instance_1 = new lib.Cloud();
	this.instance_1.parent = this;
	this.instance_1.setTransform(234.5,120.5,1,1,0,0,0,25,0);

	this.instance_2 = new lib.Cloud();
	this.instance_2.parent = this;
	this.instance_2.setTransform(570.3,99.4,1,1,0,0,0,25,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(240));

	// FirstExplosion
	this.instance_3 = new lib.Explosion();
	this.instance_3.parent = this;
	this.instance_3.setTransform(456.7,224,0.186,0.186,0,0,0,24.4,0.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(98).to({_off:false},0).wait(1).to({regX:25,regY:0.5,scaleX:0.23,scaleY:0.23,x:456.8,y:223.9},0).wait(1).to({scaleX:0.27,scaleY:0.27,y:224},0).wait(1).to({scaleX:0.31,scaleY:0.31,y:223.9},0).wait(1).to({scaleX:0.35,scaleY:0.35},0).wait(1).to({scaleX:0.39,scaleY:0.39},0).wait(1).to({scaleX:0.43,scaleY:0.43,x:456.9},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:456.8},0).wait(1).to({scaleX:0.14,scaleY:0.14,x:456.7},0).to({_off:true},1).wait(133));

	// Plane
	this.instance_4 = new lib.Plane();
	this.instance_4.parent = this;
	this.instance_4.setTransform(2825.8,213.2,0.197,0.197,0,0,0,309.8,1.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:25,regY:0.5,x:2753.4,y:212.9},0).wait(1).to({x:2737.1},0).wait(1).to({x:2720.8},0).wait(1).to({x:2704.5},0).wait(1).to({x:2688.2},0).wait(1).to({x:2671.9},0).wait(1).to({scaleX:0.2,x:2655.6},0).wait(1).to({x:2639.2},0).wait(1).to({x:2622.9},0).wait(1).to({x:2606.6},0).wait(1).to({x:2590.3},0).wait(1).to({x:2574},0).wait(1).to({scaleX:0.2,x:2557.6},0).wait(1).to({x:2541.3},0).wait(1).to({x:2525},0).wait(1).to({x:2508.7},0).wait(1).to({x:2492.4},0).wait(1).to({x:2476.1},0).wait(1).to({x:2459.8},0).wait(1).to({scaleX:0.2,x:2443.5},0).wait(1).to({x:2427.1},0).wait(1).to({x:2402.3},0).wait(1).to({x:2377.4},0).wait(1).to({x:2352.5},0).wait(1).to({x:2327.6},0).wait(1).to({x:2302.7},0).wait(1).to({scaleX:0.2,x:2277.9},0).wait(1).to({x:2253},0).wait(1).to({x:2228.1},0).wait(1).to({x:2203.2},0).wait(1).to({x:2178.4},0).wait(1).to({x:2153.5},0).wait(1).to({x:2128.6},0).wait(1).to({scaleX:0.2,x:2103.7},0).wait(1).to({x:2078.9},0).wait(1).to({x:2054},0).wait(1).to({x:2029.1},0).wait(1).to({x:2004.2},0).wait(1).to({x:1979.4},0).wait(1).to({x:1954.5},0).wait(1).to({scaleX:0.2,x:1929.6},0).wait(1).to({x:1904.7},0).wait(1).to({x:1879.8},0).wait(1).to({x:1855},0).wait(1).to({x:1830.1},0).wait(1).to({x:1805.2},0).wait(1).to({scaleX:0.2,x:1780.4},0).wait(1).to({x:1755.5},0).wait(1).to({x:1730.6},0).wait(1).to({x:1705.7},0).wait(1).to({x:1680.8},0).wait(1).to({x:1656},0).wait(1).to({x:1631.1},0).wait(1).to({scaleX:0.21,x:1606.2},0).wait(1).to({x:1581.3},0).wait(1).to({x:1556.4},0).wait(1).to({x:1531.6},0).wait(1).to({x:1506.7},0).wait(1).to({x:1481.8},0).wait(1).to({x:1457},0).wait(1).to({scaleX:0.21,x:1432.1},0).wait(1).to({x:1407.2},0).wait(1).to({x:1382.4},0).wait(1).to({x:1357.4},0).wait(1).to({x:1332.6},0).wait(1).to({x:1307.7},0).wait(1).to({x:1282.8},0).wait(1).to({scaleX:0.21,x:1257.9},0).wait(1).to({x:1233},0).wait(1).to({x:1208.2},0).wait(1).to({x:1183.3},0).wait(1).to({x:1158.5},0).wait(1).to({x:1133.6},0).wait(1).to({x:1108.7},0).wait(1).to({scaleX:0.21,x:1083.8},0).wait(1).to({x:1058.9},0).wait(1).to({x:1034.1},0).wait(1).to({x:1009.2},0).wait(1).to({x:984.3},0).wait(1).to({x:959.4},0).wait(1).to({x:934.5},0).wait(1).to({scaleX:0.21,x:909.7},0).wait(1).to({x:884.8},0).wait(1).to({x:859.9},0).wait(1).to({x:835.1},0).wait(1).to({x:810.2},0).wait(1).to({x:785.3},0).wait(1).to({scaleX:0.21,x:760.4},0).wait(1).to({x:735.5},0).wait(1).to({x:710.7},0).wait(1).to({x:685.8},0).wait(1).to({x:660.9},0).wait(1).to({x:636},0).wait(1).to({x:611.1},0).wait(1).to({scaleX:0.21,x:586.3},0).wait(1).to({scaleX:0.21,x:562.2},0).wait(1).to({scaleX:0.21,x:538},0).wait(1).to({x:513.2},0).wait(1).to({x:488.4},0).wait(1).to({x:463.5},0).to({_off:true},1).wait(139));

	// Blimp
	this.instance_5 = new lib.Blimp();
	this.instance_5.parent = this;
	this.instance_5.setTransform(81.3,222.4,1.326,1.326,0,0,0,25,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({x:84.6,y:222.3},0).wait(1).to({x:87.9},0).wait(1).to({x:91.1},0).wait(1).to({x:94.4},0).wait(1).to({x:97.7},0).wait(1).to({x:101},0).wait(1).to({x:104.2},0).wait(1).to({x:107.5},0).wait(1).to({x:110.8},0).wait(1).to({x:114.1},0).wait(1).to({x:117.4},0).wait(1).to({x:120.6},0).wait(1).to({x:123.9},0).wait(1).to({x:127.2},0).wait(1).to({x:130.5},0).wait(1).to({x:133.8},0).wait(1).to({x:137},0).wait(1).to({x:140.3},0).wait(1).to({x:143.6},0).wait(1).to({x:146.9},0).wait(1).to({x:150.1},0).wait(1).to({x:153.4},0).wait(1).to({x:156.7},0).wait(1).to({x:160},0).wait(1).to({x:163.3},0).wait(1).to({x:166.5},0).wait(1).to({x:169.8},0).wait(1).to({x:173.1},0).wait(1).to({x:176.4},0).wait(1).to({x:179.7},0).wait(1).to({x:182.9},0).wait(1).to({x:186.2},0).wait(1).to({x:189.5},0).wait(1).to({x:192.8},0).wait(1).to({x:196},0).wait(1).to({x:199.3},0).wait(1).to({x:202.6},0).wait(1).to({x:205.9},0).wait(1).to({x:209.2},0).wait(1).to({x:212.4},0).wait(1).to({x:215.7},0).wait(1).to({x:219},0).wait(1).to({x:222.3},0).wait(1).to({x:225.6},0).wait(1).to({x:228.8},0).wait(1).to({x:232.1},0).wait(1).to({x:235.4},0).wait(1).to({x:238.7},0).wait(1).to({x:241.9},0).wait(1).to({x:245.2},0).wait(1).to({x:248.5},0).wait(1).to({x:251.8},0).wait(1).to({x:255.1},0).wait(1).to({x:258.3},0).wait(1).to({x:261.6},0).wait(1).to({x:264.9},0).wait(1).to({x:268.2},0).wait(1).to({x:271.5},0).wait(1).to({x:274.7},0).wait(1).to({x:278},0).wait(1).to({x:281.3},0).wait(1).to({x:284.6},0).wait(1).to({x:287.8},0).wait(1).to({x:291.1},0).wait(1).to({x:294.4},0).wait(1).to({x:297.7},0).wait(1).to({x:301},0).wait(1).to({x:304.2},0).wait(1).to({x:307.5},0).wait(1).to({x:310.8},0).wait(1).to({x:314.1},0).wait(1).to({x:317.4},0).wait(1).to({x:320.6},0).wait(1).to({x:323.9},0).wait(1).to({x:327.2},0).wait(1).to({x:330.5},0).wait(1).to({x:333.7},0).wait(1).to({x:337},0).wait(1).to({x:340.3},0).wait(1).to({x:343.6},0).wait(1).to({x:346.9},0).wait(1).to({x:350.1},0).wait(1).to({x:353.4},0).wait(1).to({x:356.7},0).wait(1).to({x:360},0).wait(1).to({x:363.3},0).wait(1).to({x:366.5},0).wait(1).to({x:369.8},0).wait(1).to({x:373.1},0).wait(1).to({x:376.4},0).wait(1).to({x:379.6},0).wait(1).to({x:382.9},0).wait(1).to({x:386.2},0).wait(1).to({x:389.5},0).wait(1).to({x:392.8},0).wait(1).to({x:396},0).wait(1).to({x:399.3},0).wait(1).to({x:402.6},0).wait(1).to({x:405.9},0).wait(1).to({x:409.1},0).wait(1).to({_off:true},1).wait(138));

	// FallingBlimp
	this.instance_6 = new lib.Blimp();
	this.instance_6.parent = this;
	this.instance_6.setTransform(408.9,223.5,1.321,1.321,0,0,0,25,0.6);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(101).to({_off:false},0).wait(1).to({regY:0.5,rotation:1.4,x:410.4,y:228.1},0).wait(1).to({rotation:2.9,x:411.9,y:232.8},0).wait(1).to({rotation:4.3,x:413.5,y:237.5},0).wait(1).to({rotation:5.7,x:415.1,y:242.3},0).wait(1).to({rotation:7.1,x:416.6,y:247},0).wait(1).to({rotation:8.6,x:418.2,y:251.7},0).wait(1).to({rotation:10,x:419.8,y:256.4},0).wait(1).to({rotation:11.4,x:421.3,y:261.2},0).wait(1).to({rotation:12.9,x:422.9,y:265.9},0).wait(1).to({rotation:14.3,x:424.5,y:270.6},0).wait(1).to({rotation:15.7,x:426,y:275.3},0).wait(1).to({rotation:17.1,x:427.6,y:280.1},0).wait(1).to({rotation:18.6,x:429.1,y:284.8},0).wait(1).to({rotation:20,x:430.6,y:289.5},0).wait(1).to({rotation:21.4,x:432.3,y:294.2},0).wait(1).to({rotation:22.9,x:433.8,y:298.9},0).wait(1).to({rotation:24.3,x:435.4,y:303.7},0).wait(1).to({rotation:25.7,x:436.9,y:308.4},0).wait(1).to({rotation:27.1,x:438.5,y:313.1},0).wait(1).to({rotation:28.6,x:440.1,y:317.9},0).wait(1).to({rotation:30,x:441.6,y:322.5},0).wait(14).to({_off:true},1).wait(103));

	// SecondayExplosions
	this.instance_7 = new lib.Explosion();
	this.instance_7.parent = this;
	this.instance_7.setTransform(288.1,393.8,0.222,0.222,0,0,0,25,0.3);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(133).to({_off:false},0).wait(1).to({regY:0.5,scaleX:0.27,scaleY:0.27,y:393.9},0).wait(1).to({scaleX:0.31,scaleY:0.31},0).wait(1).to({scaleX:0.35,scaleY:0.35},0).wait(1).to({scaleX:0.39,scaleY:0.39},0).wait(1).to({scaleX:0.44,scaleY:0.44},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({regX:24.8,regY:0.3,scaleX:0.22,scaleY:0.22,x:391.3,y:449.2},0).wait(1).to({regX:25,regY:0.5,scaleX:0.26,scaleY:0.26},0).wait(1).to({scaleX:0.31,scaleY:0.31},0).wait(1).to({scaleX:0.35,scaleY:0.35},0).wait(1).to({scaleX:0.39,scaleY:0.39,y:449.3},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:449.2},0).wait(1).to({scaleX:0.22,scaleY:0.22,x:461.7,y:522.1},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.32,scaleY:0.32},0).wait(1).to({scaleX:0.38,scaleY:0.38},0).wait(1).to({scaleX:0.43,scaleY:0.43},0).wait(1).to({scaleX:0.48,scaleY:0.48},0).wait(1).to({scaleX:0.22,scaleY:0.22},0).wait(1).to({scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.31,scaleY:0.31},0).wait(1).to({scaleX:0.36,scaleY:0.36},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({scaleX:0.45,scaleY:0.45},0).wait(1).to({regX:24.8,scaleX:0.22,scaleY:0.22,x:339.7,y:595.1},0).wait(1).to({regX:25,scaleX:0.28,scaleY:0.28},0).wait(1).to({scaleX:0.33,scaleY:0.33},0).wait(1).to({scaleX:0.38,scaleY:0.38},0).wait(1).to({scaleX:0.44,scaleY:0.44,x:339.8},0).wait(1).to({regX:24.8,scaleX:0.22,scaleY:0.22,x:339.7},0).wait(1).to({regX:25,scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.31,scaleY:0.31},0).wait(1).to({scaleX:0.35,scaleY:0.35},0).wait(1).to({scaleX:0.4,scaleY:0.4},0).wait(1).to({regX:24.8,regY:0.3,scaleX:0.22,scaleY:0.22,x:474.2,y:607.7},0).wait(1).to({regX:25,regY:0.5,scaleX:0.27,scaleY:0.27},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:474.3},0).wait(1).to({scaleX:0.37,scaleY:0.37,y:607.8},0).wait(1).to({regX:24.8,regY:0.3,scaleX:0.22,scaleY:0.22,x:239,y:580},0).wait(1).to({regX:25,regY:0.5,scaleX:0.29,scaleY:0.29,x:239.1},0).wait(1).to({scaleX:0.36,scaleY:0.36,y:580.1},0).wait(1).to({scaleX:0.43,scaleY:0.43,y:580},0).to({_off:true},1).wait(64));

	// Island
	this.instance_8 = new lib.Island();
	this.instance_8.parent = this;
	this.instance_8.setTransform(394.3,497.4,1,1,0,0,0,25,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(134).to({rotation:0.3,y:503.3},0).wait(1).to({rotation:0.6,y:509.1},0).wait(1).to({rotation:0.9,y:514.9},0).wait(1).to({rotation:1.2,y:520.8},0).wait(1).to({rotation:1.5,y:526.6},0).wait(1).to({rotation:1.8,y:532.4},0).wait(1).to({rotation:2.1,y:538.3},0).wait(1).to({rotation:2.4,y:544.1},0).wait(1).to({rotation:2.8,y:549.9},0).wait(1).to({rotation:3.1,x:394.2,y:555.8},0).wait(1).to({rotation:3.4,y:561.6},0).wait(1).to({rotation:3.7,y:567.4},0).wait(1).to({rotation:4,y:573.3},0).wait(1).to({rotation:4.3,x:394.3,y:579.1},0).wait(1).to({rotation:4.6,x:394.2,y:584.9},0).wait(1).to({rotation:4.9,y:590.8},0).wait(1).to({rotation:5.2,y:596.6},0).wait(1).to({rotation:5.5,x:394.3,y:602.4},0).wait(1).to({rotation:5.8,x:394.2,y:608.3},0).wait(1).to({rotation:6.1,y:614.1},0).wait(1).to({rotation:6.4,x:394.3,y:619.9},0).wait(1).to({rotation:6.7,y:625.8},0).wait(1).to({rotation:7,x:394.2,y:631.6},0).wait(1).to({rotation:7.3,x:394.3,y:637.4},0).wait(1).to({rotation:7.7,y:643.3},0).wait(1).to({rotation:8,y:649.1},0).wait(1).to({rotation:8.3,y:655},0).wait(1).to({rotation:8.6,y:660.8},0).wait(1).to({rotation:8.9,x:394.2,y:666.6},0).wait(1).to({rotation:9.2,x:394.3,y:672.5},0).wait(1).to({rotation:9.5,x:394.2,y:678.3},0).wait(1).to({rotation:9.8,y:684.1},0).wait(1).to({rotation:10.1,y:690},0).wait(1).to({rotation:10.4,x:394.3,y:695.8},0).wait(1).to({rotation:10.7,x:394.2,y:701.6},0).wait(1).to({rotation:11,x:394.3,y:707.5},0).wait(1).to({rotation:11.3,x:394.2,y:713.3},0).wait(1).to({rotation:11.6,x:394.3,y:719.2},0).wait(1).to({rotation:11.9,x:394.2,y:725},0).wait(1).to({rotation:12.2,x:394.3,y:730.8},0).wait(1).to({rotation:12.5,y:736.7},0).wait(1).to({rotation:12.9,x:394.2,y:742.5},0).wait(1).to({rotation:13.2,x:394.3,y:748.3},0).wait(1).to({rotation:13.5,y:754.1},0).wait(1).to({rotation:13.8,y:760},0).wait(1).to({rotation:14.1,y:765.9},0).wait(1).to({rotation:14.4,y:771.7},0).wait(1).to({rotation:14.7,x:394.2,y:777.5},0).wait(1).to({rotation:15,y:783.3},0).wait(1).to({rotation:15.3,y:789.2},0).wait(1).to({rotation:15.6,x:394.3,y:795},0).wait(1).to({rotation:15.9,x:394.2,y:800.8},0).wait(1).to({rotation:16.2,y:806.7},0).wait(1).to({rotation:16.5,y:812.5},0).wait(1).to({rotation:16.8,x:394.3,y:818.4},0).wait(1).to({rotation:17.1,y:824.2},0).wait(1).to({rotation:17.4,x:394.2,y:830},0).wait(1).to({rotation:17.8,y:835.8},0).wait(1).to({rotation:18.1,y:841.7},0).wait(1).to({rotation:18.4,x:394.3,y:847.5},0).wait(1).to({rotation:18.7,y:853.3},0).wait(46));

	// MountainBig
	this.instance_9 = new lib.MountainBig();
	this.instance_9.parent = this;
	this.instance_9.setTransform(326.2,288.5,1,1,0,0,0,25,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(134).to({rotation:5.7,x:305.7,y:277.2},0).wait(1).to({rotation:11.4,x:285.2,y:265.9},0).wait(1).to({rotation:17.1,x:264.8,y:254.5},0).wait(1).to({rotation:22.9,x:244.3,y:243.2},0).wait(1).to({rotation:28.6,x:223.8,y:231.9},0).wait(1).to({rotation:34.3,x:203.3,y:220.6},0).wait(1).to({rotation:40,x:182.8,y:209.3},0).wait(1).to({rotation:45.7,x:162.3,y:197.9},0).wait(1).to({rotation:51.4,x:141.8,y:186.6},0).wait(1).to({rotation:57.1,x:121.3,y:175.3},0).wait(1).to({rotation:62.9,x:100.8,y:164},0).wait(1).to({rotation:68.6,x:80.4,y:152.6},0).wait(1).to({rotation:74.3,x:59.8,y:141.3},0).wait(1).to({rotation:80,x:39.4,y:130},0).wait(1).to({rotation:85.7,x:18.9,y:118.7},0).wait(1).to({rotation:91.4,x:-1.5,y:107.4},0).wait(1).to({rotation:97.1,x:-22,y:96},0).wait(1).to({rotation:102.9,x:-42.5,y:84.7},0).wait(1).to({rotation:108.6,x:-62.9,y:73.4},0).wait(1).to({rotation:114.3,x:-83.5,y:62.1},0).wait(1).to({rotation:120,x:-104,y:50.7},0).wait(86));

	// MountainMedium
	this.instance_10 = new lib.MountainMedium();
	this.instance_10.parent = this;
	this.instance_10.setTransform(507,306,1,1,0,0,0,242,237.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(129).to({rotation:5.7,x:525.6,y:296},0).wait(1).to({rotation:11.4,x:544.2,y:286},0).wait(1).to({rotation:17.1,x:562.8,y:276.1},0).wait(1).to({rotation:22.9,x:581.5,y:266.1},0).wait(1).to({rotation:28.6,x:600.1,y:256.2},0).wait(1).to({rotation:34.3,x:618.7,y:246.2},0).wait(1).to({rotation:40,x:637.4,y:236.3},0).wait(1).to({rotation:45.7,x:656,y:226.3},0).wait(1).to({rotation:51.4,x:674.6,y:216.3},0).wait(1).to({rotation:57.1,x:693.3,y:206.4},0).wait(1).to({rotation:62.9,x:711.9,y:196.4},0).wait(1).to({rotation:68.6,x:730.5,y:186.4},0).wait(1).to({rotation:74.3,x:749.2,y:176.4},0).wait(1).to({rotation:80,x:767.7,y:166.5},0).wait(1).to({rotation:85.7,x:786.4,y:156.5},0).wait(1).to({rotation:91.4,x:805.1,y:146.6},0).wait(1).to({rotation:97.1,x:823.7,y:136.6},0).wait(1).to({rotation:102.9,x:842.3,y:126.7},0).wait(1).to({rotation:108.6,x:860.9,y:116.7},0).wait(1).to({rotation:114.3,x:879.5,y:106.7},0).wait(1).to({rotation:120,x:898.2,y:96.7},0).wait(91));

	// MountainSmall
	this.instance_11 = new lib.MountainSmall();
	this.instance_11.parent = this;
	this.instance_11.setTransform(428.5,318.8,1,1,0,0,0,25,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(129).to({rotation:5.4,y:300.5},0).wait(1).to({rotation:10.9,y:282.2},0).wait(1).to({rotation:16.3,y:264},0).wait(1).to({rotation:21.7,y:245.7},0).wait(1).to({rotation:27.1,y:227.4},0).wait(1).to({rotation:32.6,y:209.1},0).wait(1).to({rotation:38,y:190.9},0).wait(1).to({rotation:43.4,y:172.6},0).wait(1).to({rotation:48.9,y:154.4},0).wait(1).to({rotation:54.3,y:136.1},0).wait(1).to({rotation:59.7,y:117.8},0).wait(1).to({rotation:65.1,y:99.5},0).wait(1).to({rotation:70.6,y:81.3},0).wait(1).to({rotation:76,y:63},0).wait(1).to({rotation:81.4,y:44.7},0).wait(1).to({rotation:86.9,y:26.5},0).wait(1).to({rotation:92.3,y:8.3},0).wait(1).to({rotation:97.7,y:-10},0).wait(1).to({rotation:103.2,y:-28.3},0).wait(1).to({rotation:108.6,y:-46.6},0).wait(1).to({rotation:114,y:-64.8},0).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(410.4,365.4,2815.1,621.7);
// library properties:
lib.properties = {
	id: '467D5132E8783342B0065161FB9B3926',
	width: 800,
	height: 600,
	fps: 24,
	color: "#29ABE2",
	opacity: 1.00,
	manifest: [
		{src:"images/Bitmap1.png?1505887932333", id:"Bitmap1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['467D5132E8783342B0065161FB9B3926'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
