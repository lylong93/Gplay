class Player {
  constructor(opt,video) {
    this.video = video;
    this.src = opt.src; // 资源
    this.totletime = 0; //总时间
    this.currentTime = 0; //当前时间
    this.voice = 0.1; //音量
    this.mutedType = false;
    this.playing = false; //播放中
    this.width = opt.width; // 宽
  }
  // 播放
  play() {
    if(this.playing) {
      this._pasue()
      return
    }
    this.video.play()
    this.playing = true

    if(this.mutedType) {
      return
    }
    this.video.muted = false;
    this.video.voice = this.voice;
  }
  // 暂停
  _pasue() {
    this.video.pause()
    this.playing = false
  }
  // 停止
  stop() {
    this.video.stop()
    this.playing = false
  }
  // // 全屏
  // full() {
  //   console.log(this.video.played.length)
  //   this.totletime = this.video.duration;
  //   console.log( this.video.duration)
  // }
  //改变当前时间
  ctime(time) {
    this.currentTime = time;
  }
  //偏移
  offset() {
    let _offset = (this.currentTime/this.totletime)*100;
    return _offset
  }
  // 静音
  offVoice() {
    this.video.muted = true;
    this.mutedType = true;
  }
    // 音量
  cvoice(voice) {
    this.voice = voice/10;
    this.video.voice = this.voice;
  }

  init(time) {    
    this.totletime = time;
  }
}

export default Player;
