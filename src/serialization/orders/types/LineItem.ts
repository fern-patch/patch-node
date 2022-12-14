/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PatchApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const LineItem: core.schemas.ObjectSchema<LineItem.Raw, PatchApi.orders.LineItem> = core.schemas.object({
  id: core.schemas.lazy(() => serializers.orders.ItemId),
  project: core.schemas.lazyObject(() => serializers.orders.Project),
  vintageYear: core.schemas.property("vintage_year", core.schemas.number()),
  amount: core.schemas.number(),
  unit: core.schemas.string(),
  price: core.schemas.number(),
  currency: core.schemas.string(),
});

export declare namespace LineItem {
  interface Raw {
    id: serializers.orders.ItemId.Raw;
    project: serializers.orders.Project.Raw;
    vintage_year: number;
    amount: number;
    unit: string;
    price: number;
    currency: string;
  }
}
