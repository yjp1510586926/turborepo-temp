/*
 * @Description:
 * @Autor: yjp
 * @Date: 2024-07-18 15:37:34
 * @LastEditors: yjp
 * @LastEditTime: 2024-07-19 19:45:33
 * @FilePath: /vn_web_react/.umirc.ts
 */
import { defineConfig } from '@umijs/max';

export default defineConfig({
  hash: true,
  alias: {
    imgs: '/src/assets/imgs',
  },
  antd: {},
  access: {},
  model: {},
  initialState: {},
  title: "VN - The World's First Chain Broker",
  links: [{ rel: 'icon', href: '/favicon.ico' }],
  request: {
    dataField: 'data',
  },
  history: { type: 'hash' },
  tailwindcss: {},
  extraPostCSSPlugins: [
    require('postcss-pxtorem')({
      rootValue: 16, // 根元素字体大小，通常设置为16px
      unitPrecision: 5, // 转换后的单位精度
      propList: ['*'], // 需要转换的属性，* 表示所有属性
      selectorBlackList: [], // 不转换的选择器
      replace: true, // 是否直接替换为 rem
      mediaQuery: false, // 是否转换媒体查询中的 px
      minPixelValue: 0, // 小于或等于此值的 px 不转换
    }),
  ],
  proxy: {
    '/api': {
      target: 'https://vn.kaistock.xyz',
      changeOrigin: true,
    },
  },
  layout: false,
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      layout: false,
      routes: [
        { path: '', component: '@/pages/Home/index' },
        { path: '*', component: '@/pages/404' },
      ],
    },
    { path: '/*', component: '@/pages/404' },
  ],
  styles: [],
  npmClient: 'pnpm',
  mfsu: {
    exclude: [/^@repo/],
  },
});
