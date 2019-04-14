<template>
 <div>
  <div class="video-part">
   <div class="vertical-padding-45 d-flex align-items-center justify-content-center" style="min-height: 20vh;">
    <div class="text-center ">
     <!--<h4 class="">HOT POTATO</h4>-->
     <img src="css/hot-potato-white-text-with-logo.png" class="whiteImage vertical-margin-15" alt="Hot Potato"
          style="width: 225px; margin: 15px auto;">
     <h4 class="text-uppercase hp-subtitle vertical-padding-10">Simple & fast</h4>
     <h2 class="vertical-padding-10">Edit, download, and repost existing online videos</h2>
    </div>
   </div>
   <!--<LandingThreeSteps class="vertical-padding-30"></LandingThreeSteps>-->
  </div>
  <div class="video-part" style="overflow-x:hidden;">
      <LandingPageIntro cta="true" walkthrough="false"></LandingPageIntro>
   <div class=" vertical-padding-45">
    <div class="row d-flex justify-content-center d-flex ">
    <div class=" col-xs-12 col-md-6 ">
    <h2 class=" padding-bottom-30 text-center">Walkthrough Tutorial</h2>
     <progress-bar class="disabled padding-bottom-30"></progress-bar>
     <div class="d-flex vertical-padding-15 text-center hp-subtitle">
      <a v-if="step > 0"
              class=" justify-content-center horizontal-padding-15 horizontal-margin-15 btn btn-default bg-dark" @click="step--">
       <i class="fas mod fa-chevron-left"></i>
       <span class="padding-left-5">PREVIOUS</span>
      </a>
      <span class="d-flex flex-fill justify-content-center" v-html="walkthroughText[step]"></span>
      <a class=" justify-content-center horizontal-padding-15 horizontal-margin-15 btn btn-warning" @click="step++">
       <span>NEXT</span>
       <i class="fas mod fa-chevron-right padding-left-5"></i>
      </a>
     </div>
     </div>
     </div>
      <div class="padding-top-30 start">
       <InputBar :class="( step < 3 ) ? '' : 'hidden'" :enable="false"></InputBar>
       <DataWatch v-if="( step > 2 )"></DataWatch>

       <SearchListing v-if="step < 2"></SearchListing>
       <div class="d-flex justify-content-center">
        <!--<slider v-if="step > 3 && step < 5"-->
        <!--class="col-xs-12 col-md-6 "></slider>-->
        <!--<button id="addEdit" type="button" class="btn btn-default bg-dark"-->
        <!--v-if="step === 5">-->
         <!--<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>-->
         <!--<span> ADD ANOTHER CUT</span>-->
        <!--</button>-->
       </div>
      </div>
           <EditButtonBarOne v-if="step > 2 && step < 8"></EditButtonBarOne>
           <EditButtonBarTwo v-if="step > 2 && step < 8"></EditButtonBarTwo>
    <VideoPlayerAndSidebar v-if="step > 2"></VideoPlayerAndSidebar>
           <ExportButtonBar1 v-if=" step > 7"></ExportButtonBar1>
           <ExportButtonBar2 v-if="step > 7"></ExportButtonBar2>
    </div>
  </div>
  <div class="video-part vertical-padding-15 start" style="overflow-x: unset;">

   <div class="vertical-padding-15 d-flex justify-content-center">
    <div class=" col-10 col-sm-8 col-md-5 d-flex">
     <a href="edit.html" class="w-100 btn btn-default bg-dark text-center hp-subtitle">Try it Now!</a>
    </div>
   </div>
   <!--<div w3-include-html="partials/html/_inputbar.html"></div>-->
   <!--<div w3-include-html="partials/html/_video-search-listing.html"></div>-->

  </div>

  <LandingWhiteBoard></LandingWhiteBoard>
     <div class="video-part">
         <LandingPageIntro :cta="false" walkthrough="true"></LandingPageIntro>
     </div>
 </div>
</template>

<script>
//import Logo from '~/components/Logo.vue'

import LandingThreeSteps from "../components/LandingThreeSteps.vue"
import LandingPageIntro from "../components/LandingPageIntro.vue"
import LandingWhiteBoard from "../components/LandingWhiteBoard.vue"

import InputBar from "../components/InputBar.vue"
import SearchListing from "../components/SearchListing.vue"
import ProgressBar from "../components/ProgressBar.vue"
import slider from "../components/slider.vue"
import VideoPlayerAndSidebar from "../components/VideoPlayerAndSidebar.vue"
import EditButtonBarOne from "../components/EditButtonBar1.vue"
import EditButtonBarTwo from "../components/EditButtonBar2.vue"
import ExportButtonBar1 from "../components/ExportButtonBar1.vue"
import ExportButtonBar2 from "../components/ExportButtonBar2.vue"
import DataWatch from "../components/DataWatch.vue"

if (process.client) {
    // (function(document, tag) {
    //     var scriptTag = document.createElement(tag), // create a script tag
    //         firstScriptTag = document.getElementsByTagName(tag)[0]; // find the first script tag in the document
    //     scriptTag.src = 'partials/js/video-parse-link.js'; // set the source of the script to your script
    //     firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); // append the script to the DOM
    // }(document, 'script'));
    // (function(document, tag) {
    //     var scriptTag = document.createElement(tag), // create a script tag
    //         firstScriptTag = document.getElementsByTagName(tag)[0]; // find the first script tag in the document
    //     scriptTag.src = 'partials/js/jw-player-home-landing.js'; // set the source of the script to your script
    //     firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); // append the script to the DOM
    // }(document, 'script'));
    var vidLink = 'https://www.youtube.com/watch?v=Dr450QamBOU&has_verified=1';
    var inPoint = [];
    var outPoint = [];
}

export default {
    layout: 'layout',
    name: 'index',
    components: {
        LandingWhiteBoard,
        LandingPageIntro,
        LandingThreeSteps,
        InputBar,
        SearchListing,
        ProgressBar,
        slider,
        VideoPlayerAndSidebar,
        EditButtonBarOne,
        EditButtonBarTwo,
        ExportButtonBar1,
        ExportButtonBar2,
        DataWatch
    },
    data () {
      return {
          step: 0,
          progress: 0,
          walkthroughText: [
              'Click Next to start the walkthrough tutorial',
              'Start by search for a video',
              'Or enter a video link',
              'Playback the video to a memorable moment',
              "Drag the slider's first toggle to where you want your clip to start",
              'Drag the second toggle to where you want the clip to end',
              "Click add another edit if you want more than one clip in your video edit",
              'Click an export button, or the enter key to finalize your edit',
              'Copy the link to share your video edit',
              'You can save the video file by download'
          ]
      }
    },
    head() {
        return {
            title: 'Welcome to Hot Potato',
            link: [
                //{type: 'text/javascript', src: '/partials/js/video-parse-link.js'},
                //{type: 'text/javascript', src: 'partials/js/home-landing-toggles.js'},
                //{type: 'text/javascript', src: '/partials/js/multi-edit-functions.js'},
                //{type: 'text/javascript', src: '/partials/js/jw-player-home-landing.js'}
            ]
        }
    },
    mounted: function () {

        if (process.client) {
            $.getScript('partials/js/video-parse-link.js', function () {
                console.log('ss scriot');
                setTimeout(function () {
                    checkAuth();
                },700);
            });

            $.getScript('partials/js/jw-player-home-landing.js', function () {
                console.log('ss scriot');
                // var sliderDbl = document.getElementById("sliderDbl");
                // noUiSlider.create(sliderDbl, {
                //     start: [null,100],
                //     connect:true,
                //     range: {
                //         "min": 0,
                //         "max": 100
                //     }
                // });
            });

            var url = window.location.toString();
            var value = url.indexOf('localhost');
            console.log('mounted',value, (value<0) );
            if ( value < 0 ) {
                window.location.replace('https://hotpotato.me');
            }

            function backFunction(){
                //document.getElementById('videoPlayback').style.display ="none";
                document.getElementById('outputButtons').style.display ="none";
                document.getElementById('outputLoadingBar').style.display ="";
                $("form").slideDown();

            }
        }
    },
    watch: {
        'step': function (value) {
            //var sliderDbl = document.getElementById('sliderDbl');
            const vm = this;
            if (value === 1) {
                //input search term
                setTimeout(function () {
                    document.getElementById('InputYouTubeLink').value = 'Elon';
                },250);
                setTimeout(function () {
                    document.getElementById('InputYouTubeLink').value = 'Elon Musk';
                    videoSource = 1;
                    waitForUserSelection = 1;
                    getYouTubeVideoSearchData();
                },500);
            } else if (value === 2) {
                //input youtube link
                setTimeout(function () {
                    document.getElementById('InputYouTubeLink').value = 'youtube.com';
                },650);
                setTimeout(function () {
                    document.getElementById('InputYouTubeLink').value = 'youtube.com/watch?v=Dr450QamBOU';
                },1200);
            } else if ( value === 3) {
                //play start video
                this.progress = 1;
                document.getElementById('InputYouTubeLink').value = vidLink;
                document.getElementById('ytVidCode').value = 'ycPr5-27vSI';
                (function(document, tag) {
                        var scriptTag = document.createElement(tag), // create a script tag
                            firstScriptTag = document.getElementsByTagName(tag)[0]; // find the first script tag in the document
                        scriptTag.src = 'partials/js/multi-edit-functions.js'; // set the source of the script to your script
                        firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); // append the script to the DOM
                    var scriptTag = document.createElement(tag), // create a script tag
                        firstScriptTag = document.getElementsByTagName(tag)[0]; // find the first script tag in the document
                    scriptTag.src = 'partials/js/jw-player-and-slider.js'; // set the source of the script to your script
                    firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); // append the script to the DOM
                }(document, 'script'));
                setTimeout(function () {
                    jwplayer("videoPlaybackFrame").seek(0);
                    //console.log('getPosition', jwplayer("videoPlaybackFrame").getPosition());
                },1000);

            } else if ( value === 4) {
                //set edit start
                setTimeout(function () {
                    var sliderDbl = document.getElementById('sliderDbl');
                    sliderDbl.noUiSlider.set([9,null]);
                    var sliderVal = (9/100)*vidDuration;
                    jwplayer("videoPlaybackFrame").seek(sliderVal);
                    var val = sliderVal.toPrecision(4);
                    console.log('inPoint', val);
                    videoInPoint('slider',val);
                    //setTimeout(function () {
                    // sliderVal = (values[handle]/100)*vidDuration;
                    // jwplayer("videoPlaybackFrame").seek(sliderVal);
                    // $('.noUi-handle.noUi-handle-lower .noUi-touch-area').on('click dragend dragexit dragleave', function (e) {
                    //     console.log('listender',e.currentTarget);
                    //     if (value === 4) {
                    //         vm.step = 5;
                    //     }
                    // });

                },500);
            } else if ( value === 5) {
                //set edit end
                //this.progress = 1;
                setTimeout(function () {
                    inPoint[0] = 56.41;
                    var sliderDbl = document.getElementById('sliderDbl');
                    sliderDbl.noUiSlider.set([ null,20]);
                    var sliderVal = (20/100)*vidDuration;
                    jwplayer("videoPlaybackFrame").seek(sliderVal);
                    outPoint[currentCut] = sliderVal.toPrecision(4);
                    console.log('outPoint', outPoint[currentCut]);
                    videoOutPoint('slider',outPoint[currentCut]);
                    userEditCounter = 4;
                    videoLoadSwitch=5;
                    // $('.noUi-handle.noUi-handle-upper .noUi-touch-area').on('click dragend dragexit dragleave', function (e) {
                    //     console.log('listender',e.currentTarget);
                    //     if (value === 5) {
                    //         vm.step = 6;
                    //     }
                    // });
                }, 500);

            } else if ( value === 6) {
                //add another edit
                setTimeout(function () {
                    inPoint[0] = 56.41;
                    // var slider = document.getElementById('slider');
                    // slider.style.display = '';
                    // sliderDbl.noUiSlider.set([30,null]);
                    var ButtonPos = $('#addEdit').offset().top;
                    $("html, body").animate({scrollTop: (ButtonPos - 100) }, "slow");
                },450);
            } else if ( value === 7 ) {
                //submit edit
                setTimeout(function () {
                    var ButtonPos = $('#submitEdit').offset().top;
                    $("html, body").animate({scrollTop: (ButtonPos - 100) }, "slow");
                    //var slider = document.getElementById('slider');
                    //slider.style.display = '';
                    //sliderDbl.noUiSlider.set([30,null]);
                },450);
            } else if ( value === 8 ) {
                //copy link
                setTimeout(function () {
                    var text = document.getElementById('OutputYouTubeLink').value;
                    document.getElementById('OutputYouTubeLink').value = text+ 'v=IRycO';
                },450);
            } else if ( value === 9 ) {
                //download edit
            }
        }
    }
}
</script>

<style>
 #videoPlaybackFrame {
  /*width: 50% !important;*/
  height: 250px !important;

 }
 body .embed-responsive-16by9 {
  padding-bottom: initial;
  padding-bottom: unset;
  height: unset;
  heigh: initial;
 }
</style>
