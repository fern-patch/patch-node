/**
 * This file auto-generated by Fern from our API Definition.
 */

export interface CabinClass<RawValue extends CabinClass.RawValue = CabinClass.RawValue> {
  value: RawValue;
  visit: <Result>(visitor: CabinClass._Visitor<Result>) => Result;
}

const _Economy: CabinClass<"economy"> = {
  value: "economy",
  visit: (visitor) => visitor.economy(),
};
const _Business: CabinClass<"business"> = {
  value: "business",
  visit: (visitor) => visitor.business(),
};
const _First: CabinClass<"first"> = {
  value: "first",
  visit: (visitor) => visitor.first(),
};
export const CabinClass = {
  Economy: _Economy,
  Business: _Business,
  First: _First,
} as const;

export declare namespace CabinClass {
  type RawValue = "economy" | "business" | "first" | string;

  interface _Visitor<Result> {
    economy: () => Result;
    business: () => Result;
    first: () => Result;
    _other: (value: string) => Result;
  }
}