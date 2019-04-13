<template>
    <div class="row" id="inputRowOne" style="display:none">
        <div class="col-md-6 col-md-offset-3">
            <form role="form" action="feed.html" entype="multipart/form-data" method="get">
                <div class="form-group">

                    <input type="text" class="form-control commentarea" name="InputYouTubeLink"
                           id="InputYouTubeLink" onclick="checkAuth()" placeholder="Enter Keyword Or YouTube Link"
                           style="color:#000;display:none" value="">
                    <input id="videoLinkArray" type="text" style="display:none"/>
                </div>
                <input type="text" name="ytVidCode" id="ytVidCode" value="" style="display:none"/>

                <input type="text" name="InTimeCode" id="InTimeCode" style="display:none">
                <input type="text" name="OutTimeCode" id="OutTimeCode" style="display:none"/>
                <input type="text" name="VideoSource" id="VideoSource" value="" style="display:none"/>
                <input type="text" name="ytVideoTitle" id="ytVideoTitle" value="" style="display:none"/>
                <input type="text" name="SingleOrMulti" id="SingleOrMulti" value="" style="display:none"/>
                <input type="text" name="ImageLink" id="ImageLink" value="" style="display:none"/>
                <input type="text" name="PostToFeed" id="PostToFeed" value="" style="display:none"/>
                <input type="submit" class="button" name="createLink" id="createLink" style="display:none"/>
            </form>
            <div class="well" id="search-raw-data" style="display:none;width:100px;height:100px"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "data-watch"
    }
</script>

<style scoped>

</style>