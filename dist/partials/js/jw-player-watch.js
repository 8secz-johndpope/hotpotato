
//vidDuration = valueStop.value - valueStart.value;

if (typeof vidLink === 'undefined') {
    vidLink = document.getElementById("InputYouTubeLink").value;
    picLink = document.getElementById("ImageLink").value;
}

if (typeof inPoint === 'undefined') {
    inPoint = document.getElementById("InTimeCode").value;
    outPoint = document.getElementById("OutTimeCode").value;
    if (inPoint.indexOf(',') > -1 ) {
        var editLength = inPoint.length;
    } else {
        var editLength = 1;
    }
    inPoint = inPoint.split(',');
    outPoint = outPoint.split(',');
}

if ( typeof valueStart !== 'undefined' && valueStart.value === "") {
    valueStart.value = inPoint[0];
    valueStop.value = outPoint[0];
    vidDuration = valueStop.value - valueStart.value;
}

currentCut = 0;
userEditCounter = 4;
userViewMode=0;
videoLoadSwitch = 5;
totalCutNumber = editLength;
if (editLength > 1) {
    userEditCounter = 4;
    videoLoadSwitch = 4;

}

    if (editLength > 1) {
        for (var i = 0; i < (editLength); i++) {
            document.getElementById("cut" + i + "-tableElement").style.display = "";
        }
    }


function repeatVid(){
    jwplayer("videoPlaybackFrame").seek(valueStart.value);
    userViewMode = 2;
}
function viewOriginalVideo(){
    userViewMode=-2;
    videoLoadSwitch = 0;
    document.getElementById("viewOriginalVideo").style.display="none";
    document.getElementById("viewVideoEdit").style.display="";
}
function viewVideoEdit(){
    userViewMode=0;
    videoLoadSwitch = 5;
    document.getElementById("viewVideoEdit").style.display="none";
    document.getElementById("viewOriginalVideo").style.display="";
}
function assignVideoPlayback (editNumber){
    userViewMode=2;
    currentCut=editNumber;
    jwplayer("videoPlaybackFrame").seek(inPoint[currentCut]);
}

// if (matchMedia('only screen and (max-width: 650px)').matches) {
//     jwplayer().load([{width: 960,height: 540}]);
// };


