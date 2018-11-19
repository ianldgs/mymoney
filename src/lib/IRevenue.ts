import IMoneyVariation from './IMoneyVariation'

export default interface IRevenue extends IMoneyVariation {
  readonly origin: string,
}
