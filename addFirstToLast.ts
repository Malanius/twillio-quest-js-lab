const addFirstToLast = (arr: string[]) => {
  if (arr.length === 0) return "";
  return arr[0] + arr[arr.length - 1];
};
