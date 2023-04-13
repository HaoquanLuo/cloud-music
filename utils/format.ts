type DateFormat = {
  "M+": number;
  "D+": number;
  "h+": number;
  "m+": number;
  "s+": number;
};

// function formatDate(time: number, fmt: string, isMS = true): string {
//   const date = new Date(time);

//   const formatObj: Record<string, any> = {
//     "M+": date.getMonth() + 1,
//     "d+": date.getDate(),
//     "h+": date.getHours() % 12 || 12,
//     "H+": date.getHours(),
//     "m+": date.getMinutes(),
//     "s+": date.getSeconds(),
//     "q+": Math.floor((date.getMonth() + 3) / 3),
//     S: date.getMilliseconds(),
//   };

//   const divider = isMS ? 1000 : 1;
//   // 将秒数转换为分钟和秒数，并添加到 formatObj 中
//   const totalSeconds = Math.floor(time / divider);
//   const minutes = Math.floor(totalSeconds / 60);
//   const seconds = totalSeconds % 60;

//   formatObj["mm"] = String(minutes).padStart(2, "0");
//   formatObj["ss"] = String(seconds).padStart(2, "0");

//   const result = Object.keys(formatObj).reduce((formatted, key) => {
//     const regex = new RegExp(`(${key})`, "g");
//     const value = formatObj[key];
//     const replacement =
//       key === "y+"
//         ? String(date.getFullYear()).slice(-formatted.length)
//         : key === "S"
//         ? String(value).padStart(3, "0")
//         : key === "h+" && date.getHours() >= 12
//         ? String(value % 12 || 12).padStart(formatted.length, "0")
//         : String(value).padStart(2, "0");

//     return formatted.replace(regex, replacement);
//   }, fmt);

//   return result;
// }
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
