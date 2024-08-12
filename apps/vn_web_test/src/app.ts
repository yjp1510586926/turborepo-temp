/*
 * @Description:
 * @Autor: yjp
 * @Date: 2024-07-18 14:54:00
 * @LastEditors: yjp
 * @LastEditTime: 2024-07-19 19:21:19
 * @FilePath: /vn_web_react/src/app.ts
 */

import { httpConfig } from '@/services/http';
import type { RequestConfig } from '@umijs/max';
import { isMobile } from './utils';

export const request: RequestConfig = { ...httpConfig };

// 基准大小
const baseSize = 31;
// 设置 rem 函数
const setRem = () => {
  //   debugger;
  if (isMobile()) {
    // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
    const scale = document.documentElement.clientWidth / 750;
    // 设置页面根节点字体大小
    document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
  }
};
// 初始化
setRem();
// 改变窗口大小时重新设置 rem
window.addEventListener('resize', setRem);
