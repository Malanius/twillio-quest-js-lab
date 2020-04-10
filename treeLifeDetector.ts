const westBridgeArg = process.argv[2];
const wbNum = Number(westBridgeArg);

let treeStatus: string = "";
if (wbNum === 0) {
  treeStatus = "alive";
} else {
  treeStatus = "other";
}

console.log(treeStatus);
