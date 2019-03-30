<template>
    <div class="navbar navbar-inverse navbar-fixed-top" role="navigation"
         style="">
        <div class="navbar-header" style="">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <div class="navbar-brand presentation">
                <a class="home-link menu-link" href="index.html"
                   data-href="index">
                    <img src="css/hot-potato-black-text-with-logo.png" class="blackImage"
                         alt="Hot Potato" width="101.48" height="22" style="padding-bottom:0px;">
                    <img src="css/hot-potato-white-text-with-logo.png" class="whiteImage"
                         alt="Hot Potato" width="101.48" height="22" style="padding-bottom:0px;">
                </a>
            </div>
        </div>
        <div class="navbar-collapse collapse">
            <ul class="nav nav-pills" style="">
                <!--<li role="presentation" class="presentation">-->
                <!--</li>-->

                <!-- <li role="presentation" class="<?php echo strpos($REQUEST['PHP_SELF'], 'original') > -1 ? 'active' : '' ?>">
                  <a href="original-youtube-video-feed.php">
                    <img src="css/find-video-black-resize.png" class="blackImage"
                    alt="Hot Potato" width="35.24" height="23.5" style="padding-top:1px">
                    <img src="css/find-video-white-resize.png" class="whiteImage"
                    alt="Hot Potato" width="35.24" height="23.5" style="padding-top:1px">
                    Uncut Videos
                  </a>
                </li> -->
                <!-- <li role="presentation"><a href="editor.php"><img src="css/cut-video-image-black.png" class="blackImage" alt="Hot Potato" width="35.24" height="23.5" style="padding-top:2px"><img src="css/cut-video-image-white.png" class="whiteImage" alt="Hot Potato" width="35.24" height="23.5" style="padding-top:2px"> Editor</a></li> -->
                <!-- <li role="presentation" class="<?php echo strpos($REQUEST['PHP_SELF'], 'feed') > -1 ? 'active' : '' ?>">
                  <a href="feed.php">
                    <img src="<?php echo 'http://'.$root.'/'; ?>css/share-image-black.png" class="blackImage"
                    alt="Hot Potato" width="55" height="21" style="">
                    <img src="<?php echo 'http://'.$root.'/'; ?>css/share-image-white.png" class="whiteImage"
                    alt="Hot Potato" width="55" height="21" style=""> Feed
                  </a>
                </li> -->

                <!--<li role="presentation" class="presentation">-->
                <!--<a href="//hotpotato.me/sign-up.html">Sign Up-->
                <!--</a>-->
                <!--</li>-->
                <li role="presentation" class="presentation">
                    <a class="menu-link horizontal-padding-15" href="edit.html"
                       data-href="edit">Edit
                    </a>
                </li>
                <li role="presentation" class="presentation">
                    <a class="menu-link" href="about.html"
                       data-href="about">About
                    </a>
                </li>
                <li role="presentation" class="presentation contact hidden">
                    <a type="button" class="link menu-link" onclick="void(0);" data-toggle="modal" data-target="#contactModal">
                        Contact
                    </a>
                </li>
                <li role="presentation" class="presentation right signin hidden">
                    <a class="menu-link" href="signin.html"
                       data-href="signin">
                        Sign in
                    </a>
                </li>
                <li role="presentation" class="presentation right signup hidden">
                    <a class="menu-link" href="signup.html"
                       data-href="signup">
                        Sign Up
                    </a>
                </li>
                <li role="presentation" class="presentation right user hidden">
                    <a class="menu-link user" href="user.html"
                       data-href="user">
                        user
                    </a>
                </li>
            </ul>
        </div><!--/.nav-collapse -->

    </div>
</template>

<script>
    import Vue from 'vue'
    import Cookie from 'js-cookie'
    Vue.use(Cookie);
    export default {
        name: "hpheader",
        mounted: function () {
         if (process.client) {
             // window.onload = function() {
             var url = window.location.toString();
             var check = 0;
             if (url.indexOf('localhost') < 0) {

                 (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
                     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                 })(window,document,"script","//www.google-analytics.com/analytics.js","ga");

                 ga("create", "UA-57874990-5", "auto");
                 ga("send", "pageview");

                 (adsbygoogle = window.adsbygoogle || []).push({});

                 (function (h, o, t, j, a, r) {
                     h.hj = h.hj || function () {
                         (h.hj.q = h.hj.q || []).push(arguments)
                     };
                     h._hjSettings = {hjid: 1223366, hjsv: 6};
                     a = o.getElementsByTagName('head')[0];
                     r = o.createElement('script');
                     r.async = 1;
                     r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
                     a.appendChild(r);
                 })(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv=');
             }
// }

//var url = window.location.toString();
             setTimeout(function () {
                 var user = Cookie.get('user');
                 console.log(user);
                 if ( typeof user !== 'undefined' && user !== 'undefined' && user !== '') {
                     user = JSON.parse(user);
                     //console.log(document.getElementsByClassName('user presentation')[0].firstChild.innerHTML);
                     document.getElementsByClassName('user menu-link')[0].innerHTML = user.firstname+"'s Account";
                     document.getElementsByClassName('signup presentation')[0].classList.add('hidden');
                     document.getElementsByClassName('user presentation')[0].classList.remove('hidden');
                 } else if ( typeof document.getElementsByClassName('signup presentation')[0] !== 'undefined' ) {
                     document.getElementsByClassName('signup presentation')[0].classList.remove('hidden');
                 }

                 if ( document.getElementById('contactModal') !== null ) {
                     document.getElementsByClassName('contact presentation')[0].classList.remove('hidden');
                 }

                 var pages = document.getElementsByClassName('menu-link');
                 for (var i = 0; i < pages.length; i++) {;
                     if (url.indexOf(pages[i].getAttribute('data-href')) > -1) {
                         pages[i].parentElement.classList.add('active');
                         check++;
                     }
                     if (url.indexOf('localhost') < 0) {
                         pages[i].href ='//hotpotato.me/'+pages[i].getAttribute('data-href')+'.html';
                     }
                 }
                 if (check < 1) {
                     pages[0].parentElement.classList.add('active');
                 }
             }, 150);

         }
        }
    }
</script>

<style scoped>
    .navbar-brand {
        padding: 5px 15px;
        display: flex;
    }
</style>