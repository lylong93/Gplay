function contral (model, handle) {
    // console.log()
    console.log(model);
    console.log(handle);

    ob(model.video,'loadedmetadata',()=> {
        handle.init(model.video.duration)
    })

    ob(handle.playBar,()=> {
        handle.cstate();
        model.play();
    });

    // ob(handle.fullBar,()=> {
    //     model.full()
    // });

    ob(handle.progress,(e)=> {
        let o = e.offsetX/600*322
        model.video.currentTime=o
    })

    ob(model.video,'timeupdate',()=> {
        handle.ctime(model.video.currentTime)
        var offset =(model.video.currentTime/model.video.duration)*100;
        handle.cprogress(offset);
    })

}

let ob=(target,event,callback)=> {
    console.log(target)
    if(!callback) {
        let _falg = event;
        event = "click";
        callback = _falg;
    }
    target.addEventListener(event,callback,false)
}



export default contral;