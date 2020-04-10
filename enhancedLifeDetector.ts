const botanistBridgeArg = process.argv[2];
const bbNum = Number(botanistBridgeArg);

let enhancedTreeStatus: string = "";
if (bbNum === 0) {
  enhancedTreeStatus = "alive";
} else if (bbNum === 1) {
  enhancedTreeStatus = "flowering";
} else if (bbNum === 2) {
  enhancedTreeStatus = "shedding";
} else {
  enhancedTreeStatus = "other";
}

console.log(enhancedTreeStatus);
