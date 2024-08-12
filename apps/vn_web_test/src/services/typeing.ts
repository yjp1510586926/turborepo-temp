export type ActiveListe = {
  /**
   * 已经领取数量
   */
  claimed?: number;
  /**
   * 每人可领
   */
  defaultClaimed?: number;
  /**
   * 停止时间
   */
  endTime?: number;
  /**
   * 主键
   */
  id: number;
  /**
   * 开始时间
   */
  startTime?: number;
  /**
   * 股票代码
   */
  stockCode?: string;
  /**
   * 股票名称
   */
  stockName: string;
  /**
   * 一共可领取
   */
  total?: number;
  [property: string]: any;
};

export interface ActiveList {
  /**
   * 地址
   */
  address: string;
  /**
   * 创建时间
   */
  createTime: number;
  /**
   * 主键Id
   */
  id: number;
  /**
   * 0-未进行，1-进行中，2-已完成，3-失败
   */
  kycStatus: 0 | 1 | 2 | 3;
  userId: null;
  [property: string]: any;
}

export interface AdData {
  /**
   * 公司名称
   */
  companyName?: string;
  /**
   * 创建时间
   */
  createTime?: number;
  /**
   * 主键id
   */
  id?: number;
  /**
   * 简介
   */
  intro?: string;
  /**
   * 公司logo
   */
  logo?: null;
  /**
   * tg联系方式
   */
  tg?: null;
  /**
   * 标题
   */
  title?: string;
  /**
   * 链接
   */
  webUrl?: string;
  [property: string]: any;
}

export interface AirdropList {
  /**
   * 地址Id
   */
  addressId?: number;
  /**
   * 领取股票时间
   */
  collectionTime?: number;
  /**
   * 主键Id
   */
  id?: number;
  /**
   * 卖出金额
   */
  sellAmount?: string;
  /**
   * 卖出数量
   */
  sellQuantity?: number;
  /**
   * 卖出状态，0-未卖出， 1-已卖出
   */
  sellStatus?: number;
  /**
   * 卖出时间
   */
  sellTime?: number;
  /**
   * 股票数量
   */
  stockAmount?: null;
  /**
   * 股票code
   */
  stockCode?: string;
  /**
   * 股票金额
   */
  stockQuantity?: number;
  /**
   * 提币金额
   */
  withdrawBalance?: string;
  /**
   * 是否已经提币
   */
  withdrawed?: number;
  /**
   * 提币协议
   */
  withdrawProtocol?: string;
  /**
   * 提币时间
   */
  withdrawTime?: number;
  [property: string]: any;
}
