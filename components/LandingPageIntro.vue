<template>
    <div>
    <div class="row" id="indexIntro">
        <div class="col-md-12">
            <div class="col-md-6 col-md-offset-3" >
                <div id="video-title" style="text-align:center">

                </div>
            </div>

            <div class="col-md-6 col-md-offset-3" style="overflow-y: hidden;">
                <div class="position-absolute w-100 h-100 bg-image bg-cover" style="display: none;">
                    <img id="demo-video-img" class="img-responsive invisible">
                </div>
                <div class="w-100 justify-content-center align-items-center d-flex" style="min-height: 300px; min-height: 35vh;">
                    <a href="edit.html" class="btn btn-default bg-dark text-center hp-subtitle">Try it Now!</a>
                </div>
                <!--<div class ="embed-responsive embed-responsive-16by9" id="responsiveVideoFrame">-->

                <!--<img src="css/video-demo-transarency.png" class="img-responsive" id="demo-video-img"-->
                <!--onmouseenter="changeDemoImage(1);" onmouseout="changeDemoImage(0);" onclick="demoVideoChange(0);">-->
                <!--<div id="videoPlaybackFrame" style="display:none"></div>-->
                <!--</div>-->
            </div>
        </div>
    </div>

    <div class="row padding-top-45 padding-bottom-15 justify-content-center d-flex">
        <div class="col-12 col-sm-10 col-lg-6">
            <div class="row d-flex">
                <div class="col-12 col-sm-6 col-md-5">
                    <h4 class="">Search or enter a video link</h4>
                </div>
                <input type="text" class="form-control commentarea "
                       name="InputYouTubeLink" id="InputYouTubeLink"
                       onclick='checkAuth();' onkeyup="inputKeyup(event, this)"
                       placeholder="url or search" style="">
            </div>
        </div>
    </div>
    <div class="vertical-padding-15">
        <div class="row justify-content-center d-flex">
            <div class="col-12 col-sm-10 col-lg-6">
                <div class="row d-flex">
                    <div class="col-12 col-sm-6 col-md-5">
                        <h4 class="d-flex align-items-center">Drag or click start edit points</h4>
                    </div>
                    <div class="w-100">
                        <div class="progress vertical-padding-10" id="videoTimeline" style="">
                            <div id="slider" style="display:none;"></div>
                            <div id="sliderDbl"></div>
                        </div>
                        <div class="vertical-padding-10">
                            <button type="button" class="btn btn-default bg-dark" id="videoInPoint"
                                    onclick="videoInPoint()" data-toggle="tooltip"
                                    data-placement="top" data-delay="400" title="Begin your edit"
                            >
                                <img src="css/scissors-open-white.png" class="whiteImage" width="15.1" height="14">
                                <img src="css/scissors-open-black.png" class="blackImage" width="15.1" height="14">
                                <span> START</span>
                            </button>
                            <button type="button" class="btn btn-default bg-dark" id="videoOutPoint"
                                    onclick="videoOutPoint()" data-toggle="tooltip"
                                    data-placement="top" data-delay="400" title="End your edit"
                                    style="">
                                <img src="css/scissors-open-white.png" class="whiteImage" width="15.1" height="14">
                                <img src="css/scissors-open-black.png" class="blackImage" width="15.1" height="14">
                                <span> END</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row padding-top-45 padding-bottom-15 justify-content-center d-flex">
        <div class="col-12 col-sm-10 col-lg-6 ">
            <div class="row d-flex">
                <div class="col-12 col-sm-6 col-md-5">
                    <h4 class="horizontal-padding-15">Create Link</h4>
                </div>
                <div class="w-100">
                    <button type="button" class="btn btn-default bg-dark" id="submitEdit"
                            onclick="submitEdit();" data-toggle="tooltip" data-placement="top"
                            data-delay="450" title="Creates a web link of the video edit">
                        <span class="glyphicon glyphicon-film" aria-hidden="true"> </span>
                        <span style="padding-left: 5px;"> CREATE</span>
                    </button>
                </div>
            </div>
            <div class="row d-flex padding-top-30">
                <div class="col-12 col-sm-6 col-md-5">
                    <h4 class="horizontal-padding-15">Share</h4>
                </div>
                <div class="w-100">
                    <input class="well w-100" readonly="readonly" style="color:#000"
                           id="OutputYouTubeLink"
                           value="hotpotato.me/watch?v=example">
                </div>
            </div>
            <div class="row d-flex padding-top-15">
                <div class="col-12 col-sm-6 col-md-5">
                    <h4 class="horizontal-padding-15">Download</h4>
                </div>
                <div class="w-100">
                    <button type="button" class="btn btn-default bg-dark" id="submitEdit"
                            onclick="downloadEdit();" data-toggle="tooltip" data-placement="top"
                            data-delay="450" title="Download the video edit" >
                        <span class="glyphicon glyphicon-film" aria-hidden="true"> </span>
                        <span style="padding-left: 5px;"> DOWNLOAD</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
    export default {
        name: "landing-page-intro"
    }
</script>

<style scoped>
    .bg-image {
        background-position: center bottom;
    }
</style>