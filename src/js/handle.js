class Handel {
  constructor(material) {
    this.playBar = material.playbtn;
    this.fullBar = material.fullbtn;
    this.progress = material.progress;
    this.progress_btn = material.progress_btn;
    this.totalTime = material.totalTime;
    this.currentTime = material.currentTime;
    this.active = false;
  }
  cstate() {
    if (this.active) {
      this.playBar.innerText = "播放";
      this.active = !this.active;
      return;
    }
    this.playBar.innerText = "暂停";
    this.active = !this.active;
  }

  cprogress(offset) {
    this.progress_btn.style.width=`${offset}%`;
  }

  ctime(t) {
    this.currentTime.innerText = t;
  }

  init(time) {
    this.currentTime.innerText = '0';
    this.totalTime.innerText = time
  }
}
export default Handel;
