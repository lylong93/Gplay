import stitch from "./template";

let create = opt => {
  let { id } = opt;
  const el = _$(id);
  if (!el) {
    throw Error("id err");
  }
  let template = stitch(opt);
  el.innerHTML = template;
  return parse();
};
let parse = () => {
  let list = [
    "player-video",
    "player-playbtn",
    "player-mutedbtn",
    "player-vicoebtn",
    "player-timeProgress",
    "player-timeProgressBtn",
    "player-voiceProgress",
    "player-voiceProgressBtn",
    "player-totalTime",
    "player-currentTime"
  ];
  let obj = {};

  list.map(item => {
    let name = item.split("-")[1];

    const odiv = _$(item);
    obj[name] = odiv;
  });

  return obj;
};

let _$ = id => {
  return document.querySelector(`#${id}`);
};

export default create;
