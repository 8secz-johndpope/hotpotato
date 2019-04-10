<template>
    <div class="page">
        <hpHeader></hpHeader>
        <nuxt />
    </div>
</template>

<script>
    import hpHeader from '../components/hpHeader.vue'
    export default {
        name: "layout",
        components: {
            hpHeader
        },
        mounted: function () {
            if (process.client) {
                //this.getHeaderScript();
            }
        },
        methods: {
            getHeaderScript: function () {
                // (function(document, tag) {
                //     var scriptTag = document.createElement(tag), // create a script tag
                //         firstScriptTag = document.getElementsByTagName(tag)[0]; // find the first script tag in the document
                //     scriptTag.src = '/js/header.js'; // set the source of the script to your script
                //     firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); // append the script to the DOM
                // }(document, 'script'));
                var scriptName;
                if ( this.$route.name.indexOf('watch') > -1 ) {
                    scriptName = 'partials/js/jw-player-watch.js';
                } else if ( this.$route.name.indexOf('edit') < 0 ) {
                    scriptName = 'partials/js/jw-player-home-landing.js';
                } else {
                    scriptName = 'edit';
                }
                // $.getScript('/js/header.js', function () {
                //     console.log('ss scriot');
                // });
            },
        }
    }
</script>

<style scoped>

</style>