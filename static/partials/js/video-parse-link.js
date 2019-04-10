var videoLinkArray=[];
var videoTitleArray=[];
var OAUTH2_SCOPES = [
    'https://www.googleapis.com/auth/youtube'
];
function checkAuth() {
    gapi.client.setApiKey('AIzaSyC6cK6HfIi67Flm0HKj1WwXZuUrU4HfCKU');
    gapi.auth.authorize({
        client_id: '52915606695-uhhve24us2s1deot9i1c1roc9970fete.apps.googleusercontent.com',
        scope: OAUTH2_SCOPES,
        immediate: true
    });
    loadAPIClientInterfaces();
}
function handleAuthResult(authResult) {
    if (authResult && !authResult.error) {
        // Authorization was successful. Hide authorization prompts and show
        // content that should be visible after authorization succeeds.
        $('.pre-auth').hide();
        $('.post-auth').show();
        loadAPIClientInterfaces();

    } else {
    }
}
// Load the client interfaces for the YouTube Analytics and Data APIs, which
// are required to use the Google APIs JS client. More info is available at
// http://code.google.com/p/google-api-javascript-client/wiki/GettingStarted#Loading_the_Client
function loadAPIClientInterfaces() {
    gapi.client.load('youtube', 'v3', function() {
        handleAPILoaded();
    });
}

// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
    $('#createLink').attr('disabled', false);

}

function getQueryVariable() {
    var userInput=$( '#InputYouTubeLink' ).val();
    var query;
    var vars;
    if (userInput.indexOf("youtube") > -1 && userInput.indexOf('googlevideo') < 0 ){
        query = userInput.split( "?" );
        vars = query[1].split("&");

        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == "v"){query= pair[1];}
        }
        shortYTLink = query;

        document.getElementById('ytVidCode').value=shortYTLink;
        inputYTLink = ( "https://www.youtube.com/watch?v=" + shortYTLink+'&modestbranding=1&autohide=1&showinfo=0&controls=0');
        getYouTubeVideoIdData();
        waitForUserSelection=-2;
    } else if (userInput.indexOf("youtu.be") > -1){
        vars = userInput.split( ".be/" );
        if (vars[1].indexOf('?') > -1) {
            query = vars[1].split("?");
        } else {
            query = vars;
        }
        shortYTLink = query[1];

        document.getElementById('ytVidCode').value=shortYTLink;
        inputYTLink = ( "https://www.youtube.com/watch?v=" + shortYTLink+'&modestbranding=1&autohide=1&showinfo=0&controls=0');
        getYouTubeVideoIdData();
        waitForUserSelection=-2;

    } else if (videoSource==1){
        waitForUserSelection=1;
        getYouTubeVideoSearchData();
        // alert("YouTube Link Error.  Preferably enter a YouTube link that starts with 'youtube.com/...' or 'youtu.be/...'");
    } else if (videoSource==0 || videoSource==3){

        shortYTLink = userInput;
        document.getElementById('ytVidCode').value=shortYTLink;
        document.getElementById("VideoSource").value=VideoSource;
        inputYTLink = (shortYTLink);
        waitForUserSelection=-2;
        launchEditor();

    } else if (videoSource==2){
        //  var value = "getFacebookVideoLink.php?link="+userInput;
        //  xhttp.open("GET", value, true);
        //  xhttp.send();
        inputYTLink = shortYTLink = userInput;
        inputYTLink = shortYTLink;
        document.getElementById('ytVidCode').value=shortYTLink;
        document.getElementById("VideoSource").value=2;
        waitForUserSelection=-2;
        launchEditor();
    }
}
// Search for a specified string.
function getYouTubeVideoSearchData() {
    var searchTerm = $('#InputYouTubeLink').val();

    var request = gapi.client.youtube.search.list({
        type: 'video',
        // videoSyndicated: 'true',
        maxResults: 11,
        q: searchTerm,
        part: 'snippet',
    });
    request.execute(function(response) {
        var str = JSON.stringify(response.result);
        $('#search-raw-data').html('<pre>' + str + '</pre>');

    });
    turnYouTubeDataIntoPresentableInformation();
}

function turnYouTubeDataIntoPresentableInformation() {
    setTimeout(function(){
        var searchResult = $('#search-raw-data').html();

        var queryMatch = searchResult.match(/videoId/g);
        var maxQuery = queryMatch.length;
        var query,queryTitle;
        var title;

        query = searchResult.split("videoId");
        queryTitle = searchResult.split("title");

        // videoLinkArray[0] = query[0].substr(3,11);
        // document.getElementById("videoThumbnail"+0).src=("https://i.ytimg.com/vi/"+videoLinkArray[0]+"/mqdefault.jpg");
        // queryTitle[0] = queryTitle[0].substr(3,65);
        // title = queryTitle[0].split('"');
        // videoTitleArray[1]=title[0];
        // //var value[maxQuery];
        // document.getElementById("videoTitle"+0).innerHTML=(videoTitleArray[0]);

        for (var i=1;i<=maxQuery;i++) {
            query[i].split("videoId");
            videoLinkArray[i] = query[i].substr(3,11);
            document.getElementById("videoThumbnail"+(i-1)).src=("https://i.ytimg.com/vi/"+videoLinkArray[i]+"/mqdefault.jpg");
            document.getElementById("videoThumbnail"+(i-1)).parentElement.style.backgroundImage="url(https://i.ytimg.com/vi/"+videoLinkArray[i]+"/mqdefault.jpg)";

            queryTitle[i].split("title");
            queryTitle[i] = queryTitle[i].substr(3,65);
            title = queryTitle[i].split('"');
            videoTitleArray[i]=title[0];
            document.getElementById("videoTitle"+(i-1)).innerHTML=(videoTitleArray[i]);
        }

        document.getElementById("resultListing").style.display="";
        console.log('resultLisitng',document.getElementById("resultListing").style.display);
        // $('#search-results').html(value);
    },125);
    setTimeout(function(){
        if (document.getElementById("resultListing").style.display=="none"){
            getYouTubeVideoSearchData();
        }
    },150);
}
// function YtApiRunCheck(){
// 		 setTimeout(function(){
// 		 	if (document.getElementById("resultListing").style.display=="none"){
//
// 		 	}
// 		 },375);
// 	 	}

function getYouTubeVideoIdData() {
    // var videoId = shortYTLink;
    var request = gapi.client.youtube.videos.list({
        id: shortYTLink,
        part: 'snippet',
    });
    request.execute(function(response) {
        var str = JSON.stringify(response.result);
        $('#search-raw-data').html('<pre>' + str + '</pre>');
        var searchIdResult = document.getElementById("search-raw-data").innerHTML;
        var query = searchIdResult.split("title");
        query[1] = query[1].substr(3,65);
        var title = query[1].split('"');
        document.getElementById("ytVideoTitle").value=(title[0]);
        document.getElementById("video-title").innerHTML="<h3>"+title[0]+"</h3>";
        launchEditor();
    });
    // setTimeout(function(){turnYtVideoIdDataIntoPresentableInformation()},315);
}
// function turnYtVideoIdDataIntoPresentableInformation() {
// 	  			var searchResult = document.getElementById("search-raw-data").innerHTML;
//
// 	  			var query;
// 				var title;
// 				console.log(searchResult);
// 	  			query = searchResult.split("title");
//
// 	    		query[1] = query[1].substr(3,65);
// 	  			title = query[1].split('"');
// 				videoTitleArray[1]=title;
// 	  			document.getElementById("ytVideoTitle").value=(title);
// 	     		document.getElementById("video-title").innerHTML="<h3>"+title+"</h3>";
// 	  		}
function assignSearchVideoPlayback(videoSearchNumber){
    shortYTLink=videoLinkArray[videoSearchNumber];
    waitForUserSelection=-1;

    document.getElementById('ytVidCode').value=shortYTLink;
    inputYTLink = ( "https://www.youtube.com/watch?v=" + shortYTLink+'&modestbranding=1&autohide=1&showinfo=0&controls=0');
    document.getElementById('ytVideoTitle').value=(videoTitleArray[videoSearchNumber]);
    document.getElementById('video-title').innerHTML="<h3>"+videoTitleArray[videoSearchNumber]+"</h3>";
    document.getElementById('resultListing').style.display="none";
    launchEditor();
}

function inputVideoType (inputType){
    videoSource=inputType;
    document.getElementById("VideoSource").value=inputType;
    if (inputType==0){
        document.getElementById("InputYouTubeLink").placeholder="Enter a Web Video Link";
    }
    else if (inputType==2){
        document.getElementById("InputYouTubeLink").placeholder="Enter a Facebook Video Link";
    }
    else if (inputType==3){
        document.getElementById("InputYouTubeLink").placeholder="Enter a SoundCloud Link";
    }
}

function launchEditor(){
    waitForUserSelection = -1;
    document.getElementById('InputYouTubeLink').value =inputYTLink;
    document.getElementById("originalVideo-to-editor").click();
}

// $(document).ready(function() {
//     $('.commentarea').keydown(function(event) {
//         if (event.keyCode == 13) {
// 		  initiateLiveVideoPlayer();
//       //this.form.submit();
//             return false;
//          }
//     });
// });
