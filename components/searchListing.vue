<template>
    <div class="row">
        <div class="col-sm-6 col-sm-offset-3" id="resultListing" style="padding-top:0.5%;display:none">
            <table class="table table-hover">
                <tbody>
                <tr v-for="(item, key) in list" class="link" :onclick="'assignSearchVideoPlayback('+(key)+')'">
                    <td>
                        <img :id="'videoThumbnail'+key" class="img-responsive" src="https://i.ytimg.com/vi/KlE--TWCsX0/mqdefault.jpg" style="width:88%"/>
                    </td>

                    <td>
                        <h3 :id="'videoTitle'+key" class="text-white">Title</h3>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "search-listing",
        data() {
            return {
                list: new Array(11)
            }
        }
    }
</script>

<style scoped>
    .link h3 {
        color: white;
    }
    .link:hover h3, .link:focus h3 {
        color: black;
    }
</style>