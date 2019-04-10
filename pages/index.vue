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
   <div class="vertical-padding-45">
    <h2 class=" padding-bottom-15 text-center">Walkthrough Tutorial</h2>
     <div class="vertical-padding-15 text-center hp-subtitle">
      <span v-html="walkthroughText[step]"></span>
      <a class=" justify-content-center horizontal-padding-15 horizontal-margin-15 btn btn-warning" @click="step++">
       <span>next</span>
       <i class="fas fa-chevron-right"></i>
      </a>
     </div>
      <div class="padding-top-30 start">
       <InputBar v-if="step < 3" :enable="false"></InputBar>
       <SearchListing v-if="step < 2"></SearchListing>
      </div>
      <progress-bar class="disabled padding-top-30"></progress-bar>
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
        ProgressBar
    },
    data () {
      return {
          step: 0,
          progress: 0,
          walkthroughText: [
              'Click Next to start the walkthrough tutorial',
              'Start by search for a video',
              'Or enter a video link',
              "Drag the slider's first toggle to where you want your clip to start",
              "Click add another edit if you want more than one clip in your video edit",
              'Drag the second toggle to where you want the clip to end',
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
                {type: 'text/javascript', src: '/partials/js/multi-edit-functions.js'},
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
            if (value === 1) {
                document.getElementById('InputYouTubeLink').value = 'Elon Musk';
                videoSource = 1;
                waitForUserSelection=1;
                getYouTubeVideoSearchData();
            } else if (value === 2) {
                document.getElementById('InputYouTubeLink').value = 'https://www.youtube.com/watch?v=ycPr5-27vSI';
            } else if ( value === 3) {
                this.progress = 1;
            }
        }
    }
}
</script>

<style>

</style>
