class Model {
  constructor(opt) {
    // this.video = '';
    this.o  = document.getElementById('time').innerText
    this.src = opt.src; // 资源
    this.totletime = 0; //总时间
    this.currentTime = 0; //当前时间
    this.voice = 0; //音量
    this.playing = false; //播放中
    // this._init();
  }
  // 播放
  play() {
    this.playing = true;
  }
  // 暂停
  pasue() {
    this.video.pasue()
    this.playing = false;
  }
  // 停止
  stop() {
    this.video.stop()
  }
  // 改变进度
  stop(time) {
    
    // this.video.stop()
    this.totletime = time
  }

  // _init() {
  //   this.video = document.querySelector('.player-screen');
  //   this.totletime = this.video.duration;
  // }

  //音量加
  //音量减
}

export default Model;
