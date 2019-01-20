

function stitch(opt) {

    let _template = `
        <div class="player-wrapper" style="width:${opt.width}px;height:${opt.height}px">
            <video class="player-video" id="player-video" muted src=${opt.src}></video>
            <div class="player-contral">
                <div class="player-progress" id="player-timeProgress">
                    <div class="player-progress-btn" id="player-timeProgressBtn"></div>
                </div>
                <div class="player-contral-bar">
                    <div class="contral-bar-left">
                        <div id="player-playbtn">播放</div>
                        <span id="player-currentTime">时间条</span>
                        <span id="player-time">/</span>
                        <span id="player-totalTime">时间条</span>
                    </div>
                    <div class="contral-bar-right">
                        <div id="player-mutedbtn">静音</div>
                        <div  id="player-vicoebtn" class="vivoe">音量
                            <div class="vicoe-progress" id="player-voiceProgress">
                                <div class="vicoe-progress-btn" id="player-voiceProgressBtn"></div>
                            </div>
                        </div>
                        <div id="player-fullbtn">全屏</div>
                    </div>
                </div>
            </div>
        </div>
    `; 
    return _template
}




export default stitch;