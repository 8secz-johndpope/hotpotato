<template>
 <div>
  <div class="video-part">
   <div class="padding-top-30 d-flex align-items-center justify-content-center" style="min-height: 20vh;">
    <div class="text-center">
     <!--<h4 class="">HOT POTATO</h4>-->
     <img src="css/hot-potato-white-text-with-logo.png" class="whiteImage vertical-margin-15" alt="Hot Potato"
          style="width: 225px; margin: 15px auto;">
     <h4 class="text-uppercase hp-subtitle">Simple & fast video editing</h4>
     <h2 class="">Post, share, manage videos online</h2>
    </div>
   </div>
   <LandingThreeSteps class="vertical-padding-30"></LandingThreeSteps>
  </div>
  <div class="video-part" style="overflow-x:hidden;">

   <LandingPageIntro></LandingPageIntro>
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
 </div>
</template>

<script>
//import Logo from '~/components/Logo.vue'

import LandingThreeSteps from "../components/LandingThreeSteps.vue"
import LandingPageIntro from "../components/LandingPageIntro.vue"
import LandingWhiteBoard from "../components/LandingWhiteBoard.vue"

export default {
    layout: 'layout',
    name: 'index',
    head() {
        return {
            title: 'Welcome to Hot Potato',
            link: [
                {type: 'text/javascript', src: 'partials/js/video-parse-link.js'},
                //{type: 'text/javascript', src: 'partials/js/home-landing-toggles.js'},
                {type: 'text/javascript', src: 'partials/js/multi-edit-functions.js'},
                //{type: 'text/javascript', src: '/partials/js/jw-player-home-landing.js'}
            ]
        }
    },
  components: {
      LandingWhiteBoard,
      LandingPageIntro,
      LandingThreeSteps
  },
    mounted: function () {
        if (process.client) {
            $.getScript('partials/js/jw-player-home-landing.js', function () {
                console.log('ss scriot');
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
    }
}
</script>

<style>

</style>
