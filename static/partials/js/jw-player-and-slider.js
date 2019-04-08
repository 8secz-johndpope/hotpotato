
var currentCut=0;
var totalCutNumber=0;
var ProgressBarBefore;
var ProgressBarDuring;
var ProgressBarAfter;
var userEditCounter = 0;
var vidDuration;
var videoLoadSwitch = 0;
var videoProgress;
var realVal;

var relativePos;
var relativeEnd;

var url = window.location.toString();
var slider = document.getElementById("slider");
var sliderDbl = document.getElementById("sliderDbl");
slider.style.display = 'none';
sliderDbl.style.display = '';
//var shortYTLink;
//var inputYTLink = "https://www.youtube.com/watch?v=yJDRop2ocFo";
var vidWidth=$("#responsiveVideoFrame").width();
var vidHeight=(vidWidth*0.5625);
var shortYTLink = inputYTLink=vidLink;
var tempOutputYoutubeLink;
var valueStart = document.getElementById("value-start");
var valueStop = document.getElementById("value-stop");

noUiSlider.create(slider, {
    start: [null],
    connect:"lower",
    range: {
        "min": 0,
        "max": 100
    }
});
noUiSlider.create(sliderDbl, {
    start: [null,100],
    connect:true,
    range: {
        "min": 0,
        "max": 100
    }
});


var SliderVal;
var handleVal;

// When the slider value changes, update the input and span
slider.noUiSlider.on("change", function( values, handle ) {
    var userEditCounterOld = userEditCounter;
    userEditCounter=-1;

    handleVal = values[handle];
    sliderVal = (values[handle]/100)*vidDuration;
    if (jwplayer("videoPlaybackFrame").getState === 'playing' || jwplayer("videoPlaybackFrame").getState === 'paused' ) {
        jwplayer("videoPlaybackFrame").seek(sliderVal);
    } else {
        jwplayer("videoPlaybackFrame").play();
        setTimeout(function () {
            sliderVal = (handleVal/100)*vidDuration;
            jwplayer("videoPlaybackFrame").seek(sliderVal);
            handleVal = undefined;
        },400);
    }
    if ( handle ) {
        valueStop.value = values[handle];
        inPoint[currentCut] = sliderVal;
    } else {
        valueStart.value = values[handle];
    }
    setTimeout(function(){
        userEditCounter = userEditCounterOld;
    },200);
});
slider.noUiSlider.on("start", function( values, handle ) {
    userEditCounter=-1;
});
sliderDbl.noUiSlider.on("start", function( values, handle ) {
    userEditCounter=-1;
});
sliderDbl.noUiSlider.on("change", function( values, handle ) {
    var userEditCounterOld = userEditCounter;
    userEditCounter=-1;
    sliderVal = (values[handle]/100)*vidDuration;
    jwplayer("videoPlaybackFrame").seek(sliderVal);
    if ( handle ) {
        valueStop.value = values[handle];
        outPoint[currentCut] = sliderVal.toPrecision(4);
        //setTimeout(function () {
        videoOutPoint('slider',outPoint[currentCut]);
        //})
    } else {
        valueStart.value = values[handle];
        inPoint[currentCut] = sliderVal.toPrecision(4);
        console.log('inPoint', inPoint[currentCut]);
        //setTimeout(function () {
        videoInPoint('slider',inPoint[currentCut]);
        //});
    }
    setTimeout(function(){
        myTimer();
    },200);
    function myTimer() {  userEditCounter = userEditCounterOld;  }
});


// When the input changes, set the slider value
// valueStart.addEventListener("change", function(){
//   slider.noUiSlider.set([null, this.value]);
// });
// valueStop.addEventListener("change", function(){
//   slider.noUiSlider.set([null, this.value]);
// });

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

if (typeof picLink !== 'undefined') {
    jwplayer("videoPlaybackFrame").setup({
        file: decodeURIComponent( vidLink ),
        image: picLink,
        width: vidWidth,
        height: vidHeight,
        stretching: "fill",
        displaytitle: false,
        displaydescription: false,
        nextUpDisplay: false,
        autostart: true
    });

} else {
    jwplayer("videoPlaybackFrame").setup({
        file: vidLink,
        width: vidWidth,
        height: vidHeight,
        stretching: "fill"
    });
}


// if (matchMedia("only screen and (max-width: 650px)").matches) {
//     jwplayer().load([{width: 960,height: 540}]);
// };
jwplayer("videoPlaybackFrame").on('play', function() {
    document.getElementById("videoTimeline").style.display="";
    if (  document.getElementById('loadVideoButton') !== null ) {
        document.getElementById("loadVideoButton").style.display = "none";
        document.getElementById("changeVideoButton").style.display="";
    }
    //document.getElementById("playPauseSpan").className="glyphicon glyphicon-pause";
    document.getElementById("playPauseButton").style.display ="";
});
jwplayer("videoPlaybackFrame").on('play pause', function() {
    // if (  document.getElementById('videoInPoint') !== null ) {
    //     document.getElementById('videoInPoint').disabled = false;
    // }
    jwplayer("videoPlaybackFrame").setMute(false);
    if (jwplayer("videoPlaybackFrame").getState()=="playing"){
        document.getElementById("playPauseSpan").className="glyphicon glyphicon-pause";
    } else if (jwplayer("videoPlaybackFrame").getState()=="paused" || jwplayer("videoPlaybackFrame").getState()=="BUFFERING"){
        document.getElementById("playPauseSpan").className="glyphicon glyphicon-play";
    }
});

function playPauseVideo(){
    jwplayer("videoPlaybackFrame").setMute(false);
    jwplayer("videoPlaybackFrame").play();
    // if (jwplayer("videoPlaybackFrame").getState()=="PLAYING"){
    //   document.getElementById("playPauseSpan").className="glyphicon glyphicon-play";
    // } else if (jwplayer("videoPlaybackFrame").getState()=="PAUSED" || jwplayer("videoPlaybackFrame").getState()=="BUFFERING"){
    //   document.getElementById("playPauseSpan").className="glyphicon glyphicon-pause";
    // }
}

// setTimeout(function () {
//     playPauseVideo();
// }, 700);
// setTimeout(function () {
//     //playPauseVideo();
//     document.getElementById('videoPlaybackFrame').click();
// },1750);
// jwplayer('videoPlaybackFrame').onReady(function() {
//     window.setTimeout(function(){jwplayer('videoPlaybackFrame').play();},1);
// });

function videoInPoint(type, val){
    inPoint[currentCut] = jwplayer("videoPlaybackFrame").getPosition();
    if (typeof type !== 'undefined' && type === 'slider') {
        inPoint[currentCut] = val;
    } else {
        userEditCounter = 1;
        videoLoadSwitch=1;
        $("#slider").hide();
    }
    console.log('in time',inPoint[currentCut]);
    var timeVal = (inPoint[currentCut]/vidDuration)*100;
    timeVal = timeVal.toPrecision(4);
    document.getElementById("InTimeCode").value=inPoint[currentCut];
    valueStart.value = inPoint[currentCut];
    sliderDbl.noUiSlider.set([timeVal,null]);

    //sliderDbl = document.getElementById("sliderDbl");
    // noUiSlider.create(sliderDbl, {
    //   start: [timeVal,timeVal],
    //   connect:true,
    //   range: {
    //     "min": 0,
    //     "max": 100
    //   }
    // });

    // var element=document.createElement("script");
    // element.setAttribute('id', 'uislider-script');
    // element.id="{{$entry -> country}}";
    // element.style.display="none";\
    if(totalCutNumber>0){
        //sliderDbl.noUiSlider.destroy();
    }
    // element.innerHTML = '';
    // document.body.appendChild(element);

    //slider.noUiSlider.destroy();
    $("#sliderDbl").show();

    document.getElementById("videoNoPoint").style.display="";
    //document.getElementById("videoInPoint").disabled=true;
    document.getElementById("videoInPoint").style.display="";
    // document.getElementById("submitEdit").style.display="none";
    // document.getElementById("previewEdit").style.display="";
    document.getElementById('previewEdit').disabled=true;
    document.getElementById("videoInPoint").disabled=false;
    document.getElementById("videoOutPoint").disabled=false;
    document.getElementById("addEdit").style.visibility="hidden";

    setTimeout(function(){myTimer()},200);
    function myTimer() {
        document.getElementById("videoNoPoint").style.display="none";
        document.getElementById("videoOutPoint").style.display="";
    }
}

function videoOutPoint(type, val){
    outPoint[currentCut]= jwplayer("videoPlaybackFrame").getPosition();
    if (typeof type !== 'undefined' && type === 'slider') {
        outPoint[currentCut] = val;
    } else {
        userEditCounter=4;
        videoLoadSwitch=5;
        document.getElementById("videoInPoint").disabled=true;
        document.getElementById("videoOutPoint").disabled=true;
        document.getElementById('slider').style.display = '';
    }
    console.log( outPoint[currentCut] );
    var timeVal = (outPoint[currentCut]/vidDuration)*100;
    timeVal = timeVal.toPrecision(4);
    slider.noUiSlider.set([ timeVal ]);
    sliderDbl.noUiSlider.set([null,timeVal]);
    document.getElementById("OutTimeCode").value=outPoint[currentCut];
    // slider.noUiSlider.destroy();
    // noUiSlider.create(slider, {
    //   start: [null, null],
    //   connect:"upper",
    //   range: {
    //     "min": 0,
    //     "max": 100
    //   }
    // });

    document.getElementById("submitEdit").disabled=false;
    document.getElementById("previewEdit").disabled=false;
    document.getElementById("previewEdit").style.visibility="";
    //document.getElementById("videoOutPoint").style.display="none";
    document.getElementById("videoNoPoint").style.display="";
    document.getElementById("submitEdit").className = "btn btn-warning";
    document.getElementById("submitEdit").style.color="#000";
    document.getElementById("addEdit").style.visibility="";
    if ( currentCut > 0 ) {
        document.getElementById("playbackAllEdits").style.visibility="";
    }
    displayTableElement(currentCut);
    //console.log(outPoint[currentCut]);
    //   document.getElementById('uislider-script').remove();
    //   var element=document.createElement("script");
    //   element.setAttribute('id', 'uislider-script');
    //   element.innerHTML = '';
    //   document.body.appendChild(element);
    // $("#sliderDbl").hide();
    // $("#slider").show();
    //totalCutNumber++;

    setTimeout(function(){myTimer()},200);
    function myTimer() {
        document.getElementById("videoNoPoint").style.display="none";
        document.getElementById("videoInPoint").style.display="";
    }

}

// jwplayer("videoPlaybackFrame").on("ready", function (event){
//   userEditCounter=0;
// });

$( document ).ready(function () {
    function seekPlayerToTimeCodeInput(el) {
        var hms = $(el).val();   // your input string
        var a = hms.split(':'); // split it at the colons
        // minutes are worth 60 seconds. Hours are worth 60 minutes.
        var seconds = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);

        jwplayer("videoPlaybackFrame").seek( seconds );
        $(el).removeClass('position');
        $(el).addClass('current');
    }

    $('.current.timecode').on('focus', function () {
        //console.log('focus');
        $(this).addClass('position');
        $(this).removeClass('current');
    });

    $('.timecode.real').on('blur', function () {
        seekPlayerToTimeCodeInput(this);
    });
    $('.timecode.real').on('keyup', function (event) {
        if (event.keyCode === 13) {
            seekPlayerToTimeCodeInput(this);
        }
    });
});
$( window ).resize(function () {
    jwplayer("videoPlaybackFrame").resize(
        $('#responsiveVideoFrame').width(), $('#responsiveVideoFrame').outerHeight()
    );
});

jwplayer("videoPlaybackFrame").onTime(function (event){
    var realVal = event.position;
    var date = new Date(null);
    date.setSeconds( Math.round( realVal ) ); // specify value for SECONDS here
    var timeString = date.toISOString().substr(11, 8);
    $('.current.timecode').val( timeString );
    vidDuration = jwplayer("videoPlaybackFrame").getDuration();

    if (userEditCounter==0){
        ProgressBarBefore = (realVal/vidDuration);
        ProgressBarBefore = ProgressBarBefore*100;
        ProgressBarBefore = ProgressBarBefore.toPrecision(4);
        if ( handleVal === undefined ) {
            slider.noUiSlider.set([ProgressBarBefore]);
            if (sliderDbl) {
                sliderDbl.noUiSlider.set([ProgressBarBefore, null]);
            }
        }
        //sliderDbl.noUiSlider.set([ProgressBarBefore,ProgressBarBefore]);
    } else if (userEditCounter==1){
        ProgressBarDuring = (realVal/vidDuration);
        ProgressBarDuring = ProgressBarDuring*100;
        ProgressBarDuring = ProgressBarDuring.toPrecision(6);

        sliderDbl.noUiSlider.set([null,ProgressBarDuring]);
        // ProgressBarDuring = (realVal/vidDuration);
        // ProgressBarDuring = ProgressBarDuring*100;
        // ProgressBarDuring = ProgressBarDuring.toPrecision(4);
        // ProgressBarDuring = ProgressBarDuring;
        // valueStop.value = ProgressBarDuring;
    } else if (userEditCounter==2){
        ProgressBarDuring = ((outPoint[currentCut]-inPoint[currentCut])/vidDuration);
        ProgressBarDuring = (realVal/vidDuration);
        ProgressBarDuring = ProgressBarDuring*100;
        ProgressBarDuring = ProgressBarDuring.toPrecision(6);
        sliderDbl.noUiSlider.set([null,ProgressBarDuring]);
        slider.noUiSlider.set([ProgressBarDuring]);
        // ProgressBarAfter = ((realVal-outPoint[currentCut])/vidDuration);
        // ProgressBarAfter = ProgressBarAfter*100;
        // ProgressBarAfter = ProgressBarAfter.toPrecision(2);
        // //$("#OutputYouTubeLink").html(progressBar1);
        // document.getElementById("postOutVis").style.width =(ProgressBarAfter+"%");
    } else if (userEditCounter==4){
        relativePos = realVal - inPoint[currentCut];
        relativeEnd = outPoint[currentCut]-inPoint[currentCut];
        ProgressBarDuring =(relativePos/relativeEnd);
        ProgressBarDuring = ProgressBarDuring*100;
        ProgressBarDuring = ProgressBarDuring.toPrecision(2);
        slider.noUiSlider.set([ProgressBarDuring]);
        if (sliderDbl) {
            //sliderDbl.noUiSlider.set([inPoint[currentCut],outPoint[currentCut]]);
        }
        // console.log(relativePos,relativeEnd)
        // document.getElementById("editVis").style.width =(ProgressBarDuring+"%");
    }

    if (videoLoadSwitch==4){
        //console.log( videoLoadSwitch );
        // console.log('currentCut',currentCut,totalCutNumber,realVal > outPoint[currentCut],currentCut >= totalCutNumber);
        if (currentCut >= (totalCutNumber -1 ) && realVal > outPoint[currentCut]){

            jwplayer("videoPlaybackFrame").pause(true);
        } else if (realVal > outPoint[currentCut] && realVal < inPoint[currentCut+1]){
            currentCut++;
            // console.log('currentCut',currentCut,inPoint[currentCut], inPoint);
            jwplayer("videoPlaybackFrame").seek(inPoint[currentCut]);
            console.log(currentCut+', 1');
            $('.clips tr').removeClass('active');
            $('#cut' + currentCut + '-tableElement').addClass('active');
        } else if (realVal < inPoint[currentCut] ){
            jwplayer("videoPlaybackFrame").seek(inPoint[currentCut]);
            console.log(currentCut+', currentCut');
            $('.clips tr').removeClass('active');
            $('#cut' + currentCut + '-tableElement').addClass('active');
        }
    } else if (videoLoadSwitch==5){
        // console.log('inPoint',inPoint[currentCut] );
        if (realVal < inPoint[currentCut] || realVal > outPoint[currentCut] ){
            jwplayer("videoPlaybackFrame").seek(inPoint[currentCut]);
            console.log(currentCut+', currentCut');
            $('.clips tr').removeClass('active');
            $('#cut' + currentCut + '-tableElement').addClass('active');
        }
    }
});


