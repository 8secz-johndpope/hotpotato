<template>
    <div class="row search-results d-flex">
        <div class="col-sm-6 col-sm-offset-3 " id="resultListing" style="padding-top:0.5%;display:none">
            <table class="table table-hover d-flex grey-border round-border">
                <tbody class>
                <tr v-for="(item, key) in list" class="link d-flex" :onclick="'assignSearchVideoPlayback('+(key)+')'">
                    <td class=" border-grey d-flex" :class="(key === 0) ? 'border-none': '' ">
                        <div class="bg-image bg-cover">
                        <img :id="'videoThumbnail'+key" class="img-responsive" src="https://i.ytimg.com/vi/KlE--TWCsX0/mqdefault.jpg" />
                        </div>
                    </td>

                    <td class="border-grey d-flex align-items-center d-flex align-items-center" :class="(key === 0) ? 'border-none': '' ">
                        <h3 :id="'videoTitle'+key" class="text-white text">Title</h3>
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

<style lang="scss" scoped>
    .search-results {

        //-webkit-overflow-scrolling: touch;
        #resultListing {
            max-height: 365px;
            overflow: auto;
            &::-webkit-scrollbar {
                width: 12px;
                height: 12px; }
            &::-webkit-scrollbar-thumb {
                border-radius: 8px;
                background-color: rgba(98, 93, 78, 0.75);
                border: 2px solid #eee; }
            &::-webkit-scrollbar-corner {
                background-color: transparent; }
        }
        .img-responsive {
            width: 200px;
            max-width: unset;
            //height: auto;
        }
    }
    .link .text {
        color: white;
    }
    .link:hover .text, .link:focus .text {
        color: black;
    }
</style>