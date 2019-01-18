// // var supportsVideo = !!document.createElement('video').canPlayType;
// // if (supportsVideo) {
// //    // set up custom controls
// //    // ...
// // }

// // var videoContainer = document.getElementById('videoContainer');
// // var video = document.getElementById('video');
// // var videoControls = document.getElementById('video-controls');

// // // Hide the default controls
// // video.controls = false;
// // // console.log(document.getElementById('video'))

// // // Display the user defined video controls
// // videoControls.style.display = 'block';



// // playpause.addEventListener('click', function(e) {
// //     if (video.paused || video.ended) video.play();
// //     else video.pause();
// //     console.log(
// //         video.duration // 总时间
// //     )

// //  });

// //  video.addEventListener('timeupdate', function() {
// //     if (!progress.getAttribute('max')) progress.setAttribute('max', video.duration);
// //     progress.value = video.currentTime;
// //     progressBar.style.width = Math.floor((video.currentTime / video.duration) * 100) + '%';
// //  });

// //  //stop
// //  stop.addEventListener('click', function(e) {
// //     video.pause();
// //     video.currentTime = 0;
// //     progress.value = 0;
// //  });
// //  //
// //  mute.addEventListener('click', function(e) {
// //     video.muted = !video.muted;
// //  });

// //  //VolumeSection
// //  volinc.addEventListener('click', function(e) {
// //     alterVolume('+');
// //  });

// //  voldec.addEventListener('click', function(e) {
// //     alterVolume('-');
// //  });
// //  var alterVolume = function(dir) {
// //     var currentVolume = Math.floor(video.volume * 10) / 10;
// //     if (dir === '+') {
// //        if (currentVolume < 1) video.volume += 0.1;
// //     }
// //     else if (dir === '-') {
// //        if (currentVolume > 0) video.volume -= 0.1;
// //     }
// //  }

// //
// //  HTMLMediaElement.currentTime
// var video = document.getElementById("video");

// init(video);




function contral (model, handle) {
    console.log(model);
    console.log(handle);

    // 播放
    let playContral =() => {
        handle.video.play()
        model.play()
    }
    // 改变进度

    let test =() => {
        var o = document.getElementById('time')
        let t = 1
        // setInterval(() => {
        //     o.innerText = t++
        // }, 300);
    }

    test()

    ob(handle.playbtn,playContral);


}






let ob=(target,event,callback)=> {
    if(!callback) {
        let falg = event;
        event = "click";
        callback = falg;
    }
    target.addEventListener(event,callback,false)
}



export default contral;