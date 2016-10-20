<template>
    <div class="pk-audio">
        <section>
            <span>{{past | timeFormat}}</span>
            <div class="audio-progress" @click.prevent="drag($event)">
                <span class="ctrl" v-el:ctrl></span>
                <hr>
            </div>
            <span>{{duration | timeFormat}}</span>
            <audio v-el:player :src="audio.audio_url" @timeupdate="update"
                   @loadeddata="loaded" style="visibility: hidden;" @ended="ended"></audio>
        </section>
        <section>
            <button @click="progress(-1)">
                <img src="/images/icons/player/rewind.png" alt="rewind">
            </button>
            <button v-if="playing" @click="pause">
                <img src="/images/icons/player/pauze.png" alt="play">
            </button>
            <button v-else @click="play">
                <img src="/images/icons/player/play.png" alt="play">
            </button>
            <button @click="progress(1)">
                <img src="/images/icons/player/forward.png" alt="forward">
            </button>
        </section>
    </div>
</template>
<style>
    .pk-audio{
        width: 100%;
        height: 130px;
        background: #fff;
    }
    .pk-audio section{
        margin-bottom: 10px;
        text-align: center !important;
    }
    .pk-audio section:nth-child(1){
        padding: 20px;
    }
    .pk-audio section .audio-progress{
        display: inline-block;
        position: relative;
        width: 170px;
        margin: 0 10px;
        padding: 5px 0px;
        vertical-align: middle;
    }
    .pk-audio section .audio-progress .ctrl{
        position: absolute;
        height: 16px;
        left: 0px;
        top: 5px;
        border: 2px solid #999999;
    }
    .pk-audio section .audio-progress hr{
        border: 1px solid #e5e5e5;
    }
    .pk-audio section button{
        width: 40px;
        height: 30px;
        border: none;
        background: #fff;
    }
    .pk-audio section button:nth-child(2){
        margin: 0 30px;
    }
    .pk-audio section button img{
        width: 100%;
        height: 100%;
    }
</style>
<script>
    export default{
        props: {
            audio: {
                type: Object,
                required: true,
            }
        },
        data(){
            return{
                past: "00:00",
                playing: false,
                duration: "00:00",
            }
        },
        filters:{
            timeFormat(seconds) {
                if (isNaN(seconds)) {
                    return "00:00"
                }
                var minute = Math.floor(seconds / 60)
                if (minute < 10) {
                    minute = "0" + minute;
                }
                var second = Math.floor(seconds % 60)
                if (second < 10) {
                    second = "0" + second;
                }
                return minute + ":" + second
            }
        },
        methods: {
            loaded: function(){
                this.duration = this.$els.player.duration;
            },
            play: function () {
                this.$els.player.play();
                this.playing = true;
            },
            pause: function () {
                this.$els.player.pause();
                this.playing = false;
            },
            update: function () {
                let player = this.$els.player
                this.past = player.currentTime;
                let percent = player.currentTime / player.duration
                let control = this.$els.ctrl;
                control.style.left = Math.floor(percent * 100) + "%";
            },
            ended: function () {
                let control = this.$els.ctrl;
                control.style.left = 0;
                this.playing = false;
                this.past = "00:00";
            },
            progress: function (val) {
                let player = this.$els.player
                if(val > 0){
                    player.currentTime += 10;
                }else{
                    player.currentTime -= 10;
                }

            },
            drag: function (e) {
                let ctrl = $(this.$els.ctrl);
                let player = this.$els.player;
                if(!$(e.target).hasClass('audio-progress') || player.currentTime == 0){
                    return;
                }
                let totalX = ctrl.parent().width();
                let targetX = e.offsetX;
                let percent = targetX/totalX;

                player.currentTime = Math.ceil(player.duration * percent);
                this.$els.ctrl.style.left = Math.floor(percent * 100) + "%";
            }
        }
    }
</script>
