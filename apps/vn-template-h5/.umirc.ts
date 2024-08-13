import { defineConfig } from '@umijs/max';
import postcsspxtoviewport8plugin from 'postcss-px-to-viewport-8-plugin';
import remToVwPlugin from './postcss-rem-to-vw';
export default defineConfig({
  proxy: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
  ],
  plugins: [],
  npmClient: 'pnpm',
  tailwindcss: {},
  extraPostCSSPlugins: [
    remToVwPlugin({
      remBase: 16,
      viewportWidth: 375,
    }),
    postcsspxtoviewport8plugin({
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: undefined,
      include: undefined,
      landscape: false,
    }),
  ],
});
