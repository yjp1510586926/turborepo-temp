export function copyMsg(msg: any): boolean {
  const oInput = document.createElement('input');
  oInput.value = msg;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象;
  document.execCommand('Copy'); // 执行浏览器复制命令
  oInput.remove();
  return true;
}

// 埋点的时候 地址以0x开头,在谷歌分析那边会认为是16进制的数字，加上双引号可以避免
export function addressWithDoubleQuotes(address: string) {
  return `"${address}"`;
}
