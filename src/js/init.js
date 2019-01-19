import Handel from "./handle.js";
import Player from "./player.js";
import contral from "./contral.js";

import creat from './creat';

let Gplay = opt => {
  let {id} = opt;
  let material = creat(id);
  _init(opt,material);
};

let _init = (opt,material) => {
  let {video} = material;
 
  let handel = new Handel(material);
  let model = new Player(opt,video);
  contral(model, handel);
};

export default Gplay;
