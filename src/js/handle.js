class Handel {
  constructor(material) {
    this.playBar = material.playbtn;
    // this.fullBar = material.fullbtn;
    this.timeProgress = material.timeProgress;
    this.timeProgressBtn = material.timeProgressBtn;


    this.voiceProgress = material.voiceProgress;
    this.voiceProgressBtn = material.voiceProgressBtn;
    this.vicoebtn = material.vicoebtn;
    this.totalTime = material.totalTime;
    this.currentTime = material.currentTime;
    this.mutedBar= material.mutedbtn;
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

  ctimeProgress(offset) {
    this.timeProgressBtn.style.width=`${offset}%`;
  }
  cvoiceProgress(e) {
    if(e.target === this.voiceProgress) {
      let p = Math.round(e.offsetY/10)
      let o =(10-p)*10
      // console.log(o)
      this.voiceProgressBtn.style.height=`${o}%`;
      return o/10
    }else {
      let p = Math.round(e.offsetY/10)
      let o = this.voiceProgressBtn.style.height.split('%')[0]- p*10
      // console.log(o)
      this.voiceProgressBtn.style.height=`${o}%`;
      return o/10
    }
  }
  ctime(time) {
    this.currentTime.innerText = this._rt(time);
  }

  init(time) {
    this.currentTime.innerText = '00:00';
    this.totalTime.innerText = this._rt(time)
  }
  _rt(time) {
    let s;
    let h;
    let m;
     h=Math.floor(time/3600);
     m= Math.floor(time/60);
     s= Math.floor(time-m*60);
    if(h<=9) {
      h='0'+h
    }
    if(m<= 9) {
      m='0'+m
    }
    if(s<=9) {
      s='0'+s
    }
    if(h==='00') {
      return `${m}:${s}`
    }else {
      return `${h}:${m}:${s}`
    }
 
  }
}
export default Handel;
