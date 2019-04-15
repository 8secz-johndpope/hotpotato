$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

var userEditCounter = 0;
var inPoint = 0;
var outPoint;
var vidDuration;
var videoLoadSwitch = 0;
var videoProgress;
var waitForUserSelection=0;
var videoSource=1;

var shortYTLink;
var tempOutputYoutubeLink;
var inputYTLink = "https://www.youtube.com/watch?v=OFu_cHz4_ww";
var vidWidth=$("#responsiveVideoFrame").width();
var vidHeight=(vidWidth*0.5625);

function changeDemoImage (demoImage){
    if (demoImage==0){
        document.getElementById("demo-video-img").src="css/video-demo-transarency.png";
    }else if (demoImage==1){
        document.getElementById("demo-video-img").src="css/video-demo-transarency-hover.png";
    }
}


if ( document.getElementById('videoPlaybackFrame') !== null ) {

    jwplayer("videoPlaybackFrame").setup({
        file: inputYTLink,
        width: vidWidth,
        height: vidHeight,
        stretching: "fill",
        displaytitle: false,
        displaydescription: false,
        nextUpDisplay: false,
        image: "css/video-demo-transarency.png"
    });

    jwplayer("videoPlaybackFrame").on('complete', function () {
        //console.log('video ended');
        document.getElementById("demo-video-img").style.display = "";
    });
    jwplayer("videoPlaybackFrame").on('play pause', function () {
        jwplayer("videoPlaybackFrame").setMute(true);
    });

// if (matchMedia('only screen and (max-width: 650px)').matches) {
//     jwplayer().load([{width: 960,height: 540}]);
// };

    jwplayer("videoPlaybackFrame").onPlay(function () {
        document.getElementById("videoTimeline").style.display = "";
        //document.getElementById("loadVideoButton").style.display ="none";
        if (document.getElementById("playPauseSpan") !== null) {
            document.getElementById("playPauseSpan").className = "glyphicon glyphicon-pause";
            document.getElementById("playPauseButton").style.display = "";
            document.getElementById("changeVideoButton").style.display = "";
        }
    });
}

function initiateLiveVideoPlayer(){
    var inputVal = document.getElementById('InputYouTubeLink').value;
    if (inputVal !== "" && waitForUserSelection==0){
        getQueryVariable(videoSource);
    } else if (inputVal === "" && waitForUserSelection==0) {
        shortYTLink = "OFu_cHz4_ww";
    }
    // if (videoSource === 0 || waitForUserSelection<1){
    // jwplayer("videoPlaybackFrame").load([{file:inputYTLink}]);
    // videoLoadSwitch=1;
    // //document.getElementById('loadVideoButton').style.display ="none";
    //     if ( document.getElementById("playPauseSpan") !== null ) {
    //         document.getElementById("playPauseSpan").className = "glyphicon glyphicon-pause";
    //         document.getElementById('playPauseButton').style.display = "";
    //     }
    //
    // document.getElementById('editVis').style.width ="";
    // document.getElementById('postOutVis').style.width ="";
    // document.getElementById('inputRowOne').style.display="none";
    // document.getElementById('changeVideoButton').style.display="";
    // document.getElementById('videoInPoint').disabled=false;
    // document.getElementById('videoTimeline').style.display="";
    // userEditCounter=0;
    // jwplayer("videoPlaybackFrame").play();
    //document.getElementById("originalVideo-to-editor").click();
    //}
}

function playPauseVideo(){
    jwplayer("videoPlaybackFrame").play();
    if (jwplayer("videoPlaybackFrame").getState()=="PLAYING"){
        document.getElementById("playPauseSpan").className="glyphicon glyphicon-play";
    } else if (jwplayer("videoPlaybackFrame").getState()=="PAUSED" || jwplayer("videoPlaybackFrame").getState()=="BUFFERING"){
        document.getElementById("playPauseSpan").className="glyphicon glyphicon-pause";
    }
}

function formSubmit(event, el) {
    //if (event.keyCode === 13) {
    //initiateLiveVideoPlayer();
    //}
    if (waitForUserSelection !== -1) {
        event.preventDefault();
    }
    var inputVal = document.getElementById('InputYouTubeLink').value;
    if ( inputVal.length < 100 && inputVal.length > 1 ) {
        if ( inputVal.indexOf('http') > -1 || inputVal.indexOf('.c') > -1  ) {
            videoSource = 0;
        }
        if ( inputVal.indexOf('http') < 0 && inputVal.indexOf('.c') < 0 ) {
            videoSource = 1;
            waitForUserSelection=1;
        }
        getQueryVariable();
    } else {
        alert('Please enter a valid video link');
    }
}

function inputKeyup(event, el) {
    var inputVal = document.getElementById('InputYouTubeLink').value;
    if ( inputVal.length < 100 && inputVal.length > 3 ) {
        if ( inputVal.indexOf('http') > -1 || inputVal.indexOf('.c') > -1  ) {
            videoSource = 0;
        } else if ( inputVal.indexOf('http') < 0 && inputVal.indexOf('.c') < 0 ) {
            videoSource = 1;
            waitForUserSelection=1;
            getYouTubeVideoSearchData();
        }
    }
}
