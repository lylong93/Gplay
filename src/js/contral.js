function contral (player, handle) {
    let video = player.video

    ob(video,'loadedmetadata',()=> {
        player.init(video.duration)
        handle.init(video.duration)
    })

    ob(video,'timeupdate',()=> {
        handle.ctime(video.currentTime)
        player.ctime(video.currentTime)
        let value = player.offset()
        handle.ctimeProgress(value);
    })

    ob(handle.playBar,()=> {
        handle.cstate();
        player.play();
    });


    ob(handle.timeProgress,(e)=> {
        let o = e.offsetX/player.width*player.totletime
        player.video.currentTime=o
    })

    ob(handle.vicoebtn,()=> {
        player.offVoice();
     
    })

    ob(handle.voiceProgress,(e)=> {
        let voice =  handle.cvoiceProgress(e)
        player.cvoice (voice);
    })
}

let ob=(target,event,callback)=> {
    if(!callback) {
        let _falg = event;
        event ='click'
        callback = _falg;
    }
    target.addEventListener(event,callback,false)
}


export default contral;