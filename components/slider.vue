<template>
    <div class="slider-area vertical-padding-10" id="videoTimeline" style="">
        <div id="sliderDbl"></div>
        <div id="slider" style="display: none;"></div>
    </div>
</template>

<script>
    export default {
        name: "slider",
        mounted: function () {
            var sliderDbl = document.getElementById('sliderDbl');
            noUiSlider.create(sliderDbl, {
                start: [0,100],
                connect:true,
                range: {
                    "min": 0,
                    "max": 100
                }
            });
            var slider = document.getElementById('slider');
            noUiSlider.create(slider, {
                start: [50],
                connect:"lower",
                range: {
                    "min": 0,
                    "max": 100
                }
            });

        }
    }
</script>

<style lang="scss">
    .slider-area {
        .slider .noUi-handle, #slider .noUi-handle {
            &:before {
                content: '';
                width: 100%;
                height: 5px;
                background: black;
                position: absolute;
            }
        }
        .slider .noUi-connect, #slider .noUi-connect {
            &:before {
                background: #3FB8AF;
            }
        }
        .sliderDbl .noUi-connect, #sliderDbl .noUi-connect {
            &:before {
                background: #ec971f;
            }
        }
        .noUi-connect {
            background: none;
            background: unset;
            //top: -1px;
            &:before {
                content: '';
                width: 100%;
                height: 5px;
                top: 50%;
                transform: translateY(-50%) !important;
                position: absolute;
            }
        }
        .noUi-base:before {
            content: '';
            height: 5px;
            width: 100%;
            top: 50%;
            transform: translateY(-50%);
            position: absolute;
            background: #FAFAFA;
        }
        .noUi-origin {
            height: 100%;
        }
        .noUi-handle {
            top: 50%;
            transform: translateY(-50%);
            position: absolute;
        }
    }
    .noUi-target {
        height: 50px;
    }
</style>