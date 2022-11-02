/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PatchApi } from "../../..";
import * as core from "../../../core";

export const CabinClass: core.schemas.Schema<CabinClass.Raw, PatchApi.estimates.CabinClass> = core.schemas
  .string()
  .transform<PatchApi.estimates.CabinClass>({
    parse: (value) => PatchApi.estimates.CabinClass._parse(value),
    json: ({ value }) => value,
  });

export declare namespace CabinClass {
  type Raw = string;
}