<template>
    <div class="row d-flex justify-content-center"
         style="padding-top:20px;padding-bottom:15px" id="videoPlayerButtons">
        <div class="col-xs-12 col-md-7 d-flex justify-content-center" id="inputRowOne">
            <div class="col-sm-2 col-xs-3 source-button-col hidden">
                <div class="btn-group">
                    <button type="button" class="btn btn-default bg-dark dropdown-toggle"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>Source </span> <span class="caret"></span>
                    </button>
                    <ul class="dropdown-menu">
                        <!-- <li><a href="javascript:inputVideoType(1)">Select Source</a></li> -->
                        <!-- <li role="separator" class="divider"></li> -->
                        <li><a href="javascript:inputVideoType(1)">YouTube</a></li>
                        <li><a href="javascript:inputVideoType(2)">Facebook</a></li>
                        <!--<li><a href="javascript:inputVideoType(3)">SoundCloud</a></li>-->
                        <li><a href="javascript:inputVideoType(0)">Other</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-10 col-xs-7" style="">
                <form role="form" action="editor.html" method="get" onsubmit="formSubmit(event, this);">
                    <div class="form-group">
                        <!-- <label for="InputYouTubeLink"></label> -->
                        <input type="text" class="form-control commentarea"
                               name="InputYouTubeLink" id="InputYouTubeLink"
                               onclick='checkAuth();' onkeyup="inputKeyup(event, this)"
                               placeholder="url or search" style="">
                        <input id="videoLinkArray" type="text" style="display:none"/>
                    </div>
                    <input type="text" name="ytVidCode" id="ytVidCode" value="yJDRop2ocFo" style="display:none"/>
                    <input type="text" name="ytVideoTitle" id="ytVideoTitle" value="" style="display:none"/>
                    <input type="text" name="VideoSource" id="VideoSource" value="1" style="display:none"/>
                    <input type="submit" class="button" name="originalVideo-to-editor" id="originalVideo-to-editor" style="display:none"/>
                </form>
                <div class="well" id="search-raw-data" style="display:none;width:100px;height:100px"></div>
            </div>
            <div class="d-inline-block">
                <button type="button" class="btn btn-default bg-dark" id="loadVideoButton" onclick="initiateLiveVideoPlayer();"
                        data-toggle="tooltip" data-placement="bottom" data-delay="400" title="Click here, or press enter, when you have a video input">
                    <span class="glyphicon glyphicon-search" aria-hidden="true"> </span>
                    <span></span>
                </button>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "inputbar",
        mounted: function () {

            if (process.client) {

            }
        }
    }
</script>

<style scoped>
    #videoPlayerButtons {
        z-index: 1;
    }
</style>