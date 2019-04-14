<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3" style="padding-top: 1%;">
                <div class="progress-bar progress-bar-warning progress-bar-striped active" id="outputLoadingBar" role="progressbar" style="width:100%;display:none">EXPORTING</div>
            </div></div>

        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="col-xs-1" style="padding:0px">
                    <!--<button type="button" class="btn btn-default bg-dark" id="addEdit" onclick="addEdit();" style="visibility:hidden">-->
                    <!--<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>-->
                    <!--<span> Switch To Multi Clip Editor</span>-->
                    <!--</button>-->
                    <button id="addEdit" type="button" class="btn btn-default bg-dark"
                            onclick="addEdit();" style="visibility:hidden;">
                        <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        <span> ADD ANOTHER CUT</span>
                    </button>
                </div>
                <div id="editTimelineButtons" style="padding-left:72px;">
                    <button id="playbackAllEdits" type="button" class="btn btn-default bg-dark"
                            onclick="playbackAllEdits();" style="visibility:hidden;">
                        <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                        <span> PLAY ALL EDITS</span>
                    </button>
                </div>
                <!-- <button type="button" class="btn btn-default bg-dark" id="previousEdit" onclick="previousEdit();" style="">
                <span class="glyphicon glyphicon-import" aria-hidden="true"></span>
                <span id="previousEditText"> PREVIOUS CUT</span>
                </button>
                <button type="button" class="btn btn-default bg-dark" id="nextEdit" onclick="nextEdit();" style="">
                <span class="glyphicon glyphicon-export" aria-hidden="true"></span>
                <span id="nextEditText"> NEXT CUT</span>
                </button>
                <button type="button" class="btn btn-default bg-dark" id="lastEdit" onclick="lastEdit();" style="">
                <span class="glyphicon glyphicon-object-align-right" aria-hidden="true"></span>
                <span> LAST CUT</span>
                </button> -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "edit-button-bar-two"
    }
</script>

<style scoped>

</style>