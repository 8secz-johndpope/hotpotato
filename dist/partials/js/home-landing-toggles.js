function demoVideoChange(videoValue){

  document.getElementById("videoPlaybackFrame").style.display="";
  document.getElementById("demo-video-img").style.display="none";
  var demoVideoValue;
  if (videoValue==1){
    demoVideoValue="https://www.youtube.com/watch?v=wl7Nh_aj6nA";
  }else if (videoValue==2){
    demoVideoValue="https://www.youtube.com/watch?v=YsjHGdZoiaY";
  }else if (videoValue==3){
    demoVideoValue="https://www.youtube.com/watch?v=jxsl17mH7hs";
  }
  if (videoValue>0){
  jwplayer("videoPlaybackFrame").load([{file:demoVideoValue}]);
  } else if (videoValue==0){
    jwplayer("videoPlaybackFrame").play();
  }
  jwplayer("videoPlaybackFrame").setMute(false);

}

if ( window.innerWidth > 575 ) {
setTimeout(function functionName() {
    //demoVideoChange(0);
    if ( document.getElementById('videoPlaybackFrame') !== null ) {
        jwplayer("videoPlaybackFrame").setMute(true);
    }
}, 1700);
}

function switchDemoImage(videoValue){
  if (videoValue==0){
    document.getElementById("demo-video-img").src="css/video-demo-transarency-hover.png";

  }else if (videoValue==1){
    document.getElementById("demo-video-img").src="css/finding-a-video.png";
  }else if (videoValue==2){
    document.getElementById("demo-video-img").src="css/original-video.png";
  }else if (videoValue==3){
    document.getElementById("demo-video-img").src="images/export-video.png";
  }
}

function switchDashboardChevron(){
  if (document.getElementById('dashboardChevron').className=="glyphicon glyphicon-chevron-up"){
    document.getElementById('dashboardChevron').className="glyphicon glyphicon-chevron-down";
    document.getElementById('dashboardChevronLink').href="#indexIntro";
  }
  else if (document.getElementById('dashboardChevron').className=="glyphicon glyphicon-chevron-down"){
    document.getElementById('dashboardChevron').className="glyphicon glyphicon-chevron-up";
    document.getElementById('dashboardChevronLink').href="#videoPlayerButtons";

  }
}
