let _template = `
<div class="player-wrapper">
    <video class="player-screen"  id="player-main" muted src="./src/js/test.mp4"></video>
    <div class="player-contral">
        <div class="player-progress" id="player-progress">
            <div class="player-progress-btn" id="player-progress-btn"></div>
        </div>
        <div class="player-contral-bar">
            <div class="contral-bar-left">
                <div id="player-playbtn">播放</div>
                <span id="player-currentTime">时间条</span>
                <span id="player-time">/</span>
                <span id="player-totalTime">时间条</span>
            </div>
            <div class="contral-bar-right">
                <div id="vicoe">声音</div>
                <div id="fullbtn">全屏</div>
            </div>
        </div>
    </div>
</div>
`; 

export default _template;