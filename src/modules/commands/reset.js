'use strict';
// todo this needs review
module.exports = function (gameServer, split) {
  var nodes = gameServer.getWorld().getNodes().toArray();
  for (let i = 0; i < nodes.length; i++) {
    if (!nodes[0]) continue;
    gameServer.removeNode(nodes[0])
    
  } 
  console.log("[Console] Reset the game");
};
