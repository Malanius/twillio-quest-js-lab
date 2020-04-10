const plantStatusArg = process.argv[2];
const plantStatus = Number(plantStatusArg);

const plantDrynenessArg = process.argv[3];
const plantDryneness = Number(plantDrynenessArg);

if (plantStatus === 0 && plantDryneness > 10) {
  console.log("WATER");
}
