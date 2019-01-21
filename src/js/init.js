import Handel from "./handle.js";
import Player from "./player.js";
import contral from "./contral.js";

import creat from './creat';


let Gplay = opt => {
  _init(opt);
};

let _init = (opt) => {
  let material = creat(opt);
  let {video} = material;
  let handel = new Handel(material);
  let model = new Player(opt,video);
  contral(model, handel);
};

export default Gplay;
