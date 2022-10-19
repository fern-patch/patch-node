import { PatchApi } from "@fern-api/patch";

void main();

async function main() {
  const { PATCH_TOKEN } = process.env;
  if (PATCH_TOKEN == null) {
    throw new Error("PATCH_TOKEN is not set in your environment");
  }

  const patch = new PatchApi.Client({
    _origin: "https://api.patch.io/v1/",
    _token: PATCH_TOKEN
  });

  const response = await patch.estimates.createFlightEstimate({
    originAirport: "SEA",
    destinationAirport: "SFO",
    aircraftCode: "73G",
    cabinClass: PatchApi.CabinClass.Business,
    passengerCount: 4
  });

  if (response.ok) {
    console.log("Got an estimate!", response.body);
  } else {
    console.error("Failed to create estimate", response.error);
  }

}