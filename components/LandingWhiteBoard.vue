<template>
    <div class="dashboard-part" style="padding-bottom:150px">
        <!--onmouseenter="switchDemoImage(0);changeDemoImage(0);"-->

        <div class="row d-flex justify-content-center" style="">
            <div class="col-md-7 col-sm-10 col-xs-12 d-flex justify-content-center">
                <div>
                    <h2 class="text-center"><a href="#videoPlayerButtons" id="dashboardChevronLink" onclick="switchDashboardChevron()">
                        <span id="dashboardChevron" class="glyphicon glyphicon-chevron-down" aria-hidden="true" style="color:#000;  -webkit-text-stroke: 4px #ffff;"></span></a></h2>
                    <h4 class="">
                        <i class="fa fa-ban"></i>
                        Rendering</h4>
                    <h4 class="">
                        <i class="fa fa-ban"></i>
                        Bulky Application</h4>
                    <h4 class="">
                        <i class="fa fa-ban"></i>
                        Codec, converter, or compressor needed</h4>
                </div>
            </div>
        </div>
        <div class="row d-flex justify-content-center" style="text-align:center;">
            <div class="col-md-8 col-sm-10 col-xs-12 d-flex justify-content-center ">
                <div>

                    <!--<h1>Edit a Video & Pass it Along</h1>-->
                    <!-- <h3><span id="editCounterElement" class="count" ></span> Edits Already Made!</h3> -->
                    <h3>Works On Any Platform</h3>

                    <div style="margin: 0 auto">
                        <img src="css/laptop-icon.png" style="width:23%">
                        <img src="css/mobile-icon.png" style="width:16%">
                        <img src="css/tablet-icon.png" style="width:19%">
                    </div>

                    <h3 style="">With</h3>
                    <!--<img src="css/YouTube-icon.png" style="width:26%">-->
                    <div class="d-flex justify-content-center">
                        <div class="padding-15">
                            <i class="fab fa-youtube fa-3x horizontal-padding-5"></i>
                            <span class="h4 d-inline-block position-relative platform-title">
                    YouTube</span>
                        </div>
                        <div class="padding-15">
                            <i class="fab fa-facebook fa-3x horizontal-padding-5"></i>
                            <span class="h4 d-inline-block position-relative platform-title">
                    Facebook</span>
                        </div>
                        <!--<div class="padding-15">-->
                        <!--<i class="fab fa-soundcloud fa-3x horizontal-padding-5"></i>-->
                        <!--<span class="h4 d-inline-block position-relative platform-title">-->
                        <!--SoundCloud</span>-->
                        <!--</div>-->
                    </div>
                    <div class="">
                        <span class="d-block">Or any </span>
                        <h4 class="d-inline-block padding-top-15" style="margin-top: 0;">VIDEO FILE <i class="fa fa-link fa-2x" style="top: 6px;"></i></h4>
                    </div>

                    <!--<h3>Compatability Coming Soon For</h3>-->
                    <!--<div style="margin: 0 auto">-->
                    <!--<img src="css/vimeo-icon.jpg" style="width:27%;padding-bottom:8px">-->
                    <!--<img src="css/mobile-icon.png" style="visibility:hidden;width:6%">-->
                    <!--<img src="css/dropbox-horizontal-icon.png" style="width:33%">-->
                    <!--</div>-->
                </div>
            </div>
        </div>


        <div class ="row">
            <div class="col-md-6 col-md-offset-3" style="padding-top: 1%;">
                <div class="progress-bar progress-bar-warning progress-bar-striped active" id="outputLoadingBar" role="progressbar" style="width:100%;display:none">EXPORTING</div>
            </div></div>

        <div class ="row">
            <div class="col-md-6 col-md-offset-3" style="display: none;" id="outputButtons">
                <button type="button" class="btn btn-default" id="selectAllButton" onclick="selectText('OutputYouTubeLink')">
                    <span class="glyphicon glyphicon-hand-up" aria-hidden="true"> </span><span> Select Link</span></button>
                <button type="button" class="btn btn-default" id="backButton" onclick="backFunction()">
                    <span class="glyphicon glyphicon-repeat" aria-hidden="true"> </span>
                    <span> Cut Again</span>
                </button>
                <button class="btn btn-default" type="button" data-toggle="collapse" data-target="#collapseAlt" aria-expanded="false" aria-controls="collapseExample">
                    <span class="glyphicon glyphicon-sort" aria-hidden="true"> </span>
                    <span> Link Not Appearing?</span>
                </button>
                <div class="collapse" id="collapseAlt" style="padding-top:1%">
                    <div class="well" id="collapseAltLink"></div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "landing-white-board"
    }
</script>

<style scoped>
    .fa-ban {
        font-size: 23px;
        padding-right: 10px;
    }
    .platform-title {
        top: -8px;
    }
</style>