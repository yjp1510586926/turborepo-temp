import { post } from '@/services/http';
import * as Api from '@/services/typeing';
import { request } from '@umijs/max';

// 校验钱包地址
export function addressCheck(params: any) {
  return request('/api/account/airdrop/address/check', {
    method: 'POST',
    data: params,
  });
}

/**
 * @desc 获取消息提醒
 */
export function getNotifyList(data: { addressId: string }) {
  return request('/api/account/airdrop/message/notify', {
    method: 'POST',
    data,
  });
}

/**
 * @desc 标记消息已读
 */
export function postMessageRead(data: { messagesId: string[] }) {
  return request('/api/account/airdrop/message/read', {
    method: 'POST',
    data,
  });
}

/**
 * @desc 获取overview资产
 */
export function getAssertOverview(data: { addressId: string }) {
  return request('/api/account/airdrop/assert/overview', {
    method: 'POST',
    data,
  });
}

/**
 * @desc 获取股票信息
 */
export async function getStockInfo(data: { eid: string; marketId: string; code: string }) {
  return request('/api/push/api/market/stock/info/v2', {
    method: 'POST',
    data,
  });
}

/**
 * @desc 卖股票
 */
export async function stockSell(data: {
  addressId: string;
  stockCode: string;
  sellAmount: string;
  sellQuantity: string;
}) {
  return request('/api/account/airdrop/stock/sell', {
    method: 'POST',
    data,
  });
}

/**
 * @desc 获取 KYC 授权地址
 */
export async function getKycAddress(data: { address: string; redirectUrl: string }) {
  return request('/api/kyc/verification/request', {
    method: 'POST',
    data,
  });
}

/**
 * @desc kyc 验证
 */
export async function kycCodeVerify(data: { code: string; addressId: string }) {
  return request('/api/account/airdrop/kyc/code/verify', {
    method: 'POST',
    data,
  });
}

/**
 * @desc 提币
 */
export async function withDrawCoin(data: {
  addressId: string;
  protocol: string;
  emailAddress: string;
  withdrawBalance: string;
}) {
  return request('/api/account/airdrop/overview/withdraw', {
    method: 'POST',
    data,
  });
}

/**
 * @desc 剩余提币金额
 */
export async function getWithDrawBalance(data: { addressId: string }) {
  return request('/api/account/airdrop/withdraw/balance/get', {
    method: 'POST',
    data,
  });
}

/**
 * @desc 走马灯信息
 */
export async function getStockMessage(data = {}) {
  return request('/api/account/airdrop/round/message', {
    method: 'POST',
    data,
  });
}
/**
 * @desc 空投活动列表
 */
export const getActiveList = (data = {}) =>
  post<Api.ActiveListe[]>('/api/account/airdrop/active/list', data);

/**
 * @desc 获取地址详情
 */
export const getActiveOne = (data = {}) => post<Api.ActiveList>('/api/account/airdrop/one', data);

/**
 * @desc 广告位列表
 */
export const getAdList = (data = {}) =>
  post<Api.AdData[]>('/api/account/airdrop/sponsor/list', data);
/**
 * @desc 领取股票
 */
export const collectionStock = (data = {}) => post('/api/account/airdrop/collection/stock', data);

// K线 - 获取实时成交数据
// export async function getStockKlineHistory(param: object | any) {
//   const res = await post<any>('/api/push/market/one/kline/v2', param);
//   const lists = res?.data
//     .map((tick: any) => {
//       return {
//         // time: excTime(tick.id, param.mode),
//         time: tick.time,
//         open: tick.open,
//         high: tick.high,
//         low: tick.low,
//         close: tick.close,
//         volume: tick.volume,
//       };
//     })
//     .sort((a: any, b: any) => (a.time > b.time ? 1 : -1));
//   return lists ? lists : void 0;
// }

// K线 - 获取实时成交数据
export async function getStockKlineHistory(param: object | any) {
  return post<any>('/api/push/market/one/kline/v2', param);
  // const lists = res?.data
  //   .map((tick: any) => {
  //     return {
  //       // time: excTime(tick.id, param.mode),
  //       time: tick.time,
  //       open: tick.open,
  //       high: tick.high,
  //       low: tick.low,
  //       close: tick.close,
  //       volume: tick.volume,
  //     };
  //   })
  //   .sort((a: any, b: any) => (a.time > b.time ? 1 : -1));
  // return lists ? lists : void 0;
}

//获取地址已领取股票列表
export const getairdropList = (data = {}) =>
  post<Api.AirdropList[]>('/api/account/airdrop/stock/list', data);

//获取国家
export const getcountryList = (data = {}) => post('/api/user/country/code/get', data);

//KYC 场外验证
export const setKycApi = (data = {}) => post('/api/kyc/verification/offsite-request', data);
