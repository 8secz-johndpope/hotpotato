<template>
    <div class="">
    <div class="row hp-transition position-relative" id="indexIntro">
        <div class="col-md-12 inner hp-transition">
            <!--<div class="col-md-6 col-md-offset-3" >-->
                <!--<div id="video-title" style="text-align:center">-->
                <!--</div>-->
            <!--</div>-->
            <div class="image-overlay position-absolute w-100 h-100 bg-image bg-contain hp-transition" style="display: none;">
                <img id="demo-video-img" class="img-responsive invisible">
            </div>
            <div class="col-md-6 col-md-offset-3" style="overflow-y: hidden;">
                <div class="w-100 justify-content-center align-items-center d-flex" style="min-height: 300px; min-height: 35vh;">
                    <a href="edit.html"
                       class="btn btn-default bg-dark text-center hp-subtitle hp-transition">
                        Try it Now!
                    </a>
                </div>
                <!--<div class ="embed-responsive embed-responsive-16by9" id="responsiveVideoFrame">-->
                <!--<img src="css/video-demo-transarency.png" class="img-responsive" id="demo-video-img"-->
                <!--onmouseenter="changeDemoImage(1);" onmouseout="changeDemoImage(0);" onclick="demoVideoChange(0);">-->
                <!--<div id="videoPlaybackFrame" style="display:none"></div>-->
                <!--</div>-->
            </div>
        </div>
    </div>
        <!--<div class="row padding-top-45 padding-bottom-15 justify-content-center d-flex">-->
            <!--<div class="col-12 col-sm-10 col-lg-6 ">-->
                <!--<progress-bar></progress-bar>-->
            <!--</div>-->
        <!--</div>-->

    <div class="hidden row padding-top-45 padding-bottom-15 justify-content-center d-flex">
        <div class="col-12 col-sm-10 col-lg-6">
            <div id="howto-0" index="0" class="row d-flex step"
                 @mouseenter="stateChange($event,1)"
                 @mouseleave="stateChange($event,0)">
                <div class="col-12 col-sm-6 col-md-5 d-flex align-items-center">
                    <h4 class="">Search or enter a video link</h4>
                </div>
                <input @focus="stateChange(0,2)" type="text" class="form-control commentarea "
                       placeholder="url or search"  style=""
                :value="getSearchTerm()" >
                <!--name="InputYouTubeLink" id="InputYouTubeLink"-->
                <!-- onclick='checkAuth();' onkeyup="inputKeyup(event, this)" -->
            </div>
        </div>
    </div>
    <div class="hidden vertical-padding-15">
        <div class="row justify-content-center d-flex">
            <div class="col-12 col-sm-10 col-lg-6">
                <div id="howto-1" index="1" class="row d-flex step"
                     @mouseenter="stateChange($event,1)"
                     @mouseleave="stateChange($event,0)">
                    <div class="col-12 col-sm-6 col-md-5 d-flex align-items-center">
                        <h4 class="d-flex">Drag or click start edit points</h4>
                    </div>
                    <div class="w-100">
                        <div class="progress vertical-padding-10" id="videoTimeline" style="">
                            <div id="slider" style="display:none;"></div>
                            <div id="sliderDbl"></div>
                        </div>
                        <div class="vertical-padding-10">
                            <button type="button" class="btn btn-default bg-dark" id="videoInPoint"
                                    @click="stateChange(1,1)"
                                    data-toggle="tooltip"
                                    data-placement="top" data-delay="400" title="Begin your edit"
                            >
                                <!--onclick="videoInPoint()"-->
                                <img src="css/scissors-open-white.png" class="whiteImage" width="15.1" height="14">
                                <img src="css/scissors-open-black.png" class="blackImage" width="15.1" height="14">
                                <span> START</span>
                            </button>
                            <button type="button"
                                    class="btn btn-default bg-dark" id="videoOutPoint"
                                     @click="stateChange(1,2)"
                                    data-toggle="tooltip"
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
    <div class="hidden row padding-top-45 padding-bottom-15 justify-content-center d-flex">
        <div class="col-12 col-sm-10 col-lg-6 ">
            <div id="howto-2" index="2" class="row d-flex step"
                 @mouseenter="stateChange($event,1)" @click="stateChange($event,2)"
                 @mouseleave="stateChange($event,0)">
                <div class="col-12 col-sm-6 col-md-5 d-flex align-items-center">
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
            <div id="howto-3" index="3" class="row d-flex padding-top-30 hp-transition"
                 @mouseenter="stateChange($event,2)"
                 @mouseleave="stateChange($event,0)" style="opacity: 0">
                <div class="col-12 col-sm-6 col-md-5 d-flex align-items-center">
                    <h4 class="horizontal-padding-15">Share</h4>
                </div>
                <div class="w-100 ">
                    <input class="well w-100 vertical-margin-15" readonly="readonly" style="color:#000"
                           id="OutputYouTubeLink"
                           value="">
                </div>
            </div>
            <div id="howto-4" index="3" class="row d-flex padding-top-15"
                 @mouseenter="stateChange($event,1)" @click="stateChange($event,2)"
                 @mouseleave="stateChange($event,0)" style="opacity: 0">
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
    import ProgressBar from "./ProgressBar.vue"

    export default {
        components: {ProgressBar},
        name: "landing-page-intro",
        data() {
            return {
                toggles: [
                    {
                        name: 'find',
                        toggle: 0
                    },
                    {
                        name: 'edit',
                        toggle: 0
                    },
                    {
                        name: 'create',
                        toggle: 0
                    },
                    {
                        name: 'share',
                        toggle: 0
                    },
                    {
                        name: 'download',
                        toggle: 0
                    }
                ]
            }
        },
        methods: {
            stateChange: function (event,type) {
                var block,index;
                if ( event.currentTarget ) {
                    block = event.currentTarget;
                    index = parseInt( block.getAttribute('index') );
                } else {
                    block = document.getElementById('howto-'+event);
                    index = event;
                }
                var index = parseInt( block.getAttribute('index') );
                this.toggles[index].toggle = type;
                if ( index === 1 ) {
                    var sliderDbl = document.getElementById('sliderDbl');
                    if ( type === 1 ) {
                        sliderDbl.noUiSlider.set([30,100]);
                    } else if ( type === 2 ) {
                        sliderDbl.noUiSlider.set([30,60]);
                    } else {
                        sliderDbl.noUiSlider.set([0,100]);
                    }
                } else if ( index > 1 ) {
                    if ( type === 1 ) {
                        document.getElementById('howto-'+(index+1)).style.opacity ='1';
                        if ( document.getElementById('howto-'+(index+2)) !== null ) {
                            document.getElementById('howto-'+(index+2)).style.opacity ='1';
                        }
                    } else if ( type === 2 ) {
                        document.getElementById('OutputYouTubeLink').value = 'https://video.hotpotato.me/watch?v=example';
                    } else {

                    }
                }
            },
            getSearchTerm: function () {
                var toggle = this.toggles[0].toggle;
                if (toggle === 0) {
                    return '';
                } else if (toggle === 1) {
                    return 'a search term or direct link';
                } else {
                    //return 'https://youtube.com/watch?v=OrAnDirectLink';
                    return '';
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .bg-image {
        background-position: center bottom;
    }
    #indexIntro.mod {
        overflow-y: hidden;
        background: rgba(255,255,255,0.95);
        .inner:before {
            /*background: #4c453b;*/
            /*opacity: 0;*/
            opacity: 0.25;
        }
        .hp-subtitle {
            opacity: 0;
            pointer-events: none;
        }
    }

    @media (min-width: 768px) {
        .image-overlay {
            background-size: 56%;
            left: -17px;
        }
    }
    @media (max-width: 767px) {
        .image-overlay {
            left: 0;
            background-size: cover;
        }
    }
</style>