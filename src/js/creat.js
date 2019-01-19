import template from "./template";

let create = id => {
    const el = _$(id);
    if (!el) {
      throw Error("id err");
    }
    el.innerHTML = template;
    return parse();
};
let parse =()=> {
    const video = _$('player-main');
    const playbtn = _$('player-playbtn');
    const fullbtn = _$('player-fullbtn');
    const vicoebtn = _$('vicoebtn');
    const progress =_$('player-progress');
    const progress_btn =_$('player-progress-btn');
    const totalTime =_$('player-totalTime');
    const currentTime = _$('player-currentTime');

    // let list= [];

    // list.map((item)=> {
    //     const obj =_$(`'${item}'`);
    // })
    // let obj

    // return 
    return {
        video,
        playbtn,
        fullbtn,
        vicoebtn,
        totalTime,
        currentTime,
        progress,
        progress_btn
    }
}  

let _$ = (id)=> {
    return document.querySelector(`#${id}`); 
}

export default create