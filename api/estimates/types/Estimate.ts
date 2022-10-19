/**
 * This file auto-generated by Fern from our API Definition.
 */

import { PatchApi } from "../../..";

export interface Estimate {
  /** A unique uid for the record. UIDs will be prepended by est_prod or est_test depending on the mode it was created in. */
  id: PatchApi.estimates.EstimateId;
  /** A boolean indicating if this estimate is a production or demo mode estimate. */
  production: boolean;
  /** The type of estimate. Available types are mass, flight, shipping, vehicle, and crypto. */
  type: string;
  /** The estimated mass in grams for this estimate. */
  massG: number;
  /** An object returning the order associated with this estimate. */
  order?: PatchApi.orders.Order;
}
