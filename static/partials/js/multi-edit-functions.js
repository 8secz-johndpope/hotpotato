function assignVideoPlayback(editNumber, button) {
    currentCut = editNumber;
    userEditCounter = 4;
    videoLoadSwitch = 5;
    $("#sliderDbl").hide();
    $("#slider").show();
    //jwplayer("videoPlaybackFrame").pause();
    //jwplayer("videoPlaybackFrame").seek( 0 );
    jwplayer("videoPlaybackFrame").seek(inPoint[currentCut]);
    $('.clips > tr').removeClass('active');
    $(button).addClass('active');
    $('.bg-dark').attr('disabled', true);
    $('#exitPreviewEdit').attr('disabled', false);
    $('.exitPreviewEdit').removeClass('hidden');
}
function exitPreviewEdit() {
    $("#sliderDbl").show();
    $("#slider").hide();
    videoLoadSwitch=1;
    userEditCounter=1;
    $('.bg-dark').attr('disabled', false);
    $('.exitPreviewEdit').addClass('hidden');
}

function displayTableElement(editNumber) {
    document.getElementById("cut" + editNumber + "-tableElement").style.display = "";
}

function reloadVideoInput() {
    // location.reload();
    document.getElementById("InputYouTubeLink").value = "";
    document.getElementById("inputRowOne").style.display = "";
    document.getElementById("InputYouTubeLink").style.display = "";
    document.getElementById("changeVideoButton").style.display = "none";
    document.getElementById("videoTimeline").style.display = "none";
    document.getElementById("videoInPoint").disabled = true;
    document.getElementById("videoOutPoint").disabled = true;
    // document.getElementById("submitEdit").style.display="none";
    document.getElementById("previewEdit").style.display = "";
    document.getElementById("previewEdit").disabled = true;
    document.getElementById("SingleOrMulti").value = 0;
    inPoint = [];
    outPoint = [];
    videoLoadSwitch = 1;
    videoEdit = 1;
    jwplayer("videoPlaybackFrame").pause(true);
    waitForUserSelection = 0;
}

function addEdit() {
    if (totalCutNumber >= 10) {
        alert("Sorry you&apos;ve reached the maxiumium number of free edits.  Sign Up For Unlimited Edits!")
    }
    else {
        document.getElementById("SingleOrMulti").value = 1;
        //if ( document.getElementById("SingleOrMulti").value == 1 ) {
        totalCutNumber++;
        currentCut++;

        // document.getElementById("previousEdit").style.display="";
// 						document.getElementById("lastEdit").style.display="";
// 						document.getElementById("nextEdit").style.display="";
        // document.getElementById("editVis").style.width="";
        // document.getElementById("postOutVis").style.width="";
        document.getElementById("InTimeCode").value = "";
        document.getElementById("OutTimeCode").value = "";
        // noUiSlider.create(slider, {
        //     start: [null],
        //     connect: "lower",
        //     range: {
        //         "min": 0,
        //         "max": 100
        //     }
        // });

        var valueStart = document.getElementById("value-start");
        var valueStop = document.getElementById("value-stop");
        // var element = document.createElement("script");
        //
        // $(element).html(
        //     slider.noUiSlider.on("change", function (values, handle) {
        //         var userEditCounterOld = userEditCounter;
        //         userEditCounter = -1;
        //         sliderVal = (values[handle] / 100) * vidDuration;
        //         jwplayer("videoPlaybackFrame").seek(sliderVal);
        //         if (handle) {
        //             valueStop.value = values[handle];
        //             //inPoint[currentCut] = values[handle];
        //         } else {
        //             valueStart.value = values[handle];
        //             //outPoint[currentCut] = values[handle];
        //         }
        //         ;setTimeout(function () {
        //             myTimer()
        //         }, 200);
        //
        //         function myTimer() {
        //             userEditCounter = userEditCounterOld;
        //         }
        //     })
        // );
        //
        // sliderDbl.noUiSlider.destroy();
        // document.body.appendChild(element);

        $("#sliderDbl").hide();
        $("#slider").show();
        userEditCounter = 0;
        videoLoadSwitch = 1;
        document.getElementById("editTimelineButtons").style.display = "";
        // } else {
        //   var url = window.location.href;
        //   var query = url.split("indexToEditor.php");
        //   url= window.location.toString() +"&SingleOrMulti=1";
        //   window.location.assign(url);
        // }
    }
}

function previewEdit() {
    document.getElementById("submitEdit").style.display = "";
    document.getElementById("previewEdit").disabled = true;
    userEditCounter = 4;
    if (videoLoadSwitch !== 5) {
        videoLoadSwitch = 5;
    }
//userEditCounter=1;
    if (document.getElementById("postOutVis") !== null) {
        document.getElementById("postOutVis").style.width = "";
    }
}

function submitEdit() {
    var SingleOrMulti = document.getElementById("SingleOrMulti").value;
    if (parseInt(SingleOrMulti) == 1 || outPoint[currentCut] > 1) {
        var InTimeCode = document.getElementById("InTimeCode").value;
        InTimeCode = '';
        var OutTimeCode = document.getElementById("OutTimeCode").value;
        OutTimeCode = '';
        for (var i = 0; i < (outPoint.length); i++) {
            InTimeCode += (inPoint[i] + ",");
            OutTimeCode += (outPoint[i] + ",");
            // document.getElementById("editLength").value =($( "#editLength" ).val(),""",editLength[currentCut],"",");
// 					document.getElementById("cumulativeEditLength").value =($( "#cumulativeEditLength" ).val(),""",cumulativeEditLength[currentCut],"",");
        }
        InTimeCode = InTimeCode.slice(0, -1);
        OutTimeCode = OutTimeCode.slice(0, -1);
        document.getElementById("InTimeCode").value = InTimeCode;
        document.getElementById("OutTimeCode").value = OutTimeCode;
    }
    document.getElementById("outputLoadingBar").style.display = "";

    $("#collapseAltLink").html(inputYTLink);

    document.getElementById("createLink").click();
    $("form").slideUp();

//document.getElementById("videoPlayback").style.display ="";
    document.getElementById("outputButtons").style.display = "";
}

function previousEdit() {
    currentCut--;
    videoLoadSwitch = -1;
    userEditCounter = 1;
    document.getElementById("previousEditText").innerHTML = (" EDIT" + (currentCut));
    document.getElementById("nextEditText").innerHTML = (" EDIT" + (currentCut + 2));
//document.getElementById("postOutVis").style.width =("");
}

function nextEdit() {
    currentCut++;
    videoLoadSwitch = -1;
    userEditCounter = 1;
    document.getElementById("previousEditText").innerHTML = (" EDIT" + (currentCut));
    document.getElementById("nextEditText").innerHTML = (" EDIT" + (currentCut + 2));
}

function lastEdit() {
    currentCut = totalCutNumber;
    videoLoadSwitch = -1;
    userEditCounter = 1;
}


function playbackAllEdits() {
//document.getElementById("videoTimeline").style.display="";
//document.getElementById("preInVis").style.width="";
//document.getElementById("editVis").style.width="";
//document.getElementById("postOutVis").style.width="";
    var valueStart = document.getElementById("value-start");
    var valueStop = document.getElementById("value-stop");
    var element = document.createElement("script");
    // noUiSlider.create(slider, {
    //     start: [null],
    //     connect:"lower",
    //     range: {
    //         "min": 0,
    //         "max": 100
    //     }
    // });
    // $(element).html(
    //     slider.noUiSlider.on("change", function( values, handle ) {
    //         var userEditCounterOld = userEditCounter; userEditCounter=-1;
    //         sliderVal = (values[handle]/100)*vidDuration;
    //         jwplayer("videoPlaybackFrame").seek(sliderVal);
    //         if ( handle ) {
    //             valueStop.value = values[handle];
    //             //inPoint[currentCut] = values[handle];
    //         } else {
    //             valueStart.value = values[handle];
    //             //outPoint[currentCut] = values[handle];
    //         }; setTimeout(function(){
    //             myTimer()},200);
    //         function myTimer() {  userEditCounter = userEditCounterOld;  }
    //     })
    // );

    //sliderDbl.noUiSlider.destroy();
    //document.body.appendChild(element);
    $("#sliderDbl").hide();
    $("#slider").show();

    currentCut = 0;
    userEditCounter = 4;
    videoLoadSwitch = 4;
    $("#value-start").attr("display", "none");
    $("#value-stop").attr("display", "none");
    jwplayer("videoPlaybackFrame").seek(inPoint[currentCut]);
    $('.clips tr').removeClass('active');
    $('#cut' + currentCut + '-tableElement').addClass('active');
}
