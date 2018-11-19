import IMoneyVariation from './IMoneyVariation'

export default interface IExpense extends IMoneyVariation {
  readonly inBenefitOf?: string,
}
