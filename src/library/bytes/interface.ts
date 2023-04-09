export type BitValue = 0 | 1;

export interface IBitGetterResponse {
  get(index: number, bitPosition: number): number;
  set(index: number, bitPosition: number, value: BitValue): void;
}

export interface IValidateParams {
  index: number;
  bitPosition: number;
}
