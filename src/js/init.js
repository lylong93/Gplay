import Handel from "./handle.js";
import Model from "./model.js";
import contral from "./contral.js";

import template from "./template";

let Gplay = opt => {
  let el = document.querySelector(`#${opt.id}`);

  if (!opt.id || !el) {
    throw Error("id err");
  }
  _create(el);
  _init(opt);
};

let _create = el => {
  el.innerHTML = template;
};

let _init = opt => {
  let handel = new Handel();
  let model = new Model(opt);
  contral(model, handel);
};

export default Gplay;
