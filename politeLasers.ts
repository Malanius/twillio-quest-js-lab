const getLaserSetting = (arg: string) => {
  if (arg === "please") {
    return "OFF";
  }
  return "ON";
};
