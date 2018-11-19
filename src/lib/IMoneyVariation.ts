export type Operator = '+'|'-'

export default interface IMoneyVariation {
  readonly title: string,
  readonly value: number,
  readonly responsible: string,
  readonly createdAt: Date,
  readonly tags: string[],
}
