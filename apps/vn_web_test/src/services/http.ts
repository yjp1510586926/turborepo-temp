import { getCommonCookie } from '@/utils/cookie';
import type { RequestConfig } from '@umijs/max';
import { request } from '@umijs/max';

export interface ResponseData<T> {
  code: number;
  message: string;
  success: boolean;
  data: T;
}

export const httpConfig: RequestConfig = {
  timeout: 3 * 1000,
  // other axios options you want
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  // 请求拦截器
  requestInterceptors: [
    (config: any) => {
      // TODO: 请求头中的东西 哪些需要设置 需要确定
      const channel = getCommonCookie('quick_channel');

      if (channel) {
        config.headers['channel'] = channel;
      } else {
        config.headers['channel'] = 2;
      }
      //   if (process.env.NODE_ENV !== 'development') {
      //     config.url = `${window.location.protocol || 'http'}//api.vn.com/${config.url}`;
      //   }
      config.headers['Content-Type'] = 'application/json';
      config.headers['X-Requested-With'] = 'XMLHttpRequest';
      config.headers['appId'] = '10001';
      // config.headers['simulate'] = simulate;
      config.headers['time'] = Date.now();
      config.headers['language'] = 'zh_cn';
      config.headers['deviceType'] = 3;
      config.headers['version'] = 'v1.0';
      return { ...config };
    },
  ],

  // 响应拦截器
  responseInterceptors: [
    (response: any) => {
      const result = response.data;
      if (result?.code === 1) {
        // TODO: 这里umi会自动帮忙结构一层
        return Promise.resolve(response);
      } else {
        return Promise.reject(response.data);
      }
    },
  ],
};

export const get = <T>(
  url: string,
  data?: any,
  config?: RequestConfig,
): Promise<ResponseData<T> | null> => {
  return request(url, {
    method: 'GET',
    data,
    config,
  });
};

export const post = <T>(
  url: string,
  data?: any,
  config?: RequestConfig,
): Promise<ResponseData<T> | null> => {
  return request(url, {
    method: 'POST',
    data,
    config,
  });
};
