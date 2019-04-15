<template>
    <div class="container">
    <div class="row d-flex justify-content-center" >
        <div class="col-xs-12 col-sm-offset-1 col-md-offset-0 col-sm-10 col-md-7 col-lg-6 " style="" id="outputButtons">
            <button type="button" class="btn btn-default bg-dark" id="copy-button">
                <span class="glyphicon glyphicon-link" aria-hidden="true"> </span><span id="copy-button-text">Copy Link</span></button>
            <a type="button" class="btn btn-default bg-dark" name="openLink" id="openLink" href="#">
                <span class="glyphicon glyphicon-file" aria-hidden="true"> </span><span> Open</span>
            </a>
            <button type="button" class="btn btn-default bg-dark d-none" name="postToFeed" id="postToFeed" onclick="postToFeed()">
                <span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"> </span><span> Post To Feed</span>
            </button>

            <button class="btn btn-default bg-dark" type="button" data-toggle="collapse" data-target="#collapseAlt" aria-expanded="false" aria-controls="collapseAlt">
                <span class="glyphicon glyphicon-sort" aria-hidden="true"> </span>
                <span> Embed</span>
            </button>
            <div class="collapse" id="collapseAlt" style="padding-top:1%">
                <div class="well" id="collapseAltLink" style="color:#000">
                    &lt;iframe width=&quot;662&quot; height=&quot;450&quot;
                    src=&quot;https://hotpotato.me/watch?
                    &quot; style=&quot;position: relative; top: -94px; left: -24px;
                    overflow: hidden&quot; frameborder=&quot;0&quot; allowfullscreen
                    &gt;&lt;/iframe&gt;
                </div>
            </div>
            <a type="button" class="btn btn-default bg-dark"
               name="downloadButton" id="downloadButton"
                    @click="downloadVideo($event)">
                <span class="fas fa-download" aria-hidden="true"> </span>
                <span> Download</span>
            </a>
            <a id="downloadVideo" download
               :href="downloadUrl">
            </a>

        </div>
    </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "export-button-bar2",
        data() {
          return {
              scriptLink: undefined,
              downloadUrl: undefined
          }
        },
        mounted: function () {
           if (process.client) {
               if ( window.location.pathname.indexOf('export') > -1 ) {
                   if (typeof Cookies.get('account') !== 'undefined' && Cookies.get('account') !== 'undefined') {
                       this.scriptLink = 'http://ec2-3-19-86-255.us-east-2.compute.amazonaws.com';
                       this.scriptLink += window.location.search;
                   }
               } else {
                   this.downloadUrl = '/videos/IRycO-output.mp4';

               }
           }
        },
        methods: {
            downloadVideo: function (event) {
                if (this.downloadUrl !== undefined) {
                    document.getElementById('downloadVideo').click();
                } else if (this.scriptLink !== undefined) {
                    const urlParams = new URLSearchParams(window.location.search);
                    var $hotPotatoLink = urlParams.get('hotPotatoLink');
                    axios.get(this.scriptLink)
                        .then(response => {
                            console.log(response);
                            this.downloadUrl = 'http://ec2-3-19-86-255.us-east-2.compute.amazonaws.com';
                            this.downloadUrl += '/videos/'+$hotPotatoLink+'-output.mp4';
                            document.getElementById('downloadVideo').click();
                        })
                        .catch(e => {
                            console.log(e.response);
                        });

                }
            }
        }
    }
</script>

<style scoped>
    #copy-button-text {
        padding-left: 5px;
    }
    #backToTool {
        float: right;
    }
</style>