const render = function(el, board){
  console.log("el ", el);
  const document = el.ownerDocument;
  const cellCount = Math.max(...board.vials.map(v=>v.length))
  for(const vial of board.vials){
    const vialNode = document.createElement("div");
    vialNode.setAttribute("class", "vial");
    const waters = [...vial];
    for(let i=waters.length;i<cellCount;++i){
      waters.push(0);
    }

    for(const water of waters.reverse()){
      const cellNode = document.createElement("div");
      cellNode.setAttribute("class", "cell color-" + water);
      vialNode.appendChild(cellNode);
    }

    el.appendChild(vialNode);
  }
}
