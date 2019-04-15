<template>
    <div class="container" >
        <div class="row mainplay" style="padding-bottom:15px">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-offset-0 col-md-7 col-lg-6" id="videoPlayerButtons">
                <button type="button" class="btn btn-default bg-dark" id="loadVideoButton" onclick="initiateLiveVideoPlayer();" data-toggle="tooltip" data-placement="top" data-delay="400" title="Click here, or press enter, when you have a video input" style="display:none">
                    <span class="glyphicon glyphicon-search" aria-hidden="true"> </span>
                    <span> LOAD</span>
                </button>

                <button type="button" class="btn btn-default bg-dark" id="playPauseButton" onclick="playPauseVideo();">
                    <span class="glyphicon glyphicon-play" id="playPauseSpan" aria-hidden="true"> </span>
                </button>
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
                        disabled style="">
                    <img src="css/scissors-open-white.png" class="whiteImage" width="15.1" height="14">
                    <img src="css/scissors-open-black.png" class="blackImage" width="15.1" height="14">
                    <span> END</span>
                </button>
                <button type="button" class="btn btn-default bg-dark" id="videoNoPoint" data-toggle="tooltip" data-placement="top" data-delay="400" title="Edit in progress" style="display:none">
                    <img src="css/scissors-closed-white.png" class="whiteImage" width="15.1" height="14">
                    <img src="css/scissors-closed-black.png" class="blackImage" width="15.1" height="14">
                    <span> CUT</span>
                </button>

                <button type="button" class="btn btn-default bg-dark hidden" id="previewEdit" onclick="previewEdit();"
                        data-toggle="tooltip" data-placement="top" data-delay="450"
                        title="Video will playback from the &quot;START&quot; to the &quot;STOP&quot; time selected"
                        style="" disabled>
                    <span class="glyphicon glyphicon-film" aria-hidden="true"> </span>
                    <span> PREVIEW</span>
                </button>
                <!--<button type="button" class="btn btn-default bg-dark hidden exitPreviewEdit" id="exitPreviewEdit" onclick="exitPreviewEdit();"-->
                <!--data-toggle="tooltip" data-placement="top" data-delay="450"-->
                <!--title="Video will playback from the &quot;START&quot; to the &quot;STOP&quot; time selected"-->
                <!--style="" disabled>-->
                <!--<span class="glyphicon glyphicon-film" aria-hidden="true"> </span>-->
                <!--<span> EXIT PREVIEW</span>-->
                <!--</button>-->

                <button type="button" class="btn btn-default bg-dark" id="submitEdit" onclick="submitEdit();" data-toggle="tooltip" data-placement="top" data-delay="450" title="Creates a web link of the video edit" disabled>
                    <span class="glyphicon glyphicon-film" aria-hidden="true"> </span>
                    <span style="padding-left: 5px;"> EXPORT</span>
                </button>

                <button type="button" class="btn btn-default bg-dark" id="changeVideoButton" onclick="reloadVideoInput()" data-toggle="tooltip" data-placement="top" data-delay="450" title="Change the video input source" style="display:none">
                    <span class="glyphicon glyphicon-refresh" aria-hidden="true"> </span>
                    <span> RESET</span>
                </button>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "edit-buttonbar-one"
    }
</script>

<style>
    #changeVideoButton {
        float: right;
    }
</style>