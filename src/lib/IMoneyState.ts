import IExpense from './IExpense'
import IRevenue from './IRevenue'

export default interface IMoneyState {
  readonly balance: number,
  readonly expenses: ReadonlyArray<IExpense>,
  readonly revenues: ReadonlyArray<IRevenue>,
}
