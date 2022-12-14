/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PatchApi } from "../../..";
import * as core from "../../../core";
import * as serializers from "../..";

export const Order: core.schemas.ObjectSchema<Order.Raw, PatchApi.orders.Order> = core.schemas.object({
  id: core.schemas.lazy(() => serializers.orders.OrderId),
  createdAt: core.schemas.property("created_at", core.schemas.string()),
  production: core.schemas.boolean(),
  state: core.schemas.string(),
  amount: core.schemas.number(),
  unit: core.schemas.string(),
  price: core.schemas.number(),
  patchFee: core.schemas.property("patch_fee", core.schemas.number()),
  currency: core.schemas.string().optional(),
  registryUrl: core.schemas.property("registry_url", core.schemas.string().optional()),
  metadata: core.schemas.string().optional(),
  lineItems: core.schemas.property(
    "line_items",
    core.schemas.list(core.schemas.lazyObject(() => serializers.orders.LineItem))
  ),
  issuedTo: core.schemas.property("issued_to", core.schemas.lazyObject(() => serializers.orders.IssuedTo).optional()),
});

export declare namespace Order {
  interface Raw {
    id: serializers.orders.OrderId.Raw;
    created_at: string;
    production: boolean;
    state: string;
    amount: number;
    unit: string;
    price: number;
    patch_fee: number;
    currency?: string | null;
    registry_url?: string | null;
    metadata?: string | null;
    line_items: serializers.orders.LineItem.Raw[];
    issued_to?: serializers.orders.IssuedTo.Raw | null;
  }
}
