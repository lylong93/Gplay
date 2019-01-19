class Player {
  constructor(opt,video) {
    this.video = video;
    this.src = opt.src; // 资源
    this.totletime = 0; //总时间
    this.currentTime = 0; //当前时间
    this.voice = 0; //音量
    this.playing = false; //播放中
    this._init();
  }
  // 播放
  play() {
    if(this.playing) {
      this._pasue()
      return
    }
    this.video.play()
    this.playing = true
    // this.video.muted = false
    // this.video.volume = 0.2
    // this.playing = true
  }
  // 暂停
  _pasue() {
    this.video.pause()
    this.playing = false
    // this.video.pause();
    // var video = document.getElementById('main');
    // console.log(o.paused)
    // console.log(video.paused)
    // video.pause(); 

  }
  // 停止
  stop() {
    this.video.stop()
    this.playing = false
  }
  // 全屏
  full() {
    // console.log( this.video.duration)
    console.log(this.video.played.length)
    this.totletime = this.video.duration;
    console.log( this.video.duration)
    // this.video.play();
    // launchFullscreen(this.video);\
    // this.video.webkitRequestFullScreen()
  }
  // 改变进度
  stop(time) {
    this.totletime = time
  }


  _init() {    
    this.totletime = this.video.duration;
  }
}

export default Player;
