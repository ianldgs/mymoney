export default interface IExpense {
  value: number,
  creator: string,
  inBenefitOf: string,
  spentAt: Date,
  tags: string[],
}
