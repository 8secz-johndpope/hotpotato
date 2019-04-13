<template>
    <div class="container">
        <div class="row mainplay">
            <div class="col-xs-12 col-sm-offset-1 col-md-offset-0 col-sm-10 col-md-3 clips-section">
                <table class="clips table table-hover" style="text-align:center">
                    <tr v-for="(item, key) in list" :id="'cut'+key+'-tableElement'" onclick="assignVideoPlayback(key, this)" style="display:none">
                        <td>
                            <p>
                                <i class="fa fa-play-circle"></i>
                                <span class="padding-left-5" v-html="'Clip '+(key+1)"></span>
                            </p>
                        </td>
                    </tr>
                </table>
                <button type="button" class="btn btn-default bg-dark hidden exitPreviewEdit" id="exitPreviewEdit" onclick="exitPreviewEdit();"
                        data-toggle="tooltip" data-placement="top" data-delay="450"
                        title="Video will playback from the &quot;START&quot; to the &quot;STOP&quot; time selected"
                        style="" disabled>
                    <span class="glyphicon glyphicon-film" aria-hidden="true"> </span>
                    <span> EXIT PREVIEW</span>
                </button>
            </div>

            <div class="col-xs-12 col-sm-offset-1 col-md-offset-0 col-sm-10 col-md-7 col-lg-6 ">
                <div class ="embed-responsive embed-responsive-16by9" id="responsiveVideoFrame">
                    <div id="videoPlaybackFrame"></div></div>

                <!--<div class="slider-area" id="videoTimeline" style="">-->
                    <!--<div id="sliderDbl" style="display:none;"></div>-->
                    <!--<div id="slider"></div>-->
                    <!--<div class="progress-bar progress-bar-info" id="preInVis" role="progressbar" style="">-->
                  <!--</div>-->
                    <!--<div class="progress-bar progress-bar-warning progress-bar-striped" id="editVis" role="progressbar" style=""> NEW VIDEO</div>-->
                      <!--<div class="progress-bar progress-bar-info" id="postOutVis" role="progressbar" style="">-->
                      <!--</div>-->
                <!--</div>-->
                <slider></slider>
            </div>
        </div>
        <div class="row">

            <div class="col-md-6 col-md-offset-3" style="display:none">
                <input id="value-start" style="color:#000;display:none">
                <input id="value-stop" style="color:#000;display:none">
            </div>

        </div>
    </div>
</template>

<script>
    import slider from './slider.vue'

    export default {
        name: "video-player-and-sidebar",
        components: {
            slider
        },
        data () {
            return {
                list: new Array(11)
            }
        },
        mounted: function () {
            if (process.client) {
            }
        }
    }
</script>

<style lang="scss">
    .clips tr td {
        border: 1px solid white;
    }
    .clips tr:hover {
        cursor: pointer;
    }
    .clips tr p {
        margin: 7px auto;
    }
    .clips tr.active {
        color: #101010;
    }
    .clips-section {
        /*width: 270px;*/
        display: block;
    }
    @media (min-width: 992px) {
        .mainplay {
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
        }
        .clips-section {
            position: absolute;
            left: 0;
            padding-right: 20px;
        }
    }
    .fa {
        font-size: 18px;
    }


</style>