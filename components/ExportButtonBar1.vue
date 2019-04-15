<template>
    <div class="container">
    <div class="row vertical-padding-15 d-flex align-items-center flex-column">
        <div class="col-xs-12 col-sm-offset-1 col-md-offset-0 col-sm-10 col-md-7 col-lg-6 play-buttons" style="">
            <button type="button" class="btn btn-default bg-dark position-absolute z-index-1"
                    id="playPauseButton" onclick="playPauseVideo();">
                <span class="glyphicon glyphicon-play" id="playPauseSpan" aria-hidden="true"> </span>
            </button>
            <button type="button" class="btn btn-default bg-dark position-absolute z-index-1"
                    id="backToTool" name="backToTool"
                    onclick="backToTool()" style="right:15px;">
                <span class="glyphicon glyphicon-refresh" aria-hidden="true"> </span>
                <span> Restart</span>
            </button>
        </div>
        <div class="output-block col-xs-12 col-sm-offset-1 col-md-offset-0 col-sm-10 col-md-7 col-lg-6 " style="">
            <input class="well " readonly="readonly" style="color:#000"
                   id="OutputYouTubeLink"
                   value="hotpotato.me/watch?">
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "export-button-bar-one"
    }
</script>

<style scoped>
    #OutputYouTubeLink {
        resize: none;
        width: 100%;
        text-align: center;
        font-size: 15px;
        /* padding-bottom: 0; */
        /* font-weight: 600; */
    }
    .play-buttons {
        top: 15px;
        z-index: 1;
    }

    @media (max-width: 575px) {
        .play-buttons {
            top: -40px;
        }
    }
</style>