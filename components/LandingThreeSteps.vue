<template>
    <div class="row d-flex justify-content-center" id="three-hp-steps" style="">
        <div @mouseout="switchDemoImage(-1)" class="col-md-7 col-sm-10 col-xs-12 d-flex justify-content-center">

            <div class="col-xs-3 col-sm-2 col-md-3 col-lg-2 step">
                <a href="#how-0" class="howToGallery" id="findVideo" @mouseenter="switchDemoImage(1)">
                    <div class="bg-image bg-contain howToImage main" style="background-image: url('css/find-video-white-resize.png');">
                        <img src="css/find-video-white-resize.png" alt="find video" class="img-responsive howToImage invisible">
                    </div>
                    <p class="hp-subtitle">Find Moment</p></a>
            </div>
            <div class="col-xs-3 col-sm-2 col-md-3 col-lg-2 step">
                <a href="#how-1" class="howToGallery" id="cutVideo" @mouseenter="switchDemoImage(2)">
                    <div class="bg-image bg-contain howToImage main" style="background-image: url('css/cut-video-image-white.png');">
                        <img src="css/find-video-white-resize.png" alt="cut video" class="img-responsive howToImage invisible" >
                    </div>
                    <p class="hp-subtitle">Cut Video</p></a>
            </div>
            <div class="col-xs-3 col-sm-2 col-md-3 col-lg-2 step">
                <a href="#how-2" class="howToGallery" id="shareVideo"
                   @mouseenter="switchDemoImage(3)">
                    <div class="bg-image bg-contain howToImage alt" style="background-image: url('css/send-link.png');">
                        <img class="invisible img-responsive howToImage"
                             src="css/find-video-white-resize.png" alt="share video"
                             style="" >
                    </div>
                    <p class="hp-subtitle">Share Link</p></a>
            </div>

            <!--<div class="col-xs-1" style="padding-bottom:16%">-->

            <!--<img src="css/vertical-object.png" alt="" class="img-responsive howToImage hiddenFramingHelp" style="height:70px;">-->

            <!--</div>-->
        </div>
    </div>

</template>

<script>
    export default {
        name: "landing-three-steps",
        methods: {
            demoVideoChange: function (videoValue){

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

            },
            switchDemoImage: function (videoValue){
                if (videoValue==-1){
                    document.getElementById("demo-video-img").parentElement.style.display = 'none';
                    document.getElementById("indexIntro").classList.remove('mod');
                } else {
                    document.getElementById("demo-video-img").parentElement.style.display = '';
                    document.getElementById("indexIntro").classList.add('mod');
                }
                if (videoValue==0){
                    document.getElementById("demo-video-img").src="css/video-demo-transarency-hover.png";
                    document.getElementById("demo-video-img").parentElement.style.backgroundImage="url(css/video-demo-transarency-hover.png)";

                }else if (videoValue==1){
                    document.getElementById("demo-video-img").src="css/finding-a-video.png";
                    document.getElementById("demo-video-img").parentElement.style.backgroundImage="url(css/finding-a-video.png)";
                }else if (videoValue==2){
                    document.getElementById("demo-video-img").src="css/original-video.png";
                    document.getElementById("demo-video-img").parentElement.style.backgroundImage="url(css/original-video.png)";
                }else if (videoValue==3){
                    document.getElementById("demo-video-img").src="images/export-video.png";
                    document.getElementById("demo-video-img").parentElement.style.backgroundImage="url(images/export-video.png)";
                }
            }
        },
        mounted: function () {

            if ( window.innerWidth > 575 ) {
                setTimeout(function functionName() {
                    //demoVideoChange(0);
                    if ( document.getElementById('videoPlaybackFrame') !== null ) {
                        jwplayer("videoPlaybackFrame").setMute(true);
                    }
                }, 1700);
            }
        }
    }
</script>

<style scoped>
    .howToGallery:after {
        margin-top: 21px;
        position: absolute;
        left: calc(50% + 6px );
        transform: translateX(-50%);
        border-style: solid;
        border-width: 0 9px 9px 9px;
        border-color: transparent transparent #fff transparent;
        /*border-width: 9px 9px 0 9px;*/
        /*border-color: #fff transparent transparent transparent;*/
        opacity: 0;
        content: '';
    }
    .howToGallery:hover:after, .howToGallery:focus:after {
        opacity: 1;
    }
</style>