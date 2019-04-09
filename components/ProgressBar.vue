<template>
    <div class="w-100 d-flex justify-content-center">
        <div class="progress-bar d-flex justify-content-center">
            <a @click="goTo(item, $event)" v-for="item in barList"
            class="d-flex btn btn-default bg-dark hp-subtitle"
            :class="( (progress+1) > item.index ) ? 'active': ''">
                <span class="d-flex horizontal-margin-5 ">{{item.name}}</span>
                <i :class="item.icon"
                   class="d-flex horizontal-margin-5 "></i>
                <div class="triangle-right">
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Cookies from 'js-cookie'
    Vue.use(Cookies)

    export default {
        name: "progress-bar",
        data() {
            return {
                barList: [
                    {
                        index: 0,
                        name: 'find',
                        icon: 'fas fa-search'
                    },
                    {
                        index: 1,
                        name: 'cut',
                        icon: 'fas fa-cut'
                    },
                    {
                        index: 2,
                        name: 'export',
                        icon: 'fas fa-envelope'
                    }
                ],
                progress: 1
            }
        },
        methods: {
            goTo: function (item, event) {
                Cookies.set('progress',item.index);
                this.progress = item.index;
            }
        }
    }
</script>

<style scoped lang="scss">
    .progress-bar {
        a {
            margin-right: 0;
            padding: 20px 35px;
            border-radius: 0;
            position: relative;
            box-shadow: unset;
            border-right: 0;
            &.active {
                .triangle-right:after {
                    background: white;
                }
            }
            &:hover, &:focus {
                background: #dfd9d0;
                .triangle-right:after {
                    background: #dfd9d0;
                }
            }
        }
    }
    .triangle-right {
        height: 75.25px;
        width: 45px;
        position: absolute;
        overflow: hidden;
        right: -45px;
        right: -38.4px;
        z-index: 1;
        top: -2.75px;
        transform: scaleX(0.70);

        &:after {
            height:100%;
            width:100%;
            position:relative;
            -webkit-transform: rotate(45deg);
            -moz-transform: rotate(45deg);
            transform: rotate(45deg);
            content:'';
            display:block;
            //position:absolute;
            left:-75%;
            top: 5px;
            border: 1px solid #ccc;
            background-size:cover;
            -webkit-transition: opacity .35s ease,color .35s ease,background-image .35s ease,background-color .35s ease,background .35s ease,border-color .35s ease,top .25s ease,-webkit-box-shadow .35s ease;
            transition: opacity .35s ease,color .35s ease,background-image .35s ease,background-color .35s ease,background .35s ease,border-color .35s ease,top .25s ease,-webkit-box-shadow .35s ease;
        }
    }
</style>