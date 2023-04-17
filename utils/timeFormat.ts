function dateFormat(time: number, fmt: string, isMS = true): string {
  const divisor = isMS ? 1 : 1000;
  const date = new Date(time * divisor);
  const tokens = {
    "M+": date.getMonth() + 1,
    "D+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "S+": date.getMilliseconds(),
  };
  let token: keyof typeof tokens;
  for (token in tokens) {
    const reg = new RegExp(token, "g");
    const value = String(tokens[token]).padStart(
      token.length === 1 ? 2 : token.length,
      "0"
    );
    fmt = fmt.replace(reg, value);
  }
  return fmt;
}

export const formatMS = (time: number, isMS = true) => {
  return dateFormat(time, "mm:ss", isMS);
};

export const formatSs = (time: number) => {
  return String(Math.floor(time)).padStart(2, "0");
};

export const toMS = (time: number) => {
  return Math.floor(time) * 1000;
};
